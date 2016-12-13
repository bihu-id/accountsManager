import "Account.sol";
import "SubManager.sol";

//m_core : xindi
//m_owner : account creator
contract AccountManager is SubManager {

    address m_TxCore;
    address m_accountProxy;

    //_no=>account address
    mapping(uint=>address) m_accounts;

    //addcount address=>_no
    mapping(address=>uint) m_addresses;

    uint m_accountAmounts;

    event CreateAccountData(address);
    event AccountRecode(uint,address);

    function init(address _core,address _owner,address _TxCore,address _accountProxy){

        beforeInit();
        m_core =uint(_core);
        subInit(uint(msg.sender),uint(msg.sender),uint(_owner));

        m_options[m_leg][0]=uint(_accountProxy);
        m_options[m_leg][1]=uint(_TxCore);

        m_accountProxy=_accountProxy;
        m_accountAmounts=0;

        uint[] memory t_res=new uint[](4);
        //t_res[0]=uint(m_core);
        //t_res[1]=uint(m_owner);
        t_res[2]=uint(m_TxCore);
        t_res[3]=uint(m_accountProxy);

        afterInit(t_res);

    }


    function createAccount(address _owner,uint32 _weight,uint32 _threshold) {

        onlyKey(2);
        Data t_accountData=new Data(uint(m_accountProxy));
        CreateAccountData(t_accountData);
        //call data is made by Account(logic),but send to data (account data)
        Account t_account=Account(t_accountData);
        // check the gas need.
        if(!t_account.init.gas(msg.gas)(_owner,_weight,_threshold,address(m_options[m_leg][0]),address(m_options[m_leg][1])))
            {Err(60022001);throw;}
        m_accounts[++m_accountAmounts]=t_accountData;
        m_addresses[t_accountData]=m_accountAmounts;
        AccountRecode(m_accountAmounts,m_accounts[m_accountAmounts]);

    }

    function getAccountAddress(uint _no)constant returns(address){

        return  m_accounts[_no];

    }

    function getAccountNo(address _account)constant returns(uint _no){

        return m_addresses[_account];

    }

    function accountAmount()constant returns(uint){

        return m_accountAmounts;

    }


}