contract AccountInterface {

    //function call other contract                              调用其他合约的函数

    /// @notice 通过账户调用其他合约执行操作,账户检查owner权限。数据封装格式,  data(call())+data(function)
    /// @param _contractAddress 合约地址。
    function approvalCall(address _contractAddress /*uint32 _sig, bytes _data*/);
    //function callOrigin(address _contractAddress,/*uint32 _sig, bytes _data*/);

    /// @notice create token ,contract check the account was created by AccountCreator ,but not check the account have access to create token
    /// 创建资产,合约检查创建者是不是由AccountCreator管理的账户,但是并检查是否有权力创建资产
    /// @param _symbol symbol of token ,Max size 32 bytes32 ,ASCII of symbol,contract do not check the length .. 资产的代号,不可重复,最大32字节,是字母的ASCII,合约只检查是否重复,但不检查长度,大小写,和其他规则
    /// @param _maxSupply max supply of the token               资产最大供应量,如果当前供应量=资产最大供应量,那么资产不能增发
    /// @param _precision precision of token                    资产的精度
    /// @param _currentSupply ..                                当前供应量
    /// @param _closingTime ..                                  资产结束时间,UTC 以秒位单位的实数
    /// @param _description ..                                  资产描述
    /// @param _hash hash of token contract                     资产合同的HASH
    /// @param _tokenManager tokenManager contract address      资产管理合约的地址
    function createToken(
        bytes32 _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint _closingTime,
        string _description,
        uint  _hash,
        uint _tokenManager);

    /*function registerToken(
        bytes32 _symbol,
        address _logicAddress)
    */
    /// @notice transfer token by account owner key sign
    /// @param _tokenContract token contract address            资产合约地址
    /// @param _to token send to                                资产接收账户
    /// @param _amount send amount (amount*precision)           发送的数量(数量*精度)
    function transferToken(
        address _tokenContract,
        address _to,
        uint256 _amount) returns (bool success);

    /// @notice transfer token by account owner key sign,and give receipt to app contract
    /// @param _tokenContract token contract address            资产合约地址
    /// @param _to token send to                                资产接收账户
    /// @param _amount send amount (amount*precision)           发送的数量(数量*精度)
    function transferTokenReceipt(
        address _tokenContract,
        address _to,
        uint256 _amount) returns (bool success);

    /// @notice change owner,
    /// @param _contract contract address                       合约地址
    /// @param _to token send to                                合约接收账户
    function changeOwner(
        address _contract,
        address _to) returns (bool success);

    /// @notice issue more token by token owner account         增发资产,由资产拥有者账户调用
    /// @param _tokenContract token contract address            资产合约地址
    /// @param _amount issue amount (amount*precision)          增发的数量(数量*精度)
    function issueMoreToken(address _tokenContract,uint256 _amount)returns (bool success);

    /// @notice destroyToken token by token owner account       销毁资产,由资产拥有者账户调用,需要持有相应数量的资产
    /// @param _tokenContract token contract address            资产合约地址
    /// @param _amount destroy amount (amount*precision)        销毁的数量(数量*精度)
    function destroyToken(address _tokenContract,uint256 _amount)returns (bool success);

    /// constant return function     常调用函数

    /// @notice get the _owner address and it _weight by no     通过owner编号获得获得账户的owner
    /// @param _no _owner no                                    owner的编号
    /// @return _owner owner address                            owner的地址
    /// @return _weight weight of this owner                    owner的权重
    function getOwner(uint _no)constant returns(address _owner,uint _weight);

    /// @notice return summary of account contract
    /// @return _core
    /// @return _TxCore
    /// @return _status
    /// @return _level real name level
    /// @return _ownerAmount how many owner
    /// @return _tx_threshold Tx threshold of this account
    /// @return _Re_threshold reset owner by user threshold of this account
    /// @return _owners
    /// @return _weight
    /// @return _CA
    function summary()constant returns(
        address _core,
        address _TxCore,
        uint _status,
        uint _level,
        uint _ownerAmount,
        uint _tx_threshold,
        uint _Re_threshold,
        address _CA,
        address[] _owner,
        uint[] _weight);

    //event                                                     事件

    /// @notice reset account owner                             重置用户owner
    /// @param _Tx_threshold ..                                 交易开启权重
    /// @param _owners ..                                       账户拥有者
    /// @param _weight ..                                       拥有者权重
    event ReSetAccountOwner(uint _Tx_threshold,address[] _owners,uint[] _weight);
    event CreateAccount(    address _owner,
                            uint _weight,
                            uint _Tx_threshold,
                            address _core,
                            address _coreTx);

    //called by other contract                                  被其他合约调用的函数

    /// @notice set pass a Tx
    /// @param _hash hash of Tx
    /// @return Whether this set was successful or not
    function setPass(uint _hash) returns (bool success);

    /// @notice set account realname level
    /// @param _level realname level
    /// @return Whether this set was successful or not
    function setIdLevel(uint _level)returns(bool success);

    /// @notice freeze an account
    /// @return Whether freeze was successful or not
    function freeze()returns(bool success);
    //only can been called by Core (xindi)
    function resetAccountOwner(uint _Tx_threshold,address[] _owners,uint[] _weight) returns(bool success);

}