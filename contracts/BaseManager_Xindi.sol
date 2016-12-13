import "BaseManagerInterface.sol";
import "AccountManager.sol";

contract RoleDefine_Xindi{

    //角色类型
    enum role{

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

        //Manager合约会管理一些sub manager合约，
        //setSubManagerRole 设置sub manager合约的keys
        setSubKeyRole,
        setSubKeyRoleC,

        resetOptionRole,
        resetOptionRoleC,
        //XinDe合约控制KEY和批准KEY的Role,分别对应A8,A8_confirm
        coreRole,
        coreRoleC,

        //标示END
        end

    }

    //账户操作类型
    enum OperationType{

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

        setSubKeyType,

        resetOptionType,

        end

    }

}

contract BaseManager_Xindi is BaseManagerInterface,RoleDefine_Xindi{

    function resetMe(address _keyAddress,uint _role){

        if (msg.sender!=m_keys[uint(role.coreRole)])                        {Err(10000000);throw;}
        if(uint(_role)>=uint(role.end))                                     {Err(11000001);throw;}

        //map  m_operations_resetMe start from 1
        m_operationAmounts_resetMe++;
        m_operations_resetMe[m_operationAmounts_resetMe]=ResetMeOperation(uint(_role),_keyAddress,OperationStatus.waitComfirm);

        //map  m_waitComfirms_resetMe start from 1
        m_waitComfirmAmounts_resetMe++;
        m_waitComfirms_resetMe[m_waitComfirmAmounts_resetMe]=m_operationAmounts_resetMe;
        ResetMe(m_waitComfirms_resetMe[m_waitComfirmAmounts_resetMe],_keyAddress,uint(_role));

    }

    function resetMeC(address _keyAddress,uint _role,uint _no){

        if(msg.sender!=m_keys[uint(role.coreRoleC)])                        {Err(10000001);throw;}
        if(m_operations_resetMe[_no].m_role!=uint(_role))                   {Err(11000002);throw;}
        if(m_operations_resetMe[_no].m_key!=_keyAddress)                    {Err(11000003);throw;}
        if(m_operations_resetMe[_no].m_status!=OperationStatus.waitComfirm) {Err(11000004);throw;}
        m_keys[uint(_role)]=m_operations_resetMe[_no].m_key;
        m_operations_resetMe[_no].m_status=OperationStatus.comfirm;
        del2(_no);
        ResetMeC(_no,_keyAddress,uint(_role));

    }

    function resetMeReject(address _key,uint _no){

        if(msg.sender!=m_keys[uint(role.coreRoleC)])                        {Err(10000001);throw;}
        if(m_operations_resetMe[_no].m_key!=_key)                           {Err(11000003);throw;}
        if(m_operations_resetMe[_no].m_status!=OperationStatus.waitComfirm) {Err(11000004);throw;}
        m_operations_resetMe[_no].m_status=OperationStatus.reject;
        del2(_no);
        ResetMeReject(_no,_key,m_operations_resetMe[_no].m_role);

    }

    function getOperationAmounts_resetMe()constant returns(uint _totalAmounts,uint _waitAmounts){

        return  (m_operationAmounts_resetMe,m_waitComfirmAmounts_resetMe);

    }

    function getWaitOperationNos(uint _start,uint _limit,uint _type)constant returns(uint []){

        // get max 100 per request
        uint t_end;
        uint t_max;

        uint t_limit=_limit;
        if(_limit>20)
            t_limit=20;
        if (_type==1)
            t_max=m_waitComfirmAmounts;
        if(_type==2)
            t_max=m_waitComfirmAmounts_resetMe;

        if((_start+t_limit-1)<=t_max)
            t_end=_start+t_limit-1;
        else
            t_end=t_max;

        uint[] memory res=new uint[](t_end-_start+1);

        // notice operation no start from 1 ,becasue  0 is default return when null
        for(uint i=_start;i<=t_end;i++){
            if (_type==1)
                res[i-_start]=m_waitComfirms[i];

            if (_type==2)
                res[i-_start]=m_waitComfirms_resetMe[i];
        }

        return res;

    }

    function getOperation_resetMe(uint _no)constant returns(uint r_no,uint _role,address _key,OperationStatus _status){

        r_no=_no;
        _role=m_operations_resetMe[_no].m_role;
        _key=m_operations_resetMe[_no].m_key;
        _status=m_operations_resetMe[_no].m_status;
        return;

    }

    /*function comfirm(address _account,uint _no){

     if(msg.sender!=m_keys[uint(m_operations[_no].m_type)*2+1]) throw;
        if(m_operations[_no].m_account!=_account) throw;
        if(m_operations[_no].m_status!=OperationStatus.waitComfirm)throw;

        uint[] memory t_data=new uint[](m_operations[_no].m_data.length);
        t_data=m_operations[_no].m_data;
        if(m_operations[_no].m_type==OperationType.reSetType)
            reSetC(_account,t_data);

        del(_no);
        ConfirmOperation(_no);

    }*/

    // it is very good way ,but should wait ..
    /*function comfirm(address _account,uint _no){

        if(msg.sender!=m_keys[uint(m_operations[_no].m_type)]) throw;
        if(m_operations[_no].m_account!=_account) throw;
        if(m_operations[_no].m_status!=OperationStatus.waitComfirm)throw;
        uint r;
        address t_to=m_operations[_no].m_account;
        //use memory from t_startMemory to void cover other using memory
        //and store funsig before t_startMemory ,
        uint t_startMemory=0x120;
        uint t_dataSize=m_operations[_no].m_data.length*0x20+4;
        uint t_funSig=m_operations[_no].funsig;

        uint[] memory t_data=new uint[](m_operations[_no].m_data.length);
        t_data=m_operations[_no].m_data;

        assembly{
            mstore(sub(t_startMemory,0x20),t_funSig)
            r:=call(3000000,t_to,callvalue,sub(t_startMemory,0x04), t_dataSize, 0x100, 0x20)
        }
        if (r != 1) { throw;}

        del(_no);
        ConfirmOperation(_no);

    }*/

    function reject(address _account,uint _no){

        if(msg.sender!=m_keys[uint(m_operations[_no].m_type)])              {Err(10000001);throw;}
        if(m_operations[_no].m_account!=_account)                           {Err(11000006);throw;}
        if(m_operations[_no].m_status!=OperationStatus.waitComfirm)         {Err(11000005);throw;}
        m_operations[_no].m_status=OperationStatus.reject;
        del(_no);

    }

    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts){

        return  (m_operationAmounts,m_waitComfirmAmounts);

    }

    function getOperation(uint _no)constant returns(uint r_no,address _account,uint _type,OperationStatus _status,uint[] _data){

        //zero Operation
        //Operation nullOperation;
        Operation t_operation=m_operations[_no];
        r_no=_no;
        _account=t_operation.m_account;
        _type=uint(t_operation.m_type);
        _status=t_operation.m_status;
        _data=t_operation.m_data;

        return ;

    }

    function del(uint _no)internal{

        bool t_start=false;
        for (uint i=1;i<=m_waitComfirmAmounts;i++){
            if(m_waitComfirms[i]==_no){
                t_start=true;
                i++;
            }
            if(t_start)
                m_waitComfirms[i-1]=m_waitComfirms[i];
        }
        if(t_start)
            m_waitComfirmAmounts--;

    }

    function del2(uint _no)internal{

        bool t_start=false;
        for (uint i=1;i<=m_waitComfirmAmounts_resetMe;i++){
            if(m_waitComfirms_resetMe[i]==_no){
                t_start=true;
                i++;
            }
            if(t_start)
                m_waitComfirms_resetMe[i-1]=m_waitComfirms_resetMe[i];
        }
        if(t_start)
            m_waitComfirmAmounts_resetMe--;

    }

    function addOperation(address _account,OperationType _type,uint _accountFun,uint[] _data)internal{

        m_operations[++m_operationAmounts]=Operation(_account,uint(_type),_accountFun,_data,OperationStatus.waitComfirm);
        m_waitComfirms[++m_waitComfirmAmounts]=m_operationAmounts;

    }
}