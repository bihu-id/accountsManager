import "Token.sol";
import "BaseData.sol";

contract AccountInterface is BaseLogic{

    //function call other contract                              调用其他合约的函数

    /// @notice create token ,contract check the account was created by AccountManager ,but not check the account have access to create token
    /// 创建资产,合约检查创建者是不是由AccountManager管理的账户,但是并检查是否有权力创建资产
    /// @param _symbol symbol of token ,Max size 32 bytes32 ,ASCII of symbol,contract do not check the length .. 资产的代号,不可重复,最大32字节,是字母的ASCII,合约只检查是否重复,但不检查长度,大小写,和其他规则
    /// @param _maxSupply max supply of the token               资产最大供应量,如果当前供应量=资产最大供应量,那么资产不能增发
    /// @param _precision precision of token                    资产的精度
    /// @param _currentSupply ..                                当前供应量
    /// @param _closingTime ..                                  资产结束时间,UTC 以秒位单位的实数
    /// @param _description ..                                  资产描述
    /// @param _hash hash of token contract                     资产合同的HASH
    /// @param _tokenManager tokenManager contract address      资产管理合约的地址
    function createToken(
        bytes32 _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint _closingTime,
        string _description,
        uint  _hash,
        uint _tokenManager);

    /// @notice transfer token by account owner key sign
    /// @param _tokenContract token contract address            资产合约地址
    /// @param _to token send to                                资产接收账户
    /// @param _amount send amount (amount*precision)           发送的数量(数量*精度)
    function transferToken(
        address _tokenContract,
        address _to,
        uint256 _amount) returns (bool success);

    /// @notice issue more token by token owner account         增发资产,由资产拥有者账户调用
    /// @param _tokenContract token contract address            资产合约地址
    /// @param _amount issue amount (amount*precision)          增发的数量(数量*精度)
    function issuerMoreToken(address _tokenContract,uint256 _amount)returns (bool success);

    /// @notice destroyToken token by token owner account       销毁资产,由资产拥有者账户调用,需要持有相应数量的资产
    /// @param _tokenContract token contract address            资产合约地址
    /// @param _amount destroy amount (amount*precision)        销毁的数量(数量*精度)
    function destroyToken(address _tokenContract,uint256 _amount)returns (bool success);

    /// constant return function     常调用函数

    /// @notice get the _owner address and it _weight by no     通过owner编号获得获得账户的owner
    /// @param _no _owner no                                    owner的编号
    /// @return _owner owner address                            owner的地址
    /// @return _weight weight of this owner                    owner的权重
    function getOwner(uint _no)constant returns(address _owner,uint _weight);

    /// @notice return summary of account contract
    /// @return _core
    /// @return _TxCore
    /// @return _status
    /// @return _level real name level
    /// @return _ownerAmount how many owner
    /// @return _tx_threshold Tx threshold of this account
    /// @return _Re_threshold reset owner by user threshold of this account
    /// @return _owners
    /// @return _weight
    /// @return _CA
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
        uint[] _weight);

    //event                                                     事件

    /// @notice reset account owner                             重置用户owner
    /// @param _Tx_threshold ..                                 交易开启权重
    /// @param _owners ..                                       账户拥有者
    /// @param _weight ..                                       拥有者权重
    event ReSetAccountOwner(uint _Tx_threshold,address[] _owners,uint[] _weight);
    event CreateAccount(    address _owner,
                            uint _weight,
                            uint _Tx_threshold,
                            address _core,
                            address _coreTx);

    //called by other contract                                  被其他合约调用的函数

    /// @notice set pass a Tx
    /// @param _hash hash of Tx
    /// @return Whether this set was successful or not
    function setPass(uint _hash,uint _other) returns (bool success);

    /// @notice set account realname level
    /// @param _level realname level
    /// @return Whether this set was successful or not
    function setIdLevel(uint _level)returns(bool success);

    /// @notice freeze an account
    /// @return Whether freeze was successful or not
    function freeze()returns(bool success);
    //only can been called by Core (xindi)
    function resetAccountOwner(uint _Tx_threshold,address[] _owners,uint[] _weight) returns(bool success);

}
contract Account is AccountInterface{

    enum status{

        normal,
        freeze

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

        // sign of token code contract
        uint sign_r;

        uint sign_s;

        uint sign_v;
        //notice cannot add only variable above!!!

    }

    AccountData m_data;
    // txHash => bool

    mapping(uint=>bool) m_signsPass;

    // this is a temporary methods , only support one wait pass tx;
    bytes32   m_waitPassTx;

    uint      m_other;
    /*
    modifier ifCore() {if (msg.sender != m_data.m_core) throw;_;}
    modifier iffreeze(){if(m_data.m_status==status.freeze) throw;_;}
    modifier onlyCore() {if (msg.sender != m_data.m_core) throw;_;}
    */

    function Account()BaseData(uint(msg.sender)){}
    function ifCore()internal{if (msg.sender != m_data.m_core)      {Err(60020000);  throw;} }

    function ifCoreTx()internal{if(msg.sender != m_data.m_coreTx)   {Err(60020000);  throw;} }

    function iffreeze()internal{if(m_data.m_status==status.freeze)  {Err(60020001);  throw;} }

    function init(
    address _owner,
    uint _weight,
    uint _Tx_threshold,
    uint _Re_threshold,
    address _core,
    address _coreTx)returns (bool success)
    {
        beforeInit();
        if(_weight<_Tx_threshold)                           {Err(60021001);  throw;}
        m_data.m_core=_core;
        m_data.m_coreTx=_coreTx;
        m_data.m_Tx_threshold=_Tx_threshold;
        m_data.m_Re_threshold=_Re_threshold;
        m_data.m_owners[_owner]=_weight;
        m_data.m_weightAmount=_weight;
        m_data.m_ownerFind.push(_owner);
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
            //checkPass(sha3(msg.data));
            //uint t_address =m_other;

            if(!checkOwners(msg.sender))                                {Err(60021003);  throw;}
            assembly{
                mstore(0x160,0x4e0732c8)// tokenManager createToken() sig
                calldatacopy(0x180,0x04,sub(calldatasize,0x04))
                jumpi(0x02,iszero(call(gas,_tokenManager,callvalue,0x17c, add(calldatasize,0x04), 0x80, 0x20)))
            }
    }

    function transferToken(
        address _tokenContract,
        address _to,
        uint256 _amount)returns (bool success)
    {
        iffreeze();
        if(!checkOwners(msg.sender))                                {Err(60021003);  throw;}
        // it is a bad way now ,
        //checkPass(sha3(msg.data));
        address []memory t_owner=new address[](1);
        t_owner[0]=msg.sender;
        //if(getApprove(t_owner)){
            Token t=Token(_tokenContract);
            t.transfer.gas(msg.gas)(_to,_amount);
        //}

    }

    function issuerMoreToken(address tokenContract,uint256 _amount)returns (bool success){

        iffreeze();
        if(!checkOwners(msg.sender))                                {Err(60021003);  throw;}
        // it is a bad way now ,
        //checkPass(sha3(msg.data));
        address []memory t_owner=new address[](1);
        t_owner[0]=msg.sender;
        if(getApprove(t_owner)){
            Token t=Token(tokenContract);
            t.issueMore.gas(msg.gas)(_amount);
        }

    }

    function destroyToken(address tokenContract,uint256 _amount)returns (bool success){

        iffreeze();
        if(!checkOwners(msg.sender))                                {Err(60021003);  throw;}
        // it is a bad way now ,
        //checkPass(sha3(msg.data));
        address []memory t_owner=new address[](1);
        t_owner[0]=msg.sender;
        if(getApprove(t_owner)){
            Token t=Token(tokenContract);
            t.destroy.gas(msg.gas)(_amount);
        }

    }

    // check owner weight amount make sure tx can been permit
    function checkOwner(uint _Tx_threshold,address[] _owners,uint[] _weight) internal returns(bool success){
        if (_owners.length!=_weight.length)                 {Err(60021002);  throw;}
        uint t_Tx_threshold=0;
        for(uint i=0;i<_owners.length;i++)
            t_Tx_threshold+=_weight[i];
        if (t_Tx_threshold<_Tx_threshold)
            return false;
        else
            return true;
    }

    function resetAccountOwner(uint _Tx_threshold,address[] _owners,uint[] _weight) returns(bool success){

        ifCore();
        if (!checkOwner(_Tx_threshold,_owners,_weight))     {Err(60021001);  throw;}
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

    function getApprove(address[] _owners)internal returns(bool success){

        uint  t_total=0;
        for(uint i=0;i<_owners.length;i++)
            t_total+=m_data.m_owners[_owners[i]];
        return t_total>=m_data.m_Tx_threshold;

    }

    function checkOwners(address _owner)internal returns(bool success){

        address[] memory _owners=new address[](1);
        _owners[0]=msg.sender;
        return getApprove(_owners);

    }

    function setPass(uint _hash,uint _other) returns (bool success){

        iffreeze();
        ifCoreTx();
        if(msg.sender!=m_data.m_coreTx) throw;
            m_waitPassTx=bytes32(_hash);
            m_other=_other;
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
        if (m_data.m_level<100)                 {Err(60021003);  throw;}
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

    function checkPass(bytes32 _hash)internal {

        if (m_waitPassTx!=_hash)                    {Err(60020002);  throw;}

    }
}