import "Data.sol";
import "Token.sol";
import "BaseData.sol";

contract AccountInterface is BaseLogic{

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
    }

    AccountData m_data;
    // txHash => bool


    mapping(uint=>bool) m_signsPass;

    // this is a temporary methods , only support one wait pass tx;
    bytes32   m_waitPassTx;

    uint      m_other;
    function resetAccountOwner(uint _Tx_threshold,address[] _owners,uint[] _weight);

    function transferToken(
        address tokenContract,
        address _to,
        uint256 _amount) returns (bool success);

    function issuerMoreToken(address tokenContract,uint256 _amount)returns (bool success);

    function destroyToken(address tokenContract,uint256 _amount)returns (bool success);

    /// @notice set pass a Tx
    /// @param _hash hash of Tx
    /// @return Whether this set was successful or not
    function setPass(uint _hash,uint _other) returns (bool);

    /// @notice set account realname level
    /// @param _level realname level
    /// @return Whether this set was successful or not
    function setIdLevel(uint _level)returns(bool);

    /// @notice freeze an account
    /// @return Whether freeze was successful or not
    function freeze()returns(bool);

    /// @notice return summary of account contract
    /// @return _core
    /// @return _TxCore
    /// @return _status
    /// @return _level real name level
    /// @return _ownerAmount how many owner
    /// @return _tx_threshold Tx threshold of this account
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
        address _CA,
        address[] _owner,
        uint[] _weight);

    /// @notice get the _owner address and it _weight by no
    /// @param _no _owner no
    /// @return _owner owner address
    /// @return _weight weight of this owner
    function getOwner(uint _no)returns(address _owner,uint _weight);

    event ReSetAccountOwner(address[] _owners,uint[] _weight,uint _Tx_threshold);
    event CreateAccount(    address _owner,
                            uint _weight,
                            uint _Tx_threshold,
                            address _core,
                            address _coreTx);

}
contract Account is AccountInterface{

    /*modifier ifCoreL() {if (msg.sender != m_data.m_core) throw;_;}
    modifier iffreeze(){if(m_data.m_status==status.freeze) throw;_;}
    modifier onlyCore() {if (msg.sender != m_data.m_core) throw;_;}*/

    function ifCoreL()internal{if (msg.sender != m_data.m_core)     {Err(10000000);  throw;} }

    function ifCoreTx()internal{if(msg.sender != m_data.m_coreTx)   {Err(60020000);  throw;} }

    function iffreeze()internal{if(m_data.m_status==status.freeze)  {Err(60020001);  throw;} }

    function init(
    address _owner,
    uint _weight,
    uint _Tx_threshold,
    address _core,
    address _coreTx)returns (bool)
    {
        beforeInit();
        if(_weight<_Tx_threshold)                           {Err(60021001);  throw;}
        m_data.m_core=_core;
        m_data.m_coreTx=_coreTx;
        m_data.m_Tx_threshold=_Tx_threshold;
        m_data.m_owners[_owner]=_weight;
        m_data.m_weightAmount=_weight;
        m_data.m_ownerFind.push(_owner);
        CreateAccount(m_data.m_ownerFind[0],m_data.m_owners[_owner],_Tx_threshold,_core,_coreTx);
        return true;
    }

    // check owner weight amount make sure tx can been permit
    function checkOwner(address[] _owners,uint[] _weight,uint _Tx_threshold) internal returns(bool){
        if (_owners.length!=_weight.length)                 {Err(60021002);  throw;}
        uint t_Tx_threshold=0;
        for(uint i=0;i<_owners.length;i++)
            t_Tx_threshold+=_weight[i];
        if (t_Tx_threshold<_Tx_threshold)
            return false;
        else
            return true;
    }

    function resetAccountOwner(uint _Tx_threshold,address[] _owners,uint[] _weight) {

        ifCoreL();
        if (!checkOwner(_owners,_weight,_Tx_threshold))     {Err(60021001);  throw;}
        uint t_totalWeight=0;
        for(uint i=0;i<_owners.length;i++){
            m_data.m_owners[_owners[i]]=_weight[i];
            t_totalWeight+=_weight[i];
        }
        m_data.m_Tx_threshold=_Tx_threshold;
        m_data.m_ownerFind=_owners;
        m_data.m_weightAmount=uint(t_totalWeight);
        ReSetAccountOwner(_owners,_weight,_Tx_threshold);

    }

    function getApprove(address[] _owners)internal returns(bool){

        uint  t_total=0;
        for(uint i=0;i<_owners.length;i++)
            t_total+=m_data.m_owners[_owners[i]];
        return t_total>=m_data.m_Tx_threshold;

    }

    function createToken(
        bytes32 _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint  _hash,
        uint _tokenManager)
        {
            //checkPass(sha3(msg.data));
            Err(0x1111111);
            //uint t_address =m_other;
            assembly{
                mstore(0x160,0x4e0732c8)// tokenManager createToken() sig
                calldatacopy(0x180,0x04,sub(calldatasize,0x04))
                jumpi(0x02,iszero(call(gas,_tokenManager,callvalue,0x17c, add(calldatasize,0x04), 0x80, 0x20)))
            }
            Err(0x999999);
        }

    function transferToken(
        address tokenContract,
        address _to,
        uint256 _amount)returns (bool success)
    {
        iffreeze();
        // it is a bad way now ,
        //checkPass(sha3(msg.data));
        address []memory t_owner=new address[](1);
        t_owner[0]=msg.sender;
        //if(getApprove(t_owner)){
            Token t=Token(tokenContract);
            t.transfer.gas(msg.gas)(_to,_amount);
        //}

    }

    function issuerMoreToken(address tokenContract,uint256 _amount)returns (bool success){

        iffreeze();
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
        // it is a bad way now ,
        //checkPass(sha3(msg.data));
        address []memory t_owner=new address[](1);
        t_owner[0]=msg.sender;
        if(getApprove(t_owner)){
            Token t=Token(tokenContract);
            t.destroy.gas(msg.gas)(_amount);
        }

    }

    function setPass(uint _hash,uint _other) returns (bool){

        iffreeze();
        ifCoreTx();
        if(msg.sender!=m_data.m_coreTx) throw;
            m_waitPassTx=bytes32(_hash);
            m_other=_other;
        return true;

    }

    function setIdLevel(uint _level)  returns(bool){

        ifCoreL();
        m_data.m_level=_level;
        return true;

    }

    function setCA(address _CA)returns(bool){

        ifCoreL();
        if (m_data.m_level<100)
            m_data.m_level+=100;
        m_data.m_CA=_CA;
        return true;

    }

    function revokeCA() returns(bool){

        ifCoreL();
        if (m_data.m_level<100)                 {Err(60021003);  throw;}
        m_data.m_level-=100;
        m_data.m_CA=address(0);
        return true;

    }

    function freeze() returns(bool){

        ifCoreL();
        m_data.m_status=status.freeze;

    }

    function unfreeze() returns(bool){

        ifCoreL();
        m_data.m_status=status.normal;

    }

    function summary()constant returns(
        address _core,
        address _TxCore,
        uint _status,
        uint _level,
        uint _ownerAmount,
        uint _tx_threshold,
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
            _CA=m_data.m_CA;
            _owner=m_data.m_ownerFind;
            uint[] memory t_weight=new uint[](_ownerAmount);
            for(uint i=0;i<_ownerAmount;i++)
                t_weight[i]=uint(m_data.m_owners[m_data.m_ownerFind[i]]);
            _weight=t_weight;
            return;

    }

    function getOwner(uint _no)returns(address _owner,uint _weight){

        address tmp=m_data.m_ownerFind[_no];
        return(tmp, m_data.m_owners[tmp]);

    }

    function checkPass(bytes32 _hash)internal {

        if (m_waitPassTx!=_hash)                    {Err(60020002);  throw;}

    }
}