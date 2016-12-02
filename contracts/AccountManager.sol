
import "Account.sol";

contract AccountManager {

    struct AccountCore {

        address m_core;
        address m_TxCore;
        address m_accountPorxy;

    }

    AccountCore m_accountCore;
    //owner of account
    address m_owner;
    //core address can reset owner
    address m_core;

    mapping(uint=>address) m_accounts;

    uint m_accountAmounts;

    modifier ifCore() {if(msg.sender != m_core)throw; _;}
    modifier ifOwner() {if(msg.sender != m_owner)throw; _;}

    event CreateData(address);
    event AccountRecode(uint,address);
    function resetOwner(address _newOwner)ifCore{

        m_owner=_newOwner;

    }

    function resetCore(address _newCore)ifCore{

        m_core=_newCore;
    }

    function AccountManager(address _core,address _accountCore,address _accountTxCore,address _accountPorxy){

        m_core=_core;
        m_owner=msg.sender;
        m_accountCore=AccountCore(_accountCore,_accountTxCore,_accountPorxy);
        m_accountAmounts=0;
    }

    function createAccount(address _owner,uint32 _weight,uint32 _threshold)ifOwner returns(bool){

        Data t_accountData=new Data(uint(m_accountCore.m_accountPorxy));
        CreateData(t_accountData);

        //call data is made by Account(logic),but send to data (account data)
        Account t_account=Account(t_accountData);
        // check the gas need.
        if(!t_account.init.gas(5000000)(_owner,_weight,_threshold,m_accountCore.m_core,m_accountCore.m_TxCore))
            return false;
        m_accounts[++m_accountAmounts]=t_accountData;
        AccountRecode(m_accountAmounts,m_accounts[m_accountAmounts]);
        return true;

    }

    function getAccountAddress(uint _no)constant returns(address){

        return  m_accounts[_no];

    }

    function accountAmount()constant returns(uint){

        return m_accountAmounts;

    }

    function summary()constant returns(address,address,address,address,address){

        return(m_core,m_owner,m_accountCore.m_core,m_accountCore.m_TxCore,m_accountCore.m_accountPorxy);

    }

}