import "Account.sol";
import "SubManager.sol";
contract AccountCreatorInterface {

    /// @notice create account by account create key                        创建账户使用账户创建Key
    /// @param _owner owner of account                                      账户拥有者
    /// @param _weight _weight of _owner                                    账户拥有者权重
    /// @param _threshold tx_threshold and re_threshold of this account     账户交易阀值
    function createAccount(address _owner,uint32 _weight,uint32 _threshold)returns (bool success);

    /// @notice get account address by account _no                          查询账户地址通过账户编号(顺序编号,创建账户时候确定的)
    /// @param _no no of account                                            账户编号
    /// @return _account address of account                                 账户合约地址
    function getAccountAddress(uint _no)constant returns(address _account);

    /// @notice get account _no by account address                          查询账户编号通过账户地址
    /// @param _account address of account                                  账户合约地址
    /// @return _no no of account                                           账户编号,如果返回0,表示没有这个账户
    function getAccountNo(address _account)constant returns(uint _no);

    /// @notice get account amounts                                         查询账户编号通过账户地址
    /// @return _amount accounts amount                                     返回账户总数
    function accountAmount()constant returns(uint _amount);
}
contract AccountCreator is SubManager {

    //address m_TxCore;
    //address m_accountProxy;

    //_no=>account address
    mapping(uint=>address) m_accounts;

    //addcount address=>_no
    mapping(address=>uint) m_addresses;

    uint m_accountAmounts;

    event CreateAccountData(address _accountAddress);
    event AccountRecode(uint _no,address _account);

    function AccountCreator()BaseData(uint(msg.sender)){}

    function init(uint _core,uint _resetKey,uint _resetKeyC, uint _owner,uint _TxCore,uint _accountProxy){

        beforeInit();
        BaseInit();
        m_keys[0]=_core;
        m_keys[1]=_resetKey;
        m_keys[2]=_resetKeyC;
        m_keys[3]=_owner;

        initOption(0,4);// keys amounts
        initOption(1,5);// options amounts
        initOption(2,0);// fun amoutns
        initOption(3,_accountProxy);
        initOption(4,_TxCore);

        m_accountAmounts=0;

        uint[] memory t_res=new uint[](2);
        t_res[0]=uint(_TxCore);
        t_res[1]=uint(_accountProxy);

        afterInit(t_res);

    }


    function createAccount(address _owner,uint32 _weight,uint32 _threshold)returns (bool success) {

        onlyKey(3);
        Data t_accountData=new Data(getOption(3));
        CreateAccountData(t_accountData);
        //call data is made by Account(logic),but send to data (account data)
        Account t_account=Account(t_accountData);
        // check the gas need.
        if(!t_account.init.gas(msg.gas)(_owner,_weight,_threshold,_threshold,address(m_keys[0]),address(getOption(4))))
            {throwErrEvent(60022001);}
        m_accounts[++m_accountAmounts]=t_accountData;
        m_addresses[t_accountData]=m_accountAmounts;
        AccountRecode(m_accountAmounts,m_accounts[m_accountAmounts]);
        return true;

    }

    function getAccountAddress(uint _no)constant returns(address _account){

        return  m_accounts[_no];

    }

    function getAccountNo(address _account)constant returns(uint _no){

        return m_addresses[_account];

    }

    function accountAmount()constant returns(uint _amount){

        return m_accountAmounts;

    }

}