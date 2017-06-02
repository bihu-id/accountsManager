import "./Account.sol";
import "./base/BaseManager.sol";

contract TxManager is SimpleManager {

    //角色类型
    enum Role{

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
        ownerRole,
        //标示END
        end

    }
    //use uint replace address to get high
    uint /*address*/ m_owner;

    function TxManager()BaseData(uint(msg.sender)){}

    function init(uint _core,uint _resetKey,uint _resetKeyC, uint _owner){

        beforeInit();
        m_options[0]=7;
        m_options[1]=2;
        m_options[2]=7;

        m_keys[uint(Role.coreRole)]=uint(msg.sender);
        m_keys[uint(Role.coreRoleC)]=uint(msg.sender);

        uint[] memory t_res=new uint[](1);
        t_res[0]=4;
        afterInit(t_res);

    }

    //TODO tx and Tx no one-to-one correspondence
    function pass(uint _account,uint _hash){

        checKey(m_keys[uint(Role.ownerRole)]);
        Account t_account=Account(address(_account));
        t_account.setPass(_hash);

    }

    function summary()constant returns(uint _owner,uint _core){

        return(m_owner,m_core);

    }
}