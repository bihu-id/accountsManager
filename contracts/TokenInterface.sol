contract TokenInterface {

     enum Status{

        normal,
        freeze

     }

     struct Option{

        // operaton of this token must called by coreContract
        address m_coreContract;
        // not use now
        address m_core;
        //symbol of taken;
        bytes32 m_symbol;

        //id of token, the low 48 is id ,and 48-64 is type;
        uint m_id;
        //the creator/owner of token
        address m_issuer;
        // max supply of token ,u256
        uint m_maxSupply;
        //
        uint m_precision;

        uint m_currentSupply;

        //register date
        uint m_registerTime;

        // end time of this token
        uint  m_closingTime;

        string m_description;

        //hash of contract
        uint m_hash;

        Status m_status;

        // sign of token code contract
        uint sign_r;

        uint sign_s;

        uint sign_v;
        //notice cannot add only variable above!!!

    }

    Option m_option;

    mapping (address => uint256) m_balances;
    mapping (address => mapping (address => uint256)) m_allowed;

    mapping (address=>uint) m_freezeLists;

    /// @notice 增发更多的资产,由资产的issuer 调用
    /// @param _amounts 增发数量
    function issueMore(uint _amounts)returns (bool success);

    /// @notice 销毁由issuer 持有的资产 只能由issuer调用
    /// @param _amounts 销毁数量
    function destroy(uint _amounts)returns (bool success);

    /// @notice Override send `_amount` tokens to `_to` from `_from`
    /// @param _from The address of the sender
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    function forceTransfer(address _from,address _to,uint _amount)returns (bool success);

    function transferOrigin(address _to,uint _amount)returns (bool success);

    /// @notice 冻结账户 _account 只有 tokenManager 能调用
    /// @param _account ..
    function freeze(address _account)returns (bool success);

    /// @notice 解冻账户 _account 只有 tokenManager 能调用
    /// @param _account ..
    function unfreeze(address _account)returns (bool success);

    /// @notice 冻结整个资产 只有 tokenManager 能调用
    function freezeToken()returns (bool success);

    /// @notice 解冻整个资产 只有 tokenManager 能调用
    function unfreezeToken()returns (bool success);

    /// @return the summary of this token
    function summary()constant returns(
        uint _id,                           //编号
        address _issuer,                    //拥有者
        bytes32 _symbol,                    //字符代码
        uint _maxSupply,                    //最大供应量
        uint _precision,                    //精度
        uint _currentSupply,                //当前供应量
        string _description,                //描述
        uint _registerTime,                 //注册时间
        uint _closingTime,                  //过期时间
        address _coreContract,              //资产合约地址
        uint _hash,                         //资产合同HASH
        Status _status                      //资产状态 0:正常,1:冻结
    );

    /// @notice 获得账户 _account 的状态
    /// @param _account ..
    /// @return _status 账户状态 0:正常,1:冻结
    function accountStatus(address _account)constant returns (Status _status);

    event TokenCreate(
        address _issuer,
        bytes32 _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint _hash,
        address _coreContract);

    event ForceTransfer(uint _id,address _from, address _to, uint _amount);

    event IssueMore(address _issuer,uint _id,uint _amounts);

    event Destroy(address _issuer,uint _id,uint _amounts);
}