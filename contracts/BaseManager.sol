import "BaseData.sol";

contract BaseManagerInterface is BaseLogic {

    enum OperationStatus{

        //等待批准
        waitConfirm,

        //已经批准
        confirm,

        //已经拒绝
        reject

    }

    struct Operation{

        address             m_account;// or token address

        uint                m_type; //OperationType

        //account logic function sig
        uint                funsig;

        //store call data exclude function sig
        uint[]              m_data;

        OperationStatus     m_status;

    }

    struct ResetMeOperation{

        uint                m_role;//role
        address             m_key;
        OperationStatus     m_status;

    }

    //0:core
    //1:coreC
    //2:resetOption
    //3:resetOptionC
    //4:setSubKey
    //5:setSubKeyC
    mapping(uint=>uint) m_keys;

    //key=>value
    //0:keys amount
    mapping(uint=>uint) m_options;

    //no=>funsig
    mapping(uint=>uint) m_funs;

    // recode all operations
    uint m_operationAmounts;
    mapping(uint=>Operation) m_operations;

    // recode all waiting confirm operation amounts.
    uint m_waitConfirmAmounts;
    // all wait Confirms operations
    mapping(uint=>uint) m_waitConfirms;


    // recode all resetMeoperations
    uint m_operationAmounts_resetMe;

    //recode all resetMe operations
    mapping(uint=>ResetMeOperation) m_operations_resetMe;

    // recode all waiting confirm resetMe operation amounts.
    uint m_waitConfirmAmounts_resetMe;

    // all wait Confirms resetMe operations No.
    mapping(uint=>uint) m_waitConfirms_resetMe;

    /// @notice reset all address by core of this contract; 重置合约的KEY
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _role what roller to been reset;             重置哪个KEY
    function resetMe(uint _role,address _keyAddress);

    /// @notice confirm resetMe operation                   批准一个重置Keys操作
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _role what roller to been reset;             重置哪个KEY
    /// @param _no operation _no;                           重置操作的NO. 和_keyAddress和_role 同时输入起到双重验证作用。
    function resetMeC(uint _no,uint _role,address _keyAddress);

    /// @notice reject resetMe operation                    拒绝一个重置Keys操作
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _no operation _no;                           重置操作的NO. 和_key同时输入起到双重验证作用。
    function resetMeReject(uint _no,uint _role,address _keyAddress);

    /// @notice get resetMe operation amounts                                       获得重置Key 总的操作数量,包含拒绝,批准和等待批准
    /// @return _totalAmounts total amounts include rejected Confirmed and waiting  总的数量
    /// @return _waitAmounts  waiting operation amounts                             等待批准的数量
    function getOperationAmounts_resetMe()constant returns(uint _totalAmounts,uint _waitAmounts);

    /// @notice get waiting operation Nos;                              遍历所有的等待批准的操作的标号
    /// @param _start ;                                                 从_start开始
    /// @param _limit ;                                                 总计获得多少个
    /// @param _type ;                                                  1:账户操作,2:合约本身重置KEY操作
    function getWaitOperationNos(uint _start,uint _limit,uint _type)constant returns(uint []);

    /// @notice get resetMe operation details ;                         获得重置Key操作的详情
    /// @param _no No of resetMe operation                              操作的编号
    /// @return r_no No of resetMe operation for checking               操作的编号 验证用
    /// @return _role which role to reset                               重置的角色
    /// @return _key new key to set                                     重置的新Key
    /// @return _status status of this operation                        操作的状态 0:等待批准,1:已经批准,2:已经拒绝
    function getOperation_resetMe(uint _no)constant returns(uint r_no,uint _role,address _key,OperationStatus _status);


    /// @notice confirm operation;                                      批准一个操作
    /// @param _account account contract address operation carry on;    操作的用户合约账号地址和_no是一个双重验证作用
    /// @param _no operation _no;                                       操作编号
    function confirm(uint _no,address _account);

    /// @notice reject operation;                                       拒绝一个操作
    /// @param _account account contract address operation carry on;    操作的用户合约账号地址和_no是一个双重验证作用
    /// @param _no  operation no;                                       操作编号
    function reject(address _account,uint _no);

    /// @notice get opertaion amount include total and wait;                            获得等待批准的操作总数
    /// @return _totalAmounts total operation amounts include wait,confirm and reject;  所有操作总数
    /// @return _waitAmounts wait confirm operation amount                              等待批准的操作的总数
    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts);

    /// @notice get operation detail;                                   获得操作的详情
    /// @param _no operation no;                                        操作编号
    /// @return detail of operation as array type of structure Operation
    /// 返回操作详情:
    /// r_no:编号
    /// _account:操作地址
    /// _type:类型
    /// _status:状态
    /// _data:数据
    function getOperation(uint _no)constant returns(uint r_no,address _account,uint _type,OperationStatus _status,uint[] _data);

    function getKeys()constant returns(address[] _keys);

    function getOptions()constant returns(address[] _options);

    event ResetMe(uint _no,address _keyAddress,uint _role);
    event ResetMeC(uint _no,address _keyAddress,uint _role);
    event ResetMeReject(uint _no,address _keyAddress,uint _role);
    event ConfirmOperation(uint _no);
    event Reject(uint _no);

}

