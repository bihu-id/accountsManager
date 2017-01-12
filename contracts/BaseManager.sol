import "BaseData.sol";

contract SimpleManagerInterface is BaseLogic {

    enum OperationStatus{

        //等待批准
        waitConfirm,

        //已经批准
        confirm,

        //已经拒绝
        reject

    }

    enum BaseOperationType{

        //set sub manager contract keys if have     重置子管理合约key
        setSubKeyType,

        //use set option key                        设置本合约选项
        setOptionType,

        //use set option key                        设置本合约将调用的函数的Sig
        setFunType
    }

    enum BaseRole{

        //控制KEY和批准KEY的Role,
        coreRole,
        coreRoleC,

        //Manager合约会管理一些sub manager合约，
        //setSubManagerRole 设置sub manager合约的keys
        setSubKeyRole,
        setSubKeyRoleC,

        resetOptionRole,
        resetOptionRoleC

    }

    struct Operation{

        /*
        //notice  though 160+32+32+16+16=256 can merge 5 variable to a storage ,but gas need more
        address             m_account;// or token address
        uint32              m_type; //OperationType
        //account logic function sig
        //uint32            m_funsig;
        uint16              m_status;
        uint16              m_confirmKeyNo;
        */

        uint                m_destinationAddress;       //目标(将操作的)合约地址
        uint                m_type;                     //操作类型 BaseOperationType/OperationType
        uint                m_confirmKeyNo;             //批准这个操作的Key编号(在m_keys中的序号)
        uint                m_status;                   //操作的状态 OperationStatus

        //store call data include function sig          //操作的具体数据,m_data[0]=将调用的函数的Sig
        //0:funsig
        uint[]              m_data;

    }

    struct resetKeyOperation{

        uint                m_role; //role              //重置哪个Key
        address             m_key;                      //新Key
        OperationStatus     m_status;                   //操作的状态 OperationStatus

    }
    /// @notice reset all address by core of this contract; 重置合约的KEY
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _role what roller to been reset;             重置哪个KEY
    function resetKey(uint _role,address _keyAddress)returns (bool success) ;

    /// @notice confirm resetKey operation                  批准一个重置Keys操作
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _role what roller to been reset;             重置哪个KEY
    /// @param _no operation _no;                           重置操作的NO. 和_keyAddress和_role 同时输入起到双重验证作用。
    function resetKeyC(uint _no,uint _role,address _keyAddress)returns (bool success) ;

    /// @notice reject resetKey operation                   拒绝一个重置Keys操作
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _no operation _no;                           重置操作的NO. 和_key同时输入起到双重验证作用。
    function resetKeyReject(uint _no,uint _role,address _keyAddress)returns (bool success) ;

    /// @notice get resetKey operation amounts                                       获得重置Key 总的操作数量,包含拒绝,批准和等待批准
    /// @return _totalAmounts total amounts include rejected Confirmed and waiting  总的数量
    /// @return _waitAmounts  waiting operation amounts                             等待批准的数量
    function getOperationAmounts_resetKey()constant returns(uint _totalAmounts,uint _waitAmounts);

    /// @notice get waiting operation Nos;                              遍历所有的等待批准的操作的标号
    /// @param _start ;                                                 从_start开始
    /// @param _limit ;                                                 总计获得多少个
    /// @param _type ;                                                  1:账户操作,2:合约本身重置KEY操作
    function getWaitOperationNos(uint _start,uint _limit,uint _type)constant returns(uint [] _nos);

    /// @notice get resetKey operation details ;                         获得重置Key操作的详情
    /// @param _no No of resetKey operation                              操作的编号
    /// @return r_no No of resetKey operation for checking               操作的编号 验证用
    /// @return _role which role to reset                               重置的角色
    /// @return _key new key to set                                     重置的新Key
    /// @return _status status of this operation                        操作的状态 0:等待批准,1:已经批准,2:已经拒绝
    function getOperation_resetKey(uint _no)constant returns(uint r_no,uint _role,address _key,OperationStatus _status);

    /// @notice get opertaion amount include total and wait;                            获得等待批准的操作总数
    /// @return _totalAmounts total operation amounts include wait,confirm and reject;  所有操作总数
    /// @return _waitAmounts wait confirm operation amount                              等待批准的操作的总数

    /// @notice 获得本合约的所有Key
    /// @return _keys 所有Key的数组
    function getKeys()constant returns(address[] _keys);

    /// @notice 重置本合约的Key
    /// @param _no 重置操作的编号
    /// @param _keyAddress 重置的新Key
    /// @param _role 重置哪个角色
    event ResetKey(uint _no,address _keyAddress,uint _role);

    /// @notice 批准重置本合约的Key
    /// @param _no 批准操作的编号
    /// @param _keyAddress 重置的新Key
    /// @param _role 重置哪个角色
    event ResetKeyC(uint _no,address _keyAddress,uint _role);

    /// @notice 拒绝重置本合约的Key
    /// @param _no 批准操作的编号
    /// @param _keyAddress 重置的新Key
    /// @param _role 重置哪个角色
    event ResetKeyReject(uint _no,address _keyAddress,uint _role);

}

