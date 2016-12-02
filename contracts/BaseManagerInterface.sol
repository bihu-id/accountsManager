import "BaseData.sol";

contract BaseManagerInterface is BaseLogic {

    enum OperationStatus{

        //等待批准
        waitComfirm,

        //已经批准
        comfirm,

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

    // recode all operations
    uint m_operationAmounts;
    mapping(uint=>Operation) m_operations;

    // recode all waiting comfirm operation amounts.
    uint m_waitComfirmAmounts;
    // all wait comfirms operations
    mapping(uint=>uint) m_waitComfirms;


    // recode all resetMeoperations
    uint m_operationAmounts_resetMe;

    //recode all resetMe operations
    mapping(uint=>ResetMeOperation) m_operations_resetMe;

    // recode all waiting comfirm resetMe operation amounts.
    uint m_waitComfirmAmounts_resetMe;

    // all wait comfirms resetMe operations No.
    mapping(uint=>uint) m_waitComfirms_resetMe;

    mapping(uint=>address) m_keys;
    //please do not add any
        /// @notice init xinde keys and account function sig;初始化合约,只会第一调用时生效
    function init();


    /// @notice reset all address by core of this contract; 重置Xinde合约的KEY
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _role what roller to been reset;             重置哪个KEY A1~A8,A1_confirm~A8_confirm
    function resetMe(address _keyAddress,uint _role);

    /// @notice comfirm resetMe operation                   批准一个重置Keys操作
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _role what roller to been reset;             重置哪个KEY A1~A8,A1_confirm~A8_confirm
    /// @param _no operation _no;                           重置操作的NO. 和_keyAddress和_role 同时输入起到双重验证作用。
    function resetMeC(address _keyAddress,uint _role,uint _no);

    /// @notice reject resetMe operation                    拒绝一个重置Keys操作
    /// @param _key the new address of roler;               新的地址
    /// @param _no operation _no;                           重置操作的NO. 和_key同时输入起到双重验证作用。
    function ResetMeReject(address _key,uint _no);

    /// @notice get resetMe operation amounts                                       获得重置Key 总的操作数量,包含拒绝,批准和等待批准
    /// @return _totalAmounts total amounts include rejected comfirmed and waiting  总的数量
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


    /// @notice comfirm operation;                                      批准一个操作
    /// @param _account account contract address operation carry on;    操作的用户合约账号地址和_no是一个双重验证作用
    /// @param _no operation _no;                                       操作编号
    function comfirm(address _account,uint _no);

    /// @notice reject operation;                                       拒绝一个操作
    /// @param _account account contract address operation carry on;    操作的用户合约账号地址和_no是一个双重验证作用
    /// @param _no  operation no;                                       操作编号
    function reject(address _account,uint _no);

    /// @notice get opertaion amount include total and wait;                            获得等待批准的操作总数
    /// @return _totalAmounts total operation amounts include wait,comfirm and reject;  所有操作总数
    /// @return _waitAmounts wait comfirm operation amount                              等待批准的操作的总数
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

    event ResetMe(uint _no,address _keyAddress,uint _role);
    event ResetMeC(uint _no,address _keyAddress,uint _role);
    event ConfirmOperation(uint _no);

}