contract BaseManager is BaseManagerInterface{

    function resetMe(uint _role,address _keyAddress){

        checKey(m_keys[0]);
        //if(uint(_role)>=uint(role.end))                                     {Err(11000001);throw;}

        //map  m_operations_resetMe start from 1
        m_operationAmounts_resetMe++;
        m_operations_resetMe[m_operationAmounts_resetMe]=ResetMeOperation(uint(_role),_keyAddress,OperationStatus.waitConfirm);

        //map  m_waitConfirms_resetMe start from 1
        m_waitConfirmAmounts_resetMe++;
        m_waitConfirms_resetMe[m_waitConfirmAmounts_resetMe]=m_operationAmounts_resetMe;
        ResetMe(m_waitConfirms_resetMe[m_waitConfirmAmounts_resetMe],_keyAddress,uint(_role));

    }

    function resetMeC(uint _no,uint _role,address _keyAddress){

        checKey(m_keys[1]);
        if(m_operations_resetMe[_no].m_role!=uint(_role))                   {Err(11000002);throw;}
        if(m_operations_resetMe[_no].m_key!=_keyAddress)                    {Err(11000003);throw;}
        if(m_operations_resetMe[_no].m_status!=OperationStatus.waitConfirm) {Err(11000004);throw;}
        m_keys[_role]=uint(m_operations_resetMe[_no].m_key);
        m_operations_resetMe[_no].m_status=OperationStatus.confirm;
        del2(_no);
        ResetMeC(_no,_keyAddress,uint(_role));

    }

    function resetMeReject(uint _no,uint _role,address _keyAddress){

        checKey(m_keys[1]);
        if(m_operations_resetMe[_no].m_key!=_keyAddress)                    {Err(11000003);throw;}
        if(m_operations_resetMe[_no].m_status!=OperationStatus.waitConfirm) {Err(11000004);throw;}
        m_operations_resetMe[_no].m_status=OperationStatus.reject;
        del2(_no);
        ResetMeReject(_no,_keyAddress,m_operations_resetMe[_no].m_role);

    }

    function getOperationAmounts_resetMe()constant returns(uint _totalAmounts,uint _waitAmounts){

        return  (m_operationAmounts_resetMe,m_waitConfirmAmounts_resetMe);

    }

    function setOption(uint _keyNo,uint _value){

        checKey(m_keys[2]);
        uint[] memory t_data=new uint[](2);
        t_data[0]=_keyNo;
        t_data[1]=_value;

        addOperation(0,0,0,t_data);

    }

    function setOptionC(uint[] _data)internal{

        checKey(m_keys[3]);
        m_options[_data[0]]=_data[1];

    }

    function setFun(uint _fun,uint _sig){

        checKey(m_keys[2]);
        uint[] memory t_data=new uint[](2);
        t_data[0]=_fun;
        t_data[1]=_sig;
        addOperation(0,0,0,t_data);

    }

    function setFunC(uint [] _data) internal{

        checKey(m_keys[3]);
        m_funs[_data[0]]=_data[1];

    }

    function getFun(uint _fun)constant returns(bytes32 _sig){

        return(bytes32(m_funs[_fun]));

    }

    function getWaitOperationNos(uint _start,uint _limit,uint _type)constant returns(uint []){

        // get max 100 per request
        uint t_end;
        uint t_max;

        uint t_limit=_limit;
        if(_limit>20)
            t_limit=20;
        if (_type==1)
            t_max=m_waitConfirmAmounts;
        if(_type==2)
            t_max=m_waitConfirmAmounts_resetMe;

        if((_start+t_limit-1)<=t_max)
            t_end=_start+t_limit-1;
        else
            t_end=t_max;

        uint[] memory res=new uint[](t_end-_start+1);

        // notice operation no start from 1 ,becasue  0 is default return when null
        for(uint i=_start;i<=t_end;i++){
            if (_type==1)
                res[i-_start]=m_waitConfirms[i];

            if (_type==2)
                res[i-_start]=m_waitConfirms_resetMe[i];
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

    /*function confirm(address _account,uint _no){

     if(msg.sender!=m_keys[uint(m_operations[_no].m_type)*2+1]) throw;
        if(m_operations[_no].m_account!=_account) throw;
        if(m_operations[_no].m_status!=OperationStatus.waitConfirm)throw;

        uint[] memory t_data=new uint[](m_operations[_no].m_data.length);
        t_data=m_operations[_no].m_data;
        if(m_operations[_no].m_type==OperationType.reSetType)
            reSetC(_account,t_data);

        del(_no);
        ConfirmOperation(_no);

    }*/

    // it is very good way ,but should wait ..
    /*function confirm(address _account,uint _no){

        if(msg.sender!=m_keys[uint(m_operations[_no].m_type)]) throw;
        if(m_operations[_no].m_account!=_account) throw;
        if(m_operations[_no].m_status!=OperationStatus.waitConfirm)throw;
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

        if(uint(msg.sender)!=m_keys[uint(m_operations[_no].m_type)])              {Err(10000001);throw;}
        if(m_operations[_no].m_account!=_account)                           {Err(11000006);throw;}
        if(m_operations[_no].m_status!=OperationStatus.waitConfirm)         {Err(11000005);throw;}
        m_operations[_no].m_status=OperationStatus.reject;
        del(_no);

    }

    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts){

        return  (m_operationAmounts,m_waitConfirmAmounts);

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
        for (uint i=1;i<=m_waitConfirmAmounts;i++){
            if(m_waitConfirms[i]==_no){
                t_start=true;
                i++;
            }
            if(t_start)
                m_waitConfirms[i-1]=m_waitConfirms[i];
        }
        if(t_start)
            m_waitConfirmAmounts--;

    }

    function del2(uint _no)internal{

        bool t_start=false;
        for (uint i=1;i<=m_waitConfirmAmounts_resetMe;i++){
            if(m_waitConfirms_resetMe[i]==_no){
                t_start=true;
                i++;
            }
            if(t_start)
                m_waitConfirms_resetMe[i-1]=m_waitConfirms_resetMe[i];
        }
        if(t_start)
            m_waitConfirmAmounts_resetMe--;

    }

    function subConfirm(uint _no,address _account)internal{

        checKey(m_keys[uint(m_operations[_no].m_type)*2+3]);
        if(m_operations[_no].m_account!=_account)                           {Err(11000006);throw; }
        if(m_operations[_no].m_status!=OperationStatus.waitConfirm)         {Err(11000004);throw; }

    }

    function addOperation(address _account,uint _type,uint _accountFun,uint[] _data)internal{

        m_operations[++m_operationAmounts]=Operation(_account,uint(_type),_accountFun,_data,OperationStatus.waitConfirm);
        m_waitConfirms[++m_waitConfirmAmounts]=m_operationAmounts;

    }

    function getKeys()constant returns(address[] _keys){

        uint t_size=m_options[0];
        address[] memory res= new address[](t_size);

        for(uint i=0;i<t_size;i++)
            res[i]=address(m_keys[i]);

        return (res);

    }

    function getOptions()constant returns(address[] _options){

        uint t_size=m_options[1];
        address[] memory res= new address[](t_size);

        for(uint i=0;i<t_size;i++)
            res[i]=address(m_options[i]);

        return (res);

    }

}