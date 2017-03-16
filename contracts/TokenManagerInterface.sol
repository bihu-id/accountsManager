contract TokenManagerInterface {

    struct TokenSummary{

        // id
        uint m_id;
        // owner of token
        address m_owner;
        //token contract address
        address m_address;

    }

    enum Fun{

        freeze,         //0

        unfreeze,       //1

        forceTransfer   //2

    }

    enum Option{

        keysAmount,
        optionsAmount,
        funAmount,
        xindi,
        accountManager,
        tokenProxy,
        MinTerm,
        limit

    }

    /// @notice create token 资产;                                                  创建token 如凭证
    /// @param _symbol symbol of token;                                         token代号,不可重复
    /// @param _maxSupply max supply of token can not been change ;            token的最大供应量,
    /// @param _precision precsion of token ;                                  token的精度,精度*总量<2^64 考虑将来使用64位虚拟机
    /// @param _currentSupply the init supply when token create, value would change when issue more token by token owner;
    /// 当前供应量供,直接初始化到创建者账号。
    /// @param _closingTime token would expire by _closingTime, 0 mean forever token  关闭时间,UTC 时间,以秒计算,0 表示永久资产
    /// @param _description                                                           资产简单描述
    /// @param _hash hash of token contract                                           资产合同HASH
    function createToken(
        bytes32 _symbol,
        /*uint _id,*/
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint  _hash
        )returns (bool success) ;

    //function setDouRelatedToken(address _dou,address _relatedToken);

    /// @notice register a token with existed logic,operation would event token data address
    /// @notice _logicProxyAddress Logic proxy address
    /// @param _symbol symbol of token
    /// @return _success *

    function registerToken(bytes32 _symbol,address _token)returns(bool _success);
/*
    /// @notice 设置可账户可以创建多少个资产 ;
    /// @param _account 账户、
    /// @param _amounts 可以创建资产总个数,
    //function setTokenAble(address _account,uint _amounts);

    /// @notice 获得账户可以创建多少个资产 ;
    /// @param _account 账户
    /// @return t_account 账户
    /// @return _amounts 可以创建资产总个数,
    //function getTokenAble(address _account)constant returns(address t_account, uint _amounts);
*/

    /// @notice 获得TOKEN的地址
    /// @param _id token Id
    /// @return TOKEN的地址
    function getTokenAddress(uint _id)constant returns(address _tokenAddress);

     /// @notice                获得TOKEN的概况
     /// @param _id             token Id
     /// @return r_ids          资产的ID
     /// @return _owner         资产的拥有者
     /// @return _tokenAddress  地址的合约地址
    function getTokenSummary(uint _id)constant returns(uint r_ids ,address _owner,address _tokenAddress);

     /// @notice                遍历所有的资产symbol
     /// @param _start          开始的资产顺序
     /// @param _limit          遍历多少个资产
     /// @return bytes32[]      返回遍历资产的symbol
    function getTokensSymbol(uint _start,uint _limit)constant returns(bytes32[] _symbols);

    /// @notice         冻结某个账户持有的资产
    /// @param _token   资产合约的地址
    /// @param _account 哪个账户持有的,如果_account =0x0 :冻结整个资产
    function freeze(address _token,address _account)returns (bool success) ;

    /// @notice         解冻某个账户持有的资产
    /// @param _token   资产合约的地址
    /// @param _account 哪个账户持有的,如果_account =0x0 :解冻整个资产
    function unfreeze(address _token,address _account)returns (bool success) ;

    /// @notice         强制转移_value从_from持有的_tokenId资产到_to
    /// @param _token   资产的合约
    /// @param _from    账户合约地址
    /// @param _to      账户合约地址
    /// @param _value   转移数量,包含精度
    function forceTransfer(address _token,address _from,address _to,uint _value)returns (bool success) ;

    //event SetTokenAble(address _account,uint _tokenAmounts);

    event CreateTokenData(address _token);
    event CreateToken(address _issuer,
                    bytes32 _symbol,
                    uint _id,
                    uint _maxSupply,
                    uint _precision,
                    uint _currentSupply,
                    uint _closingTime,
                    string _description,
                    uint _hash);
    event Freeze(address _Token,address _account);
    event Unfreeze(address _Token,address _account);
    event ForceTransfer(address _token,address _from,address _to,uint _value);
    event RegisterToken(uint _no,bytes32 _symbol,address _token);
    event ChangeTokenProxy(address _tokenAddress,address _newProxy);
    //event SetDouRelatedToken(address _dou,address _relatedToken);
}