
import "./contractInterface/AccountInterface.sol";
import "./contractInterface/BaseAppInterface.sol";
import "./contractBase/Token.sol";
import "./contractBase/BaseData.sol";

contract Account is BaseLogic , AccountInterface{

    enum status{

        normal,
        freeze

    }

    enum TxStatus{

        waitMoreApprove,
        Approved,
        Rejected

    }

    struct ApproveTx{

        uint[] m_owners;
        TxStatus m_TxStatus;

    }

    struct AccountData{

        //交易阀值
        uint m_Tx_threshold;

        //重置拥有者最低阀值
        uint m_Re_threshold;

        //全部权重总数
        uint m_weightAmount;

        // core can do many operation like refund
        address m_core;

        //Tx manager contract address
        address m_coreTx;

        //authority address
        address m_authority;

        //owner address=>weight;
        mapping(address=>uint) m_owners;

        //ca address
        address m_CA;

        // to iterator owners
        address[] m_ownerFind;

        // id level
        // 0:       default
        // 1:       e-mail and phone
        // 2:       railname
        // 100+:    have CA
        uint m_level;

        status m_status;

        //0:Base account, have to check pass set by tx manager,and the default value is 0
        //1:DAO account,can have many owners account do not check pass that set by tx manager
        uint m_type;

    }

    AccountData m_data;
    // txHash => bool

    mapping(uint=>bool) m_signsPass;

    // this is a temporary methods , only support one wait pass tx;
    uint   m_waitPassTx;

    uint      m_other;


    /*
    modifier ifCore() {if (msg.sender != m_data.m_core) throw;_;}
    modifier iffreeze(){if(m_data.m_status==status.freeze) throw;_;}
    modifier onlyCore() {if (msg.sender != m_data.m_core) throw;_;}
    */

    function Account()BaseData(uint(msg.sender)){}
    function ifCore()internal{if (msg.sender != m_data.m_core)      {throwErrEvent(60020000); } }

    function ifCoreTx()internal{if(msg.sender != m_data.m_coreTx)   {throwErrEvent(60020000); } }

    function iffreeze()internal{if(m_data.m_status==status.freeze)  {throwErrEvent(60020001); } }

    function init(
    address _owner,
    uint _weight,
    uint _Tx_threshold,
    uint _Re_threshold,
    address _core,
    address _coreTx)returns (bool success)
    {
        beforeInit();
        if(_weight<_Tx_threshold)                           {throwErrEvent(60021001); }
        m_data.m_core=_core;
        m_data.m_coreTx=_coreTx;
        m_data.m_Tx_threshold=_Tx_threshold;
        m_data.m_Re_threshold=_Re_threshold;
        m_data.m_owners[_owner]=_weight;
        m_data.m_weightAmount=_weight;
        m_data.m_ownerFind.push(_owner);
        //m_data.m_type＝0;
        CreateAccount(m_data.m_ownerFind[0],m_data.m_owners[_owner],_Tx_threshold,_core,_coreTx);
        return true;

    }

    function createToken(
        bytes32 _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint _closingTime,
        string _description,
        uint  _hash,
        uint _tokenManager)
    {
        transactionCheck();
        // to void include conflict
        assembly{
            mstore(0x160,0x4e0732c8)// tokenManager createToken() sig
            calldatacopy(0x180,0x04,sub(calldatasize,0x04))
            jumpi(0x02,iszero(call(gas,_tokenManager,callvalue,0x17c, add(calldatasize,0x04), 0x80, 0x20)))
        }

        successEvent();
    }

    /*function registerToken(
        bytes32 _symbol,
        address _logicAddress){


        }*/
    function transferToken(
        address _tokenContract,
        address _to,
        uint256 _amount)returns (bool success)
    {
        transactionCheck();

        Token t=Token(_tokenContract);
        t.transfer.gas(msg.gas)(_to,_amount);

    }

    function transferTokenReceipt(
        address _tokenContract,
        address _to,
        uint256 _amount) returns (bool success){

        transactionCheckOrgin();
        Token t=Token(_tokenContract);
        return t.transfer.gas(msg.gas)(_to,_amount);

    }

    function approvalCall(address _contractAddress /*uint32 _sig, bytes _data*/){
        transactionCheck();
        callRaw(_contractAddress);
    }

    function callRaw(address _contractAddress)internal{

        assembly{

            calldatacopy(0x6C,0x24,sub(calldatasize,0x24))
            call(gas,_contractAddress,callvalue,0x6c,sub(calldatasize,0x24), 0x60, 0x20)
            return(0x60, 0x20)
        }
    }

    function changeOwner(
        address _contract,
        address _to) returns (bool success){

        BaseAppInterface app=BaseAppInterface(_contract);
        return app.changeOwner.gas(msg.gas)(_to);
    }

    function issueMoreToken(address tokenContract,uint256 _amount)returns (bool success){

        transactionCheck();
        Token t=Token(tokenContract);
        t.issueMore.gas(msg.gas)(_amount);

    }

    function destroyToken(address tokenContract,uint256 _amount)returns (bool success){

        transactionCheck();
        Token t=Token(tokenContract);
        t.destroy.gas(msg.gas)(_amount);

    }

    function resetAccountOwner(uint _Tx_threshold,address[] _owners,uint[] _weight) returns(bool success){

        ifCore();
        if (!checkOwner(_Tx_threshold,_owners,_weight))     {throwErrEvent(60021001); }
        uint t_totalWeight=0;
        for(uint i=0;i<_owners.length;i++){
            m_data.m_owners[_owners[i]]=_weight[i];
            t_totalWeight+=_weight[i];
        }
        m_data.m_Tx_threshold=_Tx_threshold;
        m_data.m_ownerFind=_owners;
        m_data.m_weightAmount=uint(t_totalWeight);
        ReSetAccountOwner(_Tx_threshold,_owners,_weight);
        return true;

    }

    function setPass(uint _hash) returns (bool success){

        iffreeze();
        ifCoreTx();
        if(msg.sender!=m_data.m_coreTx) {throwErrEvent(60021003); }
            m_waitPassTx=_hash;

        successEvent();
        return true;

    }

    function setIdLevel(uint _level)  returns(bool success){

        ifCore();
        m_data.m_level=_level;
        return true;

    }

    function setCA(address _CA)returns(bool success){

        ifCore();
        if (m_data.m_level<100)
            m_data.m_level+=100;
        m_data.m_CA=_CA;
        return true;

    }

    function revokeCA() returns(bool success){

        ifCore();
        if (m_data.m_level<100)                 {throwErrEvent(60021004); }
        m_data.m_level-=100;
        m_data.m_CA=address(0);
        return true;

    }

    function freeze() returns(bool success){

        ifCore();
        m_data.m_status=status.freeze;

    }

    function unfreeze() returns(bool success){

        ifCore();
        m_data.m_status=status.normal;

    }

    function summary()constant returns(
        address _core,
        address _TxCore,
        uint _status,
        uint _level,
        uint _ownerAmount,
        uint _tx_threshold,
        uint _Re_threshold,
        address _CA,
        address[] _owner,
        uint[] _weight)
        {
            _core=m_data.m_core;
            _TxCore=m_data.m_coreTx;
            _status=uint(m_data.m_status);
            _level=m_data.m_level;
            _ownerAmount=m_data.m_ownerFind.length;
            _tx_threshold=m_data.m_Tx_threshold;
            _Re_threshold=m_data.m_Re_threshold;
            _CA=m_data.m_CA;
            _owner=m_data.m_ownerFind;
            uint[] memory t_weight=new uint[](_ownerAmount);
            for(uint i=0;i<_ownerAmount;i++)
                t_weight[i]=uint(m_data.m_owners[m_data.m_ownerFind[i]]);
            _weight=t_weight;
            return;

    }

    function getOwner(uint _no)constant returns(address _owner,uint _weight){

        address tmp=m_data.m_ownerFind[_no];
        return(tmp, m_data.m_owners[tmp]);

    }

    event Pass(uint ,uint);
    function checkPass()internal {

        uint t_hash=uint(sha3(msg.data));
        if (m_waitPassTx!=t_hash)
        {

            Pass(m_waitPassTx,t_hash);
            throwErrEvent(60020002);

        }

    }
    //event CheckOwnerP(address _address);
    function transactionCheck()internal {

        //check freeze
        iffreeze();
        //check if set pass by tx manager
        //checkPass();
        //check owner
        //CheckOwnerP(msg.sender);
        if(!checkApprove(msg.sender))                                {throwErrEvent(60021003); }

    }

    function transactionCheckOrgin()internal {

        //check freeze
        iffreeze();
        //check if set pass by tx manager
        //checkPass();
        //check owner
        //CheckOwnerP(tx.origin);
        if(!checkApprove(address(tx.origin)))                                {throwErrEvent(60021003); }

    }

    // check owner weight amount make sure sum weight of owner >_Tx_threshold
    function checkOwner(uint _Tx_threshold,address[] _owners,uint[] _weight) internal returns(bool success){
        if (_owners.length!=_weight.length)                 {throwErrEvent(60021002); }
        uint t_Tx_threshold=0;
        for(uint i=0;i<_owners.length;i++)
            t_Tx_threshold+=_weight[i];
        if (t_Tx_threshold<_Tx_threshold)
            return false;
        else
            return true;
    }

    //check approve of owner
    function checkApprove(address _owner)internal returns(bool success){

        address[] memory _owners=new address[](1);
        _owners[0]=_owner;
        return getApproves(_owners);

    }

    function getApproves(address[] _owners)internal returns(bool success){

        uint  t_total=0;
        for(uint i=0;i<_owners.length;i++)
            t_total+=m_data.m_owners[_owners[i]];
        return t_total>=m_data.m_Tx_threshold;

    }

}