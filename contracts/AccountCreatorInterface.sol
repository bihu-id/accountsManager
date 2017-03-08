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