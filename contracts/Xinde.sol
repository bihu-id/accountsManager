
import "Account.sol";
contract XindeInterface {

    // not in use
    LogicPorxy porxy;
    function notUse(LogicPorxy _porxy)internal{porxy=_porxy;}
    // above not in use
    //role type enum
    //以上不使用

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
        forceTransferType

    }

    enum OperationStatus{

        //等待批准
        waitComfirm,

        //已经批准
        comfirm,

        //已经拒绝
        reject

    }

    //account function sig tabel, notice if the account function change name/parameter
    //should update this
    struct AccountFun{

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
    struct Operation{

        address             m_account;

        OperationType       m_type;

        //account logic function sig
        uint                funsig;

        //store call data exclude function sig
        uint[]              m_data;

        OperationStatus     m_status;

    }

    struct ResetMeOperation{

        role                m_role;
        address             m_key;
        OperationStatus     m_status;

    }

    // if xinde.init() have run,make sure this contract can only init one time
    bool inited;

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

    AccountFun m_accountFun;

    mapping(uint=>address) m_keys;
    /*
    // reseter can reset the owner of any account crete by account manager contract
    address reSetAdd;
    address reSetAddC;

    // Ider can set the real name level of account
    address realNameAdd;
    address realNameAddC;

    address CAAdd;
    address CAAddC;

    // remove can remove a Tx(just on contract level rather than block chain level)
    address revokeAdd;
    address revokeAddC;

    address freezeAdd;
    address freezeAddC;

    address unfreezeAdd;
    address unfreezeAddC;

    address forceTransferAdd;
    address forceTransferAddC;

    address coreAdd;
    address coreAddC;*/

    /// @notice init xinde keys and account function sig;初始化合约,只会第一调用时生效
    function init();

    /// @notice reset owner of account;             重置用户账户拥有者
    /// @param _account account contract address;   操作的用户合约账号地址
    /// @param _owners owners of this account;      新的用户账号拥有者
    /// @param _weight weight per owner;            新的用户账户拥有的权重,和_owners一一对应
    /// @param _Threshold the tx threshold;         用户交易生效阀值
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

    /// @notice reset all address by core of this contract; 重置Xinde合约的KEY
    /// @param _keyAddress the new address of roler;        新的地址
    /// @param _role what roller to been reset;             重置哪个KEY A1~A8,A1_confirm~A8_confirm
    function resetMe(address _keyAddress,role _role);

    /// @notice get the role address;                       获得地址
    /// @param _role type;                                  哪个KEY A1~A8,A1_confirm~A8_confirm
    /// @return address of _role key                        _role的地址
    function getRole(role _role)constant returns(address);

    /// @notice comfirm operation;                                      批准一个操作
    /// @param _account account contract address operation carry on;    操作的用户合约账号地址和_no是一个双重验证作用
    /// @param _no operation _no;                                       操作编号
    function comfirm(address _account,uint _no);

    /// @notice reject operation;                                       拒绝一个操作
    /// @param _account account contract address operation carry on;    操作的用户合约账号地址和_no是一个双重验证作用
    /// @param _no  operation no;                                       操作编号
    function reject(address _account,uint _no);

    /// @notice get opertaion amount include total and wait;            获得等待批准的操作总数
    /// @return _totalAmounts total operation amounts include wait,comfirm and reject;
    /// 所有操作总数
    /// @return _waitAmounts wait comfirm operation amount
    /// 等待批准的操作的总数
    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts);

    /// @notice get operation detail;                                   获得操作的详情
    /// @param _no operation no;                                        操作编号
    /// @return detail of operation as array type of structure Operation
    /// 返回操作详情:
    /// res[0]:编号
    /// res[1]:类型
    /// res[2]:新地址
    /// res[3]:状态
    function getOperation(uint _no)constant returns(uint[] );

    /// @notice get waiting operation Nos;                              获得所有的等待批准的操作的标号
    /// @param _start ;                                                 从_start开始
    /// @param _limit ;                                                 总计获得多少个
    /// @param _type ;                                                  1:账户操作,2:合约本身重置KEY操作
    function getWaitOperationNos(uint _start,uint _limit,uint _type)constant returns(uint [])

    /// @notice get summary of this contract;                           获得Xinde合约的KEYS地址
    /// @return 16 addresses of control this contract as address[];     A1~A8,A1~A8_confirm的地址
    function summary()constant returns(address[]);

    event Init(address,address);
    event Reset(address _account,address[] _owners,uint32[] _weight,uint32[] _Threshold);
    event SetIdLevel (address _account,uint level);
    event Freeze(address _account);
    event Unfreeze(address _account);
    event ResetMe(uint _no,address _keyAddress,role _role);
    event ResetMeC(uint _no,address _keyAddress,role _role);
    event ConfirmOperation(uint _no);

    event Scall(bool);

}
contract Xinde is XindeInterface{

    function init(){
        Scall(inited);
        if(inited) throw;
        m_keys[uint(role.coreRole)]=msg.sender;
        m_keys[uint(role.coreRoleC)]=msg.sender;

        m_accountFun.freeze         =0x62a5af3b;
        m_accountFun.revokeCA       =0xe698fc31;
        m_accountFun.reSet          =0xd26cb679;
        m_accountFun.setCA          =0x2cab3b98;
        m_accountFun.setIdLevel     =0x777af46f;
        m_accountFun.setPass        =0xf86cd7ad;
        m_accountFun.unfreeze       =0x6a28f000;

        inited=true;
        //uint[] t_res;

        //t_res[0]=m_accountFun.freeze;
        Init(msg.sender,m_keys[uint(role.coreRole)]);
    }


    function reSet (address _account,address[] _owners,uint32[] _weight,uint32 _Threshold){

        if (msg.sender!=m_keys[uint(role.reSetRole)]) throw;
        if (_owners.length!=_weight.length) throw;
            uint[] memory t_data;
            t_data[0]=_Threshold;
            t_data[1]=_owners.length;
            for(uint i=0;i<_owners.length;i++)
                t_data[i+3]=uint(_owners[i]);
            for(i=0;i<_owners.length;i++)
                t_data[i+3+_owners.length]=_weight[i];

        addOperation(_account,OperationType.reSetType,m_accountFun.reSet,t_data);

    }

    function setIdLevel (address _account,uint _level){

        if (_level>=100)throw;
        if (msg.sender!=m_keys[uint(role.realNameRole)]) throw;
        uint[] memory t_data;
        t_data[0]=_level;

        addOperation(_account,OperationType.setIdLevelType,m_accountFun.setIdLevel,t_data);

    }

    function setCA (address _account,address _CA){

        if (msg.sender!=m_keys[uint(role.CARole)]) throw;
        uint[] memory t_data;
        t_data[0]=uint(_CA);

        addOperation(_account,OperationType.setCAType,m_accountFun.setCA,t_data);

    }

    function revokeCA (address _account){

        if (msg.sender!=m_keys[uint(role.revokeRole)]) throw;
        uint[] memory t_data;
        addOperation(_account,OperationType.revokeCAType,m_accountFun.revokeCA,t_data);

    }

    function freeze(address _account){

        if (msg.sender!=m_keys[uint(role.freezeRole)]) throw;
        uint[] memory t_data;
        addOperation(_account,OperationType.freezeType,m_accountFun.freeze,t_data);
        Freeze(_account);

    }

    function unfreeze(address _account){

        if (msg.sender!=m_keys[uint(role.unfreezeRole)]) throw;
        uint[] memory t_data;
        addOperation(_account,OperationType.unfreezeType,m_accountFun.unfreeze,t_data);
        Unfreeze(_account);

    }

    function resetMe(address _keyAddress,role _role){

        if (msg.sender!=m_keys[uint(role.coreRole)]) throw;
        if(uint(_role)>=uint(role.end)) throw;

        //map  m_operations_resetMe start from 1
        m_operationAmounts_resetMe++;
        m_operations_resetMe[m_operationAmounts_resetMe]=ResetMeOperation(_role,_keyAddress,OperationStatus.waitComfirm);

        //map  m_waitComfirms_resetMe start from 1
        m_waitComfirmAmounts_resetMe++;
        m_waitComfirms_resetMe[m_waitComfirmAmounts_resetMe]=m_operationAmounts_resetMe;
        ResetMe(m_waitComfirms_resetMe[m_waitComfirmAmounts_resetMe],_keyAddress,_role);
    }

    function resetMeC(address _keyAddress,role _role,uint _no){

        if (msg.sender!=m_keys[uint(role.coreRoleC)]) throw;
        if(m_operations_resetMe[_no].m_role!=_role) throw;
        if(m_operations_resetMe[_no].m_key!=_keyAddress) throw;
        if(m_operations_resetMe[_no].m_status!=OperationStatus.waitComfirm)throw;

        m_keys[uint(_role)]=_keyAddress;
        m_operations_resetMe[_no].m_status=OperationStatus.comfirm;
        del2(_no);
        ResetMeC(_no,_keyAddress,_role);

    }

    function ResetMeReject(address _key,uint _no){

        if(msg.sender!=m_keys[uint(role.coreRoleC)]) throw;
        if(m_operations_resetMe[_no].m_key!=_key) throw;
        if(m_operations_resetMe[_no].m_status!=OperationStatus.waitComfirm)throw;
        m_operations_resetMe[_no].m_status=OperationStatus.reject;
        del2(_no);

    }

    function getRole(role _role)constant returns(address){

        return m_keys[uint(_role)];

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

        m_operations[++m_operationAmounts]=Operation(_account,_type,_accountFun,_data,OperationStatus.waitComfirm);
        m_waitComfirms[m_operationAmounts]=m_operationAmounts;

    }

    function comfirm(address _account,uint _no){

        if(msg.sender!=m_keys[uint(m_operations[_no].m_type)]) throw;
        if(m_operations[_no].m_account!=_account) throw;
        if(m_operations[_no].m_status!=OperationStatus.waitComfirm)throw;
        uint r;
        address t_to=m_operations[_no].m_account;
        //use memory from t_startMemory to void cover other using memory
        //and store funsig before t_startMemory
        uint t_startMemory=0x300;
        uint t_dataSize=m_operations[_no].m_data.length*0x20+4;
        uint t_funSig=m_operations[_no].funsig;
        for(uint i=0;i<m_operations[_no].m_data.length;i++)
            uint t_data=m_operations[_no].m_data[i];
            assembly{
                mstore(add(t_startMemory,0x20),t_data)
            }

        assembly{
            mstore(sub(t_startMemory,0x20),t_funSig)
            r:=call(200000,t_to,callvalue,sub(t_startMemory,0x04), t_dataSize, 0x100, 0x20)
        }
        if (r != 1) { throw;}

        del(_no);
        ConfirmOperation(_no);

    }

    function reject(address _account,uint _no){

        if(msg.sender!=m_keys[uint(m_operations[_no].m_type)]) throw;
        if(m_operations[_no].m_account!=_account) throw;
        if(m_operations[_no].m_status!=OperationStatus.waitComfirm)throw;
        m_operations[_no].m_status=OperationStatus.reject;
        del(_no);

    }

    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts){

        return  (m_operationAmounts,m_waitComfirmAmounts);

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

    function getOperation(uint _no)constant returns(uint[]){

        //zero Operation
        //Operation nullOperation;
        Operation t_operation=m_operations[_no];
        if (uint(t_operation.m_account)==0) throw;
        uint[] memory t_res;
        t_res[0]=_no;
        t_res[1]=uint(t_operation.m_account);
        t_res[2]=uint(t_operation.m_type);

        for(uint i;i<t_operation.m_data.length;i++)
            t_res[4+i]=t_operation.m_data[i];
        return t_res;

    }

    function getOperation_resetMe(uint _no)constant returns(uint r_no,role _role,address _key,OperationStatus _status){

        r_no=_no;
        _role=m_operations_resetMe[_no].m_role;
        _key=m_operations_resetMe[_no].m_key;
        _status=m_operations_resetMe[_no].m_status;
        return;

    }

    function summary()constant returns(address[]){

        address[] memory res= new address[](16);

        for(uint i=0;i<16;i++)
            res[i]=m_keys[i];

        return (res);

    }

}