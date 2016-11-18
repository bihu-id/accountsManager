
import "Account.sol";
contract XindeInterface {

    // not in use
    LogicPorxy porxy;
    function notUse(LogicPorxy _porxy)internal{porxy=_porxy;}
    // above not in use
    //role type enum

    enum role{

        reSetRole,
        reSetRoleC,

        realNameRole,
        realNameRoleC,

        CARole,
        CARoleC,

        revokeRole,
        revokeRoleC,

        freezeRole,
        freezeRoleC,

        unfreezeRole,
        unfreezeRoleC,

        forceTransferRole,
        forceTransferRoleC,

        coreRole,
        coreRoleC,

        end

    }

    enum OperationType{

        reSetType,

        setIdLevelType,

        setCAType,

        revokeCAType,

        freezeType,

        unfreezeType,

        forceTransferType,

        coreType

    }

    enum OperationStatus{

        waitComfirm,
        comfirm,
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

    /// @notice init xinde keys and account function sig
    function init();

    /// @notice reset owner of account
    /// @param _account account contract address
    /// @param _owners owners of this account
    /// @param _weight weight per owner
    /// @param _Threshold the tx threshold
    function reSet (address _account,address[] _owners,uint32[] _weight,uint32 _Threshold);

    /// @notice set account real name level
    /// @param _account account contract address
    /// @param _level real name level
    function setIdLevel (address _account,uint _level);

    /// @notice set account CA address
    /// @param _account account contract address
    /// @param _CA CA address
    function setCA (address _account,address _CA);

    /// @notice revoke account CA lable
    /// @param _account account contract address
    function revokeCA (address _account);

    /// @notice freeze account
    /// @param _account account contract address
    function freeze(address _account);

    /// @notice unfreeze account
    /// @param _account account contract address
    function unfreeze(address _account);

    /// @notice reset all address by core of this contract
    /// @param _keyAddress the new address of roler
    /// @param _role what roller to been reset
    function resetMe(address _keyAddress,role _role);

    /// @notice get the role address
    /// @param _role type
    /// @return address of _role key
    function getRole(role _role)constant returns(address);

    /// @notice comfirm operation
    /// @param _account account contract address operation carry on
    /// @param _no operation _no
    function comfirm(address _account,uint _no);

    /// @notice reject operation
    /// @param _account account contract address operation carry on
    /// @param _no  operation no
    function reject(address _account,uint _no);

    /// @notice get opertaion amount include total and wait
    /// @return _totalAmounts total operation amounts include wait,comfirm and reject
    /// @return _waitAmounts wait comfirm operation amount
    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts);

    /// @notice get operation detail
    /// @param _no operation no
    /// @return detail of operation as array type of structure Operation
    function getOperation(uint _no)constant returns(uint[] );

    /// @notice get summary of this contract
    /// @return 16 addresses of control this contract as address[]
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