contract SimpleManager is SimpleManagerInterface{

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


    // recode all resetKeyoperations
    uint m_operationAmounts_resetKey;

    //recode all resetKey operations
    mapping(uint=>resetKeyOperation) m_operations_resetKey;

    // recode all waiting confirm resetKey operation amounts.
    uint m_waitConfirmAmounts_resetKey;

    // all wait Confirms resetKey operations No.
    mapping(uint=>uint) m_waitConfirms_resetKey;

    function resetKey(uint _role,address _keyAddress)returns (bool success) {

        checKey(m_keys[0]);
        //if(uint(_role)>=uint(role.end))                                     {throwErr(11000001);}

        //map  m_operations_resetKey start from 1
        m_operationAmounts_resetKey++;
        m_operations_resetKey[m_operationAmounts_resetKey]=resetKeyOperation(uint(_role),_keyAddress,OperationStatus.waitConfirm);

        //map  m_waitConfirms_resetKey start from 1
        m_waitConfirmAmounts_resetKey++;
        m_waitConfirms_resetKey[m_waitConfirmAmounts_resetKey]=m_operationAmounts_resetKey;
        ResetKey(m_waitConfirms_resetKey[m_waitConfirmAmounts_resetKey],_keyAddress,uint(_role));
        return true;

    }

    function resetKeyC(uint _no,uint _role,address _keyAddress)returns (bool success) {

        checKey(m_keys[1]);
        if(m_operations_resetKey[_no].m_role!=uint(_role))                   {throwErrEvent(11000002);}
        if(m_operations_resetKey[_no].m_key!=_keyAddress)                    {throwErrEvent(11000003);}
        if(m_operations_resetKey[_no].m_status!=OperationStatus.waitConfirm) {throwErrEvent(11000004);}
        m_keys[_role]=uint(m_operations_resetKey[_no].m_key);
        m_operations_resetKey[_no].m_status=OperationStatus.confirm;
        del2(_no);
        ResetKeyC(_no,_keyAddress,uint(_role));
        return true;
    }

    function resetKeyReject(uint _no,uint _role,address _keyAddress)returns (bool success) {

        checKey(m_keys[1]);
        if(m_operations_resetKey[_no].m_key!=_keyAddress)                    {throwErrEvent(11000003);}
        if(m_operations_resetKey[_no].m_status!=OperationStatus.waitConfirm) {throwErrEvent(11000004);}
        m_operations_resetKey[_no].m_status=OperationStatus.reject;
        del2(_no);
        ResetKeyReject(_no,_keyAddress,m_operations_resetKey[_no].m_role);
        return true;

    }

    function getOperationAmounts_resetKey()constant returns(uint _totalAmounts,uint _waitAmounts){

        return  (m_operationAmounts_resetKey,m_waitConfirmAmounts_resetKey);

    }

    function getWaitOperationNos(uint _start,uint _limit,uint _type)constant returns(uint [] _nos){

        // get max 100 per request
        uint t_end;
        uint t_max;

        uint t_limit=_limit;
        if(_limit>20)
            t_limit=20;
        if (_type==1)
            t_max=m_waitConfirmAmounts;
        if(_type==2)
            t_max=m_waitConfirmAmounts_resetKey;

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
                res[i-_start]=m_waitConfirms_resetKey[i];
        }

        return res;

    }

    function getOperation_resetKey(uint _no)constant returns(uint r_no,uint _role,address _key,OperationStatus _status){

        r_no=_no;
        _role=m_operations_resetKey[_no].m_role;
        _key=m_operations_resetKey[_no].m_key;
        _status=m_operations_resetKey[_no].m_status;
        return;

    }

    function del2(uint _no)internal{

        bool t_start=false;
        for (uint i=1;i<=m_waitConfirmAmounts_resetKey;i++){
            if(m_waitConfirms_resetKey[i]==_no){
                t_start=true;
                i++;
            }
            if(t_start)
                m_waitConfirms_resetKey[i-1]=m_waitConfirms_resetKey[i];
        }
        if(t_start)
            m_waitConfirmAmounts_resetKey--;

    }


    function getKeys()constant returns(address[] _keys){

        uint t_size=m_options[0];
        address[] memory res= new address[](t_size);

        for(uint i=0;i<t_size;i++)
            res[i]=address(m_keys[i]);

        return (res);

    }

    function getOptions()constant returns(uint[] _options){

        uint t_size=m_options[1];
        uint[] memory res= new uint[](t_size);

        for(uint i=0;i<t_size;i++)
            res[i]=uint(m_options[i]);

        return (res);

    }

}

