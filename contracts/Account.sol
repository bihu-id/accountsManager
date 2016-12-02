
import "Data.sol";

contract AccountInterface is BaseLogic{

    enum status{
        normal,
        freeze
    }

    struct AccountData{

        //交易阀值
        uint32 m_Tx_threshold;

        //重置拥有者最低阀值
        uint32 m_Re_threshold;

        //全部权重总数
        uint32 m_weightAmount;

        // core can do many operation like refund
        address m_core;

        //Tx manager contract address
        address m_coreTx;

        //authority address
        address m_authority;

        //owner address=>weight;
        mapping(address=>uint32) m_owners;

        //ca address
        address m_CA;

        // to iterator owners
        address[] m_ownerFind;

        // id level
        // 0:       default
        // 1:       e-mail and phone
        // 2:       railname
        // 100+:    have CA
        uint32 m_level;

        status m_status;
    }

    AccountData m_data;
    // txHash => bool

    mapping(uint=>bool) m_signsPass;


    function resetOwner(uint32 _Tx_threshold,address[] _owners,uint32[] _weight);

    function getApprove(address[] _owners)returns(bool);

    /*function transfer(
        address tokenContract,
        address _to,
        uint256 _amount) returns (bool success);*/

    /// @notice set pass a Tx
    /// @param _hash hash of Tx
    /// @return Whether this set was successful or not
    function setPass(uint _hash)returns (bool);

    /// @notice set account realname level
    /// @param _level realname level
    /// @return Whether this set was successful or not
    function setIdLevel(uint32 _level)returns(bool);

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

}
contract Account is AccountInterface{

    modifier ifCore() {if (msg.sender != m_data.m_core) throw;_;}
    modifier iffreeze(){if(m_data.m_status==status.freeze) throw;_;}

    event CreateAccount(    address _owner,
                            uint32 _weight,
                            uint32 _Tx_threshold,
                            address _core,
                            address _coreTx);
    function init(
    address _owner,
    uint32 _weight,
    uint32 _Tx_threshold,
    address _core,
    address _coreTx)returns (bool){
        if(_weight<_Tx_threshold) throw;
        m_data.m_core=_core;
        m_data.m_coreTx=_coreTx;
        m_data.m_Tx_threshold=_Tx_threshold;
        m_data.m_owners[_owner]=_weight;
        m_data.m_weightAmount=_weight;
        m_data.m_ownerFind.push(_owner);
        CreateAccount(m_data.m_ownerFind[0],m_data.m_owners[_owner],_Tx_threshold,_core,_coreTx);
        return true;
    }

    event ReSetOwner(address[] _owners,uint32[] _weight,uint32 _Tx_threshold);

    modifier onlyCore() {if (msg.sender != m_data.m_core) throw;_;}

    // check owner weight amount make sure tx can been permit
    function checkOwner(address[] _owners,uint32[] _weight,uint32 _Tx_threshold) constant returns(bool){
        if (_owners.length!=_weight.length) throw;
        uint32 t_Tx_threshold=0;
        for(uint i=0;i<_owners.length;i++)
            t_Tx_threshold+=_weight[i];
        if (t_Tx_threshold<_Tx_threshold)
            return false;
        else
            return true;
    }

    function resetOwner(uint32 _Tx_threshold,address[] _owners,uint32[] _weight) onlyCore{
        if (!checkOwner(_owners,_weight,_Tx_threshold)) throw;
        uint t_totalWeight=0;
        for(uint32 i=0;i<_owners.length;i++){
            m_data.m_owners[_owners[i]]=_weight[i];
            t_totalWeight+=_weight[i];
        }
        m_data.m_ownerFind=_owners;
        m_data.m_weightAmount=uint32(t_totalWeight);
        ReSetOwner(_owners,_weight,_Tx_threshold);
    }

    function getApprove(address[] _owners)returns(bool){
        uint32  t_total=0;
        for(uint i=0;i<_owners.length;i++)
            t_total+=m_data.m_owners[_owners[i]];
        return t_total>=m_data.m_Tx_threshold;
    }

/*    function transfer(
        address tokenContract,
        address _to,
        uint256 _amount) iffreeze returns (bool success){
        if(getApprove(msg.sender)){
            Token t=Token(tokenContract);
            t.transfer(address(this),_to,_amount);
        }
    }*/

    function setPass(uint _hash)iffreeze returns (bool){
        if(msg.sender!=m_data.m_coreTx) throw;
            m_signsPass[_hash]=true;
        return true;
    }

    function setIdLevel(uint32 _level) ifCore returns(bool){
        m_data.m_level=_level;
        return true;
    }

    function setCA(address _CA)ifCore returns(bool){
        if (m_data.m_level<100)
            m_data.m_level+=100;
        m_data.m_CA=_CA;
        return true;
    }

    function revokeCA()ifCore returns(bool){
        if (m_data.m_level<100) throw;
        m_data.m_level-=100;
        m_data.m_CA=address(0);
        return true;
    }

    function freeze()ifCore returns(bool){
        m_data.m_status=status.freeze;
    }

    function unfreeze()ifCore returns(bool){
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
        uint[] _weight){
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
}