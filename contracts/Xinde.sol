
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
        coreRoleC

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

    // if xinde.init() have run,make sure this contract can only init one time
    bool inited;

    // recode all operations
    uint m_operationAmounts;
    mapping(uint=>Operation) m_operations;

    // recode all waiting comfirm operation no.
    uint m_waitComfirmAmounts;
    uint[] m_waitComfirms;

    AccountFun m_accountFun;
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
    address coreAddC;

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

    function test (address _keyAddress,role _role);

    event Init(address,address);
    event Reset(address _account,address[] _owners,uint32[] _weight,uint32[] _Threshold);
    event SetIdLevel (address _account,uint level);
    event Freeze(address _account);
    event Unfreeze(address _account);
    event ResetMe(address _keyAddress,role _role);
    event ConfirmOperation(uint _no);

    event Scall(bool);
}
contract Xinde is XindeInterface{

    function init(){
        Scall(inited);
        if(inited) throw;
        coreAdd=msg.sender;
        coreAddC=msg.sender;

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
        Init(msg.sender,coreAdd);
    }


    function reSet (address _account,address[] _owners,uint32[] _weight,uint32 _Threshold){

        if (msg.sender!=reSetAdd) throw;
        if (_owners.length!=_weight.length) throw;
            uint[] memory t_data;
            t_data[0]=_Threshold;
            t_data[1]=_owners.length;
            for(uint i=0;i<_owners.length;i++)
                t_data[i+3]=uint(_owners[i]);
            for(i=0;i<_owners.length;i++)
                t_data[i+3+_owners.length]=_weight[i];

        addOperation(_account,OperationType.reSetType,0xd26cb679,t_data);

    }

    function setIdLevel (address _account,uint _level){

        if (_level>=100)throw;
        if (msg.sender!=realNameAdd) throw;
        uint[] memory t_data;
        t_data[0]=_level;

        addOperation(_account,OperationType.setIdLevelType,0x777af46f,t_data);

    }

    function setCA (address _account,address _CA){

        if (msg.sender!=CAAdd) throw;
        uint[] memory t_data;
        t_data[0]=uint(_CA);

        addOperation(_account,OperationType.setCAType,0x2cab3b98,t_data);

    }

    function revokeCA (address _account){

        if (msg.sender!=revokeAdd) throw;
        uint[] memory t_data;
        addOperation(_account,OperationType.revokeCAType,0x2cab3b98,t_data);

    }

    function freeze(address _account){

        if (msg.sender!=freezeAdd) throw;
        uint[] memory t_data;
        addOperation(_account,OperationType.freezeType,m_accountFun.freeze,t_data);
        Freeze(_account);

    }

    function unfreeze(address _account){

        if (msg.sender!=unfreezeAdd) throw;
        uint[] memory t_data;
        addOperation(_account,OperationType.unfreezeType,m_accountFun.unfreeze,t_data);
        Unfreeze(_account);

    }

    function resetMe(address _keyAddress,role _role){

        if (msg.sender!=coreAdd) throw;

        if(_role==role.reSetRole)
            reSetAdd=_keyAddress;
        else if(_role==role.reSetRoleC)
            reSetAddC=_keyAddress;

        else if(_role==role.realNameRole)
            realNameAdd=_keyAddress;
        else if(_role==role.realNameRoleC)
            realNameAddC=_keyAddress;

        else if(_role==role.CARole)
            CAAdd=_keyAddress;
        else if(_role==role.CARoleC)
            CAAddC=_keyAddress;

        else if(_role==role.revokeRole)
            revokeAdd=_keyAddress;
        else if(_role==role.revokeRoleC)
            revokeAddC=_keyAddress;

        else if(_role==role.freezeRole)
            freezeAdd=_keyAddress;
        else if(_role==role.freezeRoleC)
            freezeAddC=_keyAddress;

        else if(_role==role.unfreezeRole)
            unfreezeAdd=_keyAddress;
        else if(_role==role.unfreezeRoleC)
            unfreezeAddC=_keyAddress;

        else if(_role==role.forceTransferRole)
            forceTransferAdd=_keyAddress;
        else if(_role==role.forceTransferRoleC)
            forceTransferAddC=_keyAddress;

        else if(_role==role.coreRole)
            coreAdd=_keyAddress;
        else if(_role==role.coreRoleC)
            coreAddC=_keyAddress;

    }

    function getRole(role _role)constant returns(address){

        if(_role==role.reSetRole)
            return reSetAdd;
        else if(_role==role.reSetRoleC)
            return reSetAddC;

        else if(_role==role.realNameRole)
            return realNameAdd;
        else if(_role==role.realNameRoleC)
            return realNameAddC;

        else if(_role==role.CARole)
            return CAAdd;
        else if(_role==role.CARoleC)
            return CAAddC;

        else if(_role==role.revokeRole)
            return revokeAdd;
        else if(_role==role.revokeRoleC)
            return revokeAddC;

        else if(_role==role.freezeRole)
            return freezeAdd;
        else if(_role==role.freezeRoleC)
            return freezeAddC;

        else if(_role==role.unfreezeRole)
            return unfreezeAdd;
        else if(_role==role.unfreezeRoleC)
            return unfreezeAddC;

        else if(_role==role.forceTransferRole)
            return forceTransferAdd;
        else if(_role==role.forceTransferRoleC)
            return forceTransferAddC;

        else if(_role==role.coreRole)
            return coreAdd;
        else if(_role==role.coreRoleC)
            return coreAddC;

    }

    function del(uint _no)internal{

        uint t_start=0;
        for (uint i=0;i<m_waitComfirmAmounts;i++){
            if(m_waitComfirms[i]==_no){
                t_start=1;
                i++;
            }
            if(t_start==1)
                m_waitComfirms[i-1]=m_waitComfirms[i];
        }
        if(t_start==1)
            m_waitComfirmAmounts--;

    }

    function addOperation(address _account,OperationType _type,uint _accountFun,uint[] _data)internal{

        m_operations[++m_operationAmounts]=Operation(_account,_type,_accountFun,_data,OperationStatus.waitComfirm);
        m_waitComfirms[m_waitComfirms.length+1]=m_operationAmounts;

    }
    /*function storeOperation(uint _funsig) internal{

        //exclude function sig of this call
        uint t_dataSize=msg.data.size()-0x40;
        assembly{
            // start memory 0x100,exclude function sig of this call
            calldatacopy(0x100,0x04,t_dataSize)
        }
        for (uint i=0;i<t_dataSize;i++)


    }*/
        /*function reSetC(address _account,uint _no){

        Operation memory t_operation=m_operations[_no];
        if(t_operation.m_account!=_account) throw;

        //use inline semmbly
        address[] memory t_owners;
        uint32[]  memory t_weights;
        for(uint i=0;i<t_operation.m_data[1];i++)
            t_owners[i]=address(t_operation.m_data[3+i]);

        for(i=0;i<t_operation.m_data[1];i++)
            t_weights[i]=uint32(t_operation.m_data[3+i+t_operation.m_data[1]]);

        Account a;
        a=Account(_account);
        a.resetOwner(t_owners,t_weights,uint32(t_operation.m_data[0]));

        del(_no);
        //ResetC(t_owners,t_weights,t_operation.m_data[0]);

    }*/

    function comfirm(address _account,uint _no){

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

        if(m_operations[_no].m_account!=_account) throw;
        if(m_operations[_no].m_status!=OperationStatus.waitComfirm)throw;
        m_operations[_no].m_status=OperationStatus.reject;
        del(_no);

    }

    function getOperationAmounts()constant returns(uint _totalAmounts,uint _waitAmounts){

        return  (m_operationAmounts,m_waitComfirmAmounts);

    }

    function getOperation(uint _no)constant returns(uint[]){

        //zero Operation
        //Operation nullOperation;
        Operation t_operation=m_operations[_no];
        if (uint(t_operation.m_account)==0) throw;
        uint[] memory t_res;
        t_res[0]=uint(t_operation.m_account);
        t_res[1]=uint(t_operation.m_type);

        for(uint i;i<t_operation.m_data.length;i++)
            t_res[3+i]=t_operation.m_data[i];
        return t_res;

    }

    function summary()constant returns(address[]){

        address[] memory res= new address[](16);

        res[0]=reSetAdd;
        res[1]=reSetAddC;

        res[2]=realNameAdd;
        res[3]=realNameAddC;

        res[4]=CAAdd;
        res[5]=CAAddC;

        res[6]=revokeAdd;
        res[7]=revokeAddC;

        res[8]=freezeAdd;
        res[9]=freezeAddC;

        res[10]=unfreezeAdd;
        res[11]=unfreezeAddC;

        res[12]=forceTransferAdd;
        res[13]=forceTransferAddC;

        res[14]=coreAdd;
        res[15]=coreAddC;

        return (res);

    }
    function test(address _keyAddress,role _role){
        realNameAdd=_keyAddress;
    }

}