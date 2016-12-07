import "Account.sol";
import "Err.sol";
import "BaseData.sol";

contract AccountManager is BaseLogic {

    struct AccountCore {

        address m_core;
        address m_TxCore;
        address m_accountPorxy;

    }

    AccountCore m_accountCore;

    mapping(uint=>address) m_accounts;

    //gas need to create account (account.init())
    uint m_createGas;

    uint m_accountAmounts;

    /*
    modifier ifCore() {if(msg.sender != m_core)throw; _;}
    modifier ifOwner() {if(msg.sender != m_owner)throw; _;}
    */

    event CreateAccountData(address);
    event AccountRecode(uint,address);

    function init(address _owner,address _accountCore,address _accountTxCore,address _accountPorxy){

        beforeInit();

        m_owner=uint(_owner);
        m_accountCore=AccountCore(_accountCore,_accountTxCore,_accountPorxy);
        m_accountAmounts=0;

        uint[] memory t_res=new uint[](6);
        t_res[0]=uint(m_core);
        t_res[1]=uint(m_owner);
        t_res[2]=uint(_accountCore);
        t_res[3]=uint(_accountTxCore);
        t_res[4]=uint(_accountPorxy);
        afterInit(t_res);

    }

    function setOption(address _accountCore,address _accountTxCore,address _accountPorxy){

        ifOwner();
        m_accountCore=AccountCore(_accountCore,_accountTxCore,_accountPorxy);
        Success(true);

    }

    function createAccount(address _owner,uint32 _weight,uint32 _threshold) {

        ifOwner();
        Data t_accountData=new Data(uint(m_accountCore.m_accountPorxy));
        CreateAccountData(t_accountData);
        //call data is made by Account(logic),but send to data (account data)
        Account t_account=Account(t_accountData);
        // check the gas need.
        if(!t_account.init.gas(msg.gas)(_owner,_weight,_threshold,m_accountCore.m_core,m_accountCore.m_TxCore))
            {Err(60022001);throw;}
        m_accounts[++m_accountAmounts]=t_accountData;
        AccountRecode(m_accountAmounts,m_accounts[m_accountAmounts]);

    }

    function getAccountAddress(uint _no)constant returns(address){

        return  m_accounts[_no];

    }

    function accountAmount()constant returns(uint){

        return m_accountAmounts;

    }

    function summary()constant returns(address _core,address _owner,address _accountCore,address _TxCore,address _accountPorxy){

        return(address(m_core),address(m_owner),m_accountCore.m_core,m_accountCore.m_TxCore,m_accountCore.m_accountPorxy);

    }

}