contract BaseManagerInterface is SimpleManager {

    /// @notice confirm operation;                                      批准一个操作
    /// @param _destination contract address operation carry on;        操作的用户合约账号地址和_no是一个双重验证作用
    /// @param _no operation _no;                                       操作编号
    function confirm(uint _no,address _destination) returns (bool success) ;

    /// @notice reject operation;                                       拒绝一个操作
    /// @param _destination contract address operation carry on;        操作的用户合约账号地址和_no是一个双重验证作用
    /// @param _no  operation no;                                       操作编号
    function reject(uint _no,address _destination) returns (bool success) ;

    /// @notice get opertaion amount include total and wait;                            获得等待批准的操作总数
    /// @return _totalAmounts total operation amounts include wait,confirm and reject;  所有操作总数
    /// @return _waitAmounts wait confirm operation amount                              等待批准的操作的总数

    /// @notice 设置一个选项
    /// @param _keyNo 选项的编号:派生合约的enum Option{}
    /// @param _value 选项的值
    function setOption(uint _keyNo,uint _value)returns (bool success) ;

    /// @notice 设置一个函数的Sig
    /// @param _no 选项的编号:派生合约的enum Fun{}
    /// @param _sig 函数的Sig
    function setFun(uint _no,uint _sig)returns (bool success) ;

    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts);

    /// @notice get operation detail;                                   获得操作的详情
    /// @param _no operation no;                                        操作编号
    /// @return r_no:编号
    /// @return _account:操作地址
    /// @return _type:类型
    /// @return _confirmKey 批准key 地址
    /// @return _status:状态
    /// @return _data:数据
    function getOperation(uint _no)constant returns(uint r_no,address _account,uint _type,address _confirmKey,OperationStatus _status,uint[] _data);

    /// @notice 批准一个操作
    /// @param _no 批准操作的编号
    event ConfirmOperation(uint _no);

    /// @notice 拒绝一个操作
    /// @param _no 拒绝操作的编号
    event Reject(uint _no);

    /// @notice 设置一个选项
    /// @param _no 选项的编号:派生合约的enum Option{}
    /// @param _value 选项的值
    event SetOption(uint _no,uint _value );

    /// @notice 设置一个函数的Sig
    /// @param _no 选项的编号:派生合约的enum Fun{}
    /// @param _sig 函数的Sig
    event SetFun(uint _no,uint _sig);

}

