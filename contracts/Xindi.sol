
import "Account.sol";
import "BaseManager_Xindi.sol";

contract XindiInterface is BaseManager_Xindi{

    //account function sig tabel, notice if the account function change name/parameter
    //should update this
    struct AccountFun{

        uint gasNeed;
        uint freeze;
        uint revokeCA;
        uint reSet;
        uint setCA;
        uint setIdLevel;
        uint setPass;
        uint unfreeze;

    }

    /*account function sig tabel, notice if the account function change name/parameter
    should update this
    784b452a checkOwner(address[],uint32[],uint32)
    62a5af3b freeze()
    ba236dcd getApprove(address[])
    c41a360a getOwner(uint256)
    448ac35d init(address,uint32,uint32,address,address)
    d26cb679 resetOwner(address[],uint32[],uint32)
    e698fc31 revokeCA()
    2cab3b98 setCA(address)
    777af46f setIdLevel(uint32)
    f86cd7ad setPass(uint256)
    b16a867c summary()
    6a28f000 unfreeze()*/

    //recode the operations

    AccountFun m_accountFun;

    bool inited;
    /// @notice init xinde keys and account function sig;初始化合约,只会第一调用时生效
    function init();

    /// @notice reset owner of account;                     重置用户账户拥有者
    /// @param _account account contract address;           操作的用户合约账号地址
    /// @param _owners owners of this account;              新的用户账号拥有者
    /// @param _weight weight per owner;                    新的用户账户拥有的权重,和_owners一一对应
    /// @param _Threshold the tx threshold;                 用户交易生效阀值
    function reSet (address _account,address[] _owners,uint32[] _weight,uint32 _Threshold);

    /// @notice set account real name level;        设置用户实名等级,数值小于100
    /// @param _account account contract address    操作的用户合约账号地址
    /// @param _level real name level               用户实名等级
    function setIdLevel (address _account,uint _level);

    /// @notice set account CA address;             设置用户CA
    /// @param _account account contract address;   操作的用户合约账号地址
    /// @param _CA CA address;                      用户CA地址
    function setCA (address _account,address _CA);

    /// @notice revoke account CA lable;            撤销用户CA
    /// @param _account account contract address;   操作的用户合约账号地址
    function revokeCA (address _account);

    /// @notice freeze account;                     冻结账号
    /// @param _account account contract address;   操作的用户合约账号地址
    function freeze(address _account);

    /// @notice unfreeze account;                   解冻账号
    /// @param _account account contract address;   操作的用户合约账号地址
    function unfreeze(address _account);

    /// @notice get summary of this contract;                           获得Xinde合约的KEYS地址
    /// @return 16 addresses of control this contract as address[];     A1~A8,A1~A8_confirm的地址
    function summary()constant returns(address[]);

    /// @notice get the role address;                       获得地址
    /// @param _role type;                                  哪个KEY A1~A8,A1_confirm~A8_confirm
    /// @return address of _role key                        _role的地址
    function getRole(role _role)constant returns(address);

    event Init(address,address);
    event Reset(address _account,address[] _owners,uint32[] _weight,uint32[] _Threshold);
    event SetIdLevel (address _account,uint level);
    event Freeze(address _account);
    event Unfreeze(address _account);

}
contract Xindi is XindiInterface{

    function init(){
        if(inited) throw;
        m_keys[uint(role.coreRole)]=msg.sender;
        m_keys[uint(role.coreRoleC)]=msg.sender;

        m_accountFun.gasNeed        =3000000;
        m_accountFun.freeze         =0x62a5af3b;
        m_accountFun.revokeCA       =0xe698fc31;
        m_accountFun.reSet          =0x00afc90b;
        m_accountFun.setCA          =0x2cab3b98;
        m_accountFun.setIdLevel     =0x777af46f;
        m_accountFun.setPass        =0xf86cd7ad;
        m_accountFun.unfreeze       =0x6a28f000;

        inited=true;
        //uint[] t_res;

        //t_res[0]=m_accountFun.freeze;
        Init(msg.sender,m_keys[uint(role.coreRole)]);
    }

    function comfirm(address _account,uint _no){

     if(msg.sender!=m_keys[uint(m_operations[_no].m_type)*2+1])             {Err(10000000);throw; }
        if(m_operations[_no].m_account!=_account)                           {Err(11000006);throw; }
        if(m_operations[_no].m_status!=OperationStatus.waitComfirm)         {Err(11000004);throw; }

        uint[] memory t_data=new uint[](m_operations[_no].m_data.length);
        t_data=m_operations[_no].m_data;
        if(m_operations[_no].m_type==uint(OperationType.reSetType))
            reSetC(_account,t_data);

        del(_no);
        ConfirmOperation(_no);

    }

    function reSet (address _account,address[] _owners,uint32[] _weight,uint32 _Threshold){

        //if (msg.sender!=m_keys[uint(role.reSetRole)]) throw;
        //if (_owners.length!=_weight.length) throw;
        // the follow code basely equil using code  btyes m_data=msg.data
            uint[] memory t_data=new uint[](1+2*_owners.length);
            t_data[0]=_Threshold;
            //t_data[1]=_owners.length;
            for(uint i=0;i<_owners.length;i++){
                t_data[i+1]=uint(_owners[i]);
                t_data[i+1+_owners.length]=_weight[i];
            }

        addOperation(_account,OperationType.reSetType,m_accountFun.reSet,t_data);

    }

    function reSetC (address _account,uint[] _data)internal{

        Account t_a=Account(_account);
        uint t_len=(_data.length-1)/2;
        address[] memory _owners=new address[] (t_len);
        uint32[] memory _weight=new uint32[] (t_len);
        for(uint i=0;i<t_len;i++){
            _owners[i]=address(_data[1+i]);
            _weight[i]=uint32(_data[1+i+t_len]);
        }
        t_a.resetOwner.gas(3000000)(uint32(_data[0]),_owners,_weight);

    }

    function setIdLevel (address _account,uint _level){

        if (_level>=100)throw;
        if (msg.sender!=m_keys[uint(role.realNameRole)]) throw;
        uint[] memory t_data=new uint[](1);
        t_data[0]=_level;

        addOperation(_account,OperationType.setIdLevelType,m_accountFun.setIdLevel,t_data);

    }

    function setIdLevelC (address _account,uint[] _data)internal{

        Account t_a=Account(_account);

        t_a.setIdLevel.gas(5000000)(uint32(_data[0]));

    }

    function setCA (address _account,address _CA){

        if (msg.sender!=m_keys[uint(role.CARole)]) throw;
        uint[] memory t_data=new uint[](1);
        t_data[0]=uint(_CA);

        addOperation(_account,OperationType.setCAType,m_accountFun.setCA,t_data);

    }

    function setCAC (address _account,uint[] _data)internal{

        Account t_a=Account(_account);
        t_a.setCA.gas(3000000)(uint32(_data[0]));

    }

    function revokeCA (address _account){

        if (msg.sender!=m_keys[uint(role.revokeRole)]) throw;
        uint[] memory t_data=new uint[](0);
        addOperation(_account,OperationType.revokeCAType,m_accountFun.revokeCA,t_data);

    }

    function revokeCAC (address _account)internal{

        Account t_a=Account(_account);
        t_a.revokeCA.gas(3000000)();

    }

    function freeze(address _account){

        if (msg.sender!=m_keys[uint(role.freezeRole)]) throw;
        uint[] memory t_data=new uint[](0);
        addOperation(_account,OperationType.freezeType,m_accountFun.freeze,t_data);
        Freeze(_account);

    }

    function freezeC(address _account)internal{

        Account t_a=Account(_account);
        t_a.freeze.gas(3000000)();

    }

    function unfreeze(address _account){

        if (msg.sender!=m_keys[uint(role.unfreezeRole)]) throw;
        uint[] memory t_data=new uint[](0);
        addOperation(_account,OperationType.unfreezeType,m_accountFun.unfreeze,t_data);
        Unfreeze(_account);

    }

    function unfreezeC(address _account)internal{

        Account t_a=Account(_account);
        t_a.unfreeze.gas(3000000)();

    }

    function summary()constant returns(address[]){

        address[] memory res= new address[](16);

        for(uint i=0;i<16;i++)
            res[i]=m_keys[i];

        return (res);

    }

    function getRole(role _role)constant returns(address){

        return m_keys[uint(_role)];

    }

}