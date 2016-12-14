import "Account.sol";
import "BaseManager.sol";
import "AccountManager.sol";

contract RoleDefine_Xindi{

    //角色类型
    enum role{

        //控制KEY和批准KEY的Role,分别对应A8,A8_confirm
        coreRole,
        coreRoleC,

        //Manager合约会管理一些sub manager合约，
        //setSubManagerRole 设置sub manager合约的keys
        setSubKeyRole,
        setSubKeyRoleC,

        resetOptionRole,
        resetOptionRoleC,
        //重置账户的拥护者的KEY和批准KEY的Role,分别对应A1,A1_confirm
        reSetRole,
        reSetRoleC,

        //实名认证标签KEY和批准KEY的Role,分别对应A2,A2_confirm
        realNameRole,
        realNameRoleC,

        //CA认证标签KEY和批准KEY的Role,分别对应A3,A3_confirm
        CARole,
        CARoleC,

        //撤销CA认证标签KEY和批准KEY的Role,分别对应A4,A4_confirm
        revokeRole,
        revokeRoleC,

        //冻结账号KEY和批准KEY的Role,分别对应A5,A5_confirm
        freezeRole,
        freezeRoleC,

        //解冻账号KEY和批准KEY的Role,分别对应A6,A6_confirm
        unfreezeRole,
        unfreezeRoleC,

        //强制转移资产KEY和批准KEY的Role,分别对应A7,A7_confirm
        forceTransferRole,
        forceTransferRoleC,

        //标示END
        end

    }

    //账户操作类型
    enum OperationType{

        setOptionType,

        setSubKeyType,
        //重置账户拥有者
        reSetType,

        //设置账户实名等级
        setIdLevelType,

        //设置账户CA标签
        setCAType,

        //取消账户CA
        revokeCAType,

        //冻结账户
        freezeType,

        //解冻账户
        unfreezeType,

        //强制转移
        forceTransferType,

        end

    }

}
contract XindiInterface is BaseManager ,RoleDefine_Xindi{

    /// @notice reset owner of account;                     重置用户账户拥有者
    /// @param _account account contract address;           操作的用户合约账号地址
    /// @param _owners owners of this account;              新的用户账号拥有者
    /// @param _weight weight per owner;                    新的用户账户拥有的权重,和_owners一一对应
    /// @param _Threshold the tx threshold;                 用户交易生效阀值
    function reSet (address _account,address[] _owners,uint[] _weight,uint _Threshold);

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

    event Reset(address _account,address[] _owners,uint[] _weight,uint[] _Threshold);
    event SetIdLevel (address _account,uint level);
    event Freeze(address _account);
    event Unfreeze(address _account);

}
contract Xindi is XindiInterface{

    function Xindi() BaseData(uint(msg.sender)){}
    //xindi contract do not use m_core and m_owner
    function init(){

        beforeInit();

        m_options[0]=20;
        m_options[1]=2;
        m_options[2]=7;

        m_keys[uint(role.coreRole)]=uint(msg.sender);
        m_keys[uint(role.coreRoleC)]=uint(msg.sender);

        m_funs[uint(OperationType.freezeType)]=                     0x62a5af3b;
        m_funs[uint(OperationType.revokeCAType)]=                   0xe698fc31;
        m_funs[uint(OperationType.reSetType)]=                      0x00afc90b;
        m_funs[uint(OperationType.setCAType)]=                      0x2cab3b98;
        m_funs[uint(OperationType.setIdLevelType)]=                 0x777af46f;
        m_funs[uint(OperationType.unfreezeType)]=                   0xf86cd7ad;
        m_funs[uint(OperationType.setSubKeyType)]=                  0x1c1c0fbc;

        uint[] memory t_res=new uint[](2) ;

        t_res[0]=uint(m_keys[uint(role.coreRole)]);
        t_res[1]=uint(m_keys[uint(role.coreRoleC)]);

        afterInit(t_res);

    }

    function confirm(uint _no,address _account){

        subConfirm(_no,_account);

        uint[] memory t_data=new uint[](m_operations[_no].m_data.length);
        t_data=m_operations[_no].m_data;

        if(m_operations[_no].m_type==uint(OperationType.setOptionType))
            setOptionC(t_data);

        if(m_operations[_no].m_type==uint(OperationType.setSubKeyType))
            setSubKeyC(_account,t_data);

        if(m_operations[_no].m_type==uint(OperationType.reSetType))
            reSetC(_account,t_data);

        if(m_operations[_no].m_type==uint(OperationType.setIdLevelType))
            setIdLevelC(_account,t_data);

        if(m_operations[_no].m_type==uint(OperationType.setCAType))
            setCAC(_account,t_data);

        if(m_operations[_no].m_type==uint(OperationType.revokeCAType))
            revokeCAC(_account);

        if(m_operations[_no].m_type==uint(OperationType.freezeType))
            freezeC(_account);

        if(m_operations[_no].m_type==uint(OperationType.unfreezeType))
            unfreezeC(_account);

        del(_no);
        ConfirmOperation(_no);

    }

    function reSet (address _account,address[] _owners,uint[] _weight,uint _Threshold){

        checKey(m_keys[uint(role.reSetRole)]);
        if (_owners.length!=_weight.length)                                 {Err(60011001);throw; }
        // the follow code basely equil using code  btyes m_data=msg.data
            uint[] memory t_data=new uint[](1+2*_owners.length);
            t_data[0]=_Threshold;
            //t_data[1]=_owners.length;
            for(uint i=0;i<_owners.length;i++){
                t_data[i+1]=uint(_owners[i]);
                t_data[i+1+_owners.length]=_weight[i];
            }
        addOperation(_account,uint(OperationType.reSetType),uint(m_funs[uint(OperationType.reSetType)]),t_data);

    }

    function reSetC (address _account,uint[] _data)internal{

        Account t_a=Account(_account);
        uint t_len=(_data.length-1)/2;
        address[] memory _owners=new address[] (t_len);
        uint[] memory _weight=new uint[] (t_len);
        for(uint i=0;i<t_len;i++){
            _owners[i]=address(_data[1+i]);
            _weight[i]=uint(_data[1+i+t_len]);
        }
        t_a.resetAccountOwner.gas(msg.gas)(_data[0],_owners,_weight);

    }

    function setIdLevel (address _account,uint _level){

        checKey(m_keys[uint(role.realNameRole)]);
        if (_level>=100)                                                    {Err(60011002);throw; }
        uint[] memory t_data=new uint[](1);
        t_data[0]=_level;

        addOperation(_account,uint(OperationType.setIdLevelType),m_funs[uint(OperationType.setIdLevelType)],t_data);

    }

    function setIdLevelC (address _account,uint[] _data)internal{

        Account t_a=Account(_account);

        t_a.setIdLevel.gas(msg.gas)(uint(_data[0]));

    }

    function setCA (address _account,address _CA){

        checKey(m_keys[uint(role.CARole)]) ;
        uint[] memory t_data=new uint[](1);
        t_data[0]=uint(_CA);

        addOperation(_account,uint(OperationType.setCAType),m_funs[uint(OperationType.setCAType)],t_data);

    }

    function setCAC (address _account,uint[] _data)internal{

        Account t_a=Account(_account);
        t_a.setCA.gas(msg.gas)(address(_data[0]));

    }

    function revokeCA (address _account){

        checKey(m_keys[uint(role.revokeRole)]);
        uint[] memory t_data=new uint[](0);
        addOperation(_account,uint(OperationType.revokeCAType),m_funs[uint(OperationType.revokeCAType)],t_data);

    }

    function revokeCAC (address _account)internal{

        Account t_a=Account(_account);
        t_a.revokeCA.gas(msg.gas)();

    }

    function freeze(address _account){

        checKey(m_keys[uint(role.freezeRole)]);
        uint[] memory t_data=new uint[](0);
        addOperation(_account,uint(OperationType.freezeType),m_funs[uint(OperationType.freezeType)],t_data);
        Freeze(_account);

    }

    function freezeC(address _account)internal{

        Account t_a=Account(_account);
        t_a.freeze.gas(msg.gas)();

    }

    function unfreeze(address _account){

        checKey(m_keys[uint(role.unfreezeRole)]);
        uint[] memory t_data=new uint[](0);
        addOperation(_account,uint(OperationType.unfreezeType),m_funs[uint(OperationType.unfreezeType)],t_data);
        Unfreeze(_account);

    }

    function unfreezeC(address _account)internal{

        Account t_a=Account(_account);
        t_a.unfreeze.gas(msg.gas)();

    }

    function setSubKey(address _subContract,uint _role,address _key){

        checKey(m_keys[uint(role.setSubKeyRole)]);
        uint[] memory t_data=new uint[](2);
        t_data[0]=_role;
        t_data[1]=uint(_key);
        addOperation(_subContract,uint(OperationType.setSubKeyType),uint(m_funs[uint(OperationType.setSubKeyType)]),t_data);

    }

    function setSubKeyC(address _subContract ,uint[] _data)internal{

        AccountManager am=AccountManager(_subContract);
        am.resetKey.gas(msg.gas)(_data[0],_data[1]);

    }

}