contract BaseManager is BaseManagerInterface{

    function setOption(uint _keyNo,uint _value)returns (bool success) {

        checKey(m_keys[uint(BaseRole.resetOptionRole)]);
        uint[] memory t_data=new uint[](2);
        t_data[0]=_keyNo;
        t_data[1]=_value;

        addOperation(0x0,uint(BaseOperationType.setOptionType),uint(BaseRole.resetOptionRoleC),t_data);
        setOption(_keyNo,_value);
        return true;

    }

    function setOptionC(uint[] _data)internal{

        checKey(m_keys[3]);
        m_options[_data[0]]=_data[1];

    }

    function setFun(uint _fun,uint _sig)returns (bool success) {

        checKey(m_keys[uint(BaseRole.resetOptionRole)]);
        uint[] memory t_data=new uint[](2);
        t_data[0]=_fun;
        t_data[1]=_sig;
        addOperation(0x0,uint(BaseOperationType.setFunType),uint(BaseRole.resetOptionRoleC),t_data);
        setFun(_fun,_sig);
        return true;

    }

    function setFunC(uint [] _data) internal{

        checKey(m_keys[3]);
        m_funs[_data[0]]=_data[1];

    }

    function getFun(uint _fun)constant returns(bytes32 _sig){

        return(bytes32(m_funs[_fun]));

    }

    function setSubKey(address _subContract,uint _role,address _key)returns (bool success) {}

    function setSubKeyC(address _subContract ,uint[] _data)internal{}

    function getOperation(uint _no)constant returns(uint r_no,address _account,uint _type,address _confirmKey,OperationStatus _status,uint[] _data){

        //zero Operation
        //Operation nullOperation;
        Operation t_operation=m_operations[_no];
        r_no=                   _no;
        _account=               address(t_operation.m_destinationAddress);
        _type=                  uint(t_operation.m_type);
        _confirmKey=            address(m_keys[t_operation.m_confirmKeyNo]);
        _status=                OperationStatus(t_operation.m_status);
        _data=                  t_operation.m_data;

        return ;

    }

    function getOperation_resetKey(uint _no)constant returns(uint r_no,uint _role,address _key,OperationStatus _status){

        r_no=_no;
        _role=m_operations_resetKey[_no].m_role;
        _key=m_operations_resetKey[_no].m_key;
        _status=m_operations_resetKey[_no].m_status;
        return;

    }

    function subConfirm(address _destination,uint _type,uint[] _data)internal returns(bool _called,bool _success){

        return (false,true);

    }

    function confirm(uint _no,address _destination) returns (bool success) {

        checKey(m_keys[m_operations[_no].m_confirmKeyNo]);
        //temp(m_operations[_no].m_destinationAddress,uint(_destination));
        if(m_operations[_no].m_destinationAddress!=uint(_destination))              {throwErrEvent(11000006);}
        if(m_operations[_no].m_status!=uint(OperationStatus.waitConfirm))           {throwErrEvent(11000004);}

        uint ifLocal;
        uint r;
        uint t_len=m_operations[_no].m_data.length;
        uint t_len32=t_len*32;
        uint[] memory t_data=new uint[](t_len);
        uint t_type=m_operations[_no].m_type;
        t_data=m_operations[_no].m_data;

        bool t_called;
        bool t_success;
        bool res=false;

        (t_called,t_success)=subConfirm(_destination,t_type,t_data);

        if(t_called &&t_success)
            return t_success;
        if(m_operations[_no].m_type<=uint(BaseOperationType.setFunType)){

            ifLocal=100;
            if(m_operations[_no].m_type==uint(BaseOperationType.setSubKeyType)){

                setSubKeyC(_destination,t_data);

             }

            if(m_operations[_no].m_type==uint(BaseOperationType.setOptionType)){

                setOptionC(t_data);

            }

            if(m_operations[_no].m_type==uint(BaseOperationType.setFunType)){

                setOptionC(t_data);

            }
        }
        else
        {
            assembly{

                r:=call(gas,_destination,callvalue,add(t_data,0x3c), sub(t_len32,0x1c), 0x60, 0x20)

            }
            if(r!=1)
                {throwErrEvent(12000001); throw;}
        }
        del(_no);

        //comfirm status
        m_operations[_no].m_status=uint(OperationStatus.confirm);
        ConfirmOperation(_no);

        // Bug if run there out of gas ,event ConfirmOperation(_no) should store in our chain
        // but fortunately,this operation is called by ourself ,so we would give enough gas to void this bug ,
        // TODO delete the following return 
        if(ifLocal==100)
            assembly{
                return(0x60,0x20)
            }
        else
        return true;

    }

    function reject(uint _no,address _destination) returns (bool success) {

        if(uint(msg.sender)!=m_keys[uint(m_operations[_no].m_type)])                {throwErrEvent(10000001);}
        if(m_operations[_no].m_destinationAddress!=uint(_destination))              {throwErrEvent(11000006);}
        if(m_operations[_no].m_status!=uint(OperationStatus.waitConfirm))           {throwErrEvent(11000005);}
        m_operations[_no].m_status=uint(OperationStatus.reject);
        del(_no);
        return true;

    }

    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts){

        return  (m_operationAmounts,m_waitConfirmAmounts);

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


    function addOperation(address _destinationAddress,uint _type,uint _confirmKeyNo,uint[] _data)internal{

        m_operations[++m_operationAmounts]=Operation(uint(_destinationAddress),_type,_confirmKeyNo,uint(OperationStatus.waitConfirm),_data);
        m_waitConfirms[++m_waitConfirmAmounts]=m_operationAmounts;


    }


    function getOptions()constant returns(uint[] _options){

        uint t_size=m_options[1];
        uint[] memory res= new uint[](t_size);

        for(uint i=0;i<t_size;i++)
            res[i]=uint(m_options[i]);

        return (res);

    }

}