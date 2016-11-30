import "Token.sol";
contract TokenManagerInterface {

    struct TokenSurmmary{

        // id
        uint m_id;
        // owner of token
        address m_owner;
        //token contract address
        address m_address;

    }

    // core of token contracts, core of token contracts can force transfer balance
    address m_coreToken;

    // core of this contract
    address m_core;

    // xindi contract xindi contract can set tokenAble;
    address m_xindi;

    // Min term of token before expire
    uint m_MinTerm=3600;

    // max return max limit when call getTokenIds()
    uint m_limit=1000;

    //the account (contract address) can create token
    mapping(address=>uint) m_tokenAble;

    //record relationship between id and tokens;
    mapping(uint=>TokenSurmmary) m_tokenSurmmarys;
    //symbol=>if used
    mapping(string=>bool) m_symols;

    // Null address
    TokenSurmmary tokenSurmmaryNull;

    //total amounts of symbols
    uint m_amounts=0;

    //record add symbols No.=>id
    mapping(uint=>uint ) m_ids;

    function createToken(
        string _symbol,
        uint _type,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint  _hash);
    function setTokenAble(address _account,uint _addtional);
    function getTokenAble(address _account)constant returns(address t_account, bool _have);
    function setOption(address _xindi,address _coreToken,uint _MinTerm,uint _limit);
    function getTokenAddress(uint _id)constant returns(address);
    function getTokenSurmmary(uint _id)constant returns(uint r_ids ,address _owner,address _tokenAddress);
    function getTokenIds(uint _start,uint _limit)constant returns(uint[]);
    function summary()constant returns (address _xindi,address _core,address _coreToken,uint _MinTerm,uint _tokenAmounts,uint _limit);
    event Err(uint _no);
    //0:权限错误
    //1:输入格式错误
    //2:调用其他合约返回失败
    //3:余额不足
    //4:
    //10000000:  合约修改权限不足
    //60031001:  创建资产有效期错误
    //60031002:  创建资产ID错误
    //60031003:  创建资产代号错误
    //60031004:  创建资产精度错误
    //60031005:  创建资产总量错误
    //60031006:  创建资产当前总量错误

    //60032001:  创建资产失败,地址是空
    //60030001:  地址无创建资产权限
    //60030002:  无权限修改"可创建资产账户表"
    event SetOption(address _xindi,address _coreToken,uint _MinTerm,uint _limit);
    event SetTokenAble(_account,_tokenAmounts);
    event CreateToken(address _issuer,
                    string _symbol,
                    uint _id,
                    uint _maxSupply,
                    uint _precision,
                    uint _currentSupply,
                    uint _closingTime,
                    string _description,
                    uint _hash);

}

contract TokenManager is TokenManagerInterface{

    //modifier ifCore() {if(msg.sender != m_core) {Err(10000000);throw; _;}}
    function IfCore()internal {if(msg.sender != m_core) {Err(10000000);throw; }}
    function TokenManager(address _xindi){m_core=msg.sender; m_xindi=_xindi;}
    function createToken(
        string _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint  _hash){

        // cannot create token
        if(m_tokenAble[msg.sender]%uint32(-1)==0)           {Err(60030001);  throw;}
        // 0: no expired term
        if(_closingTime!=0 && (_closingTime<0||_closingTime<now+m_MinTerm))
                                                            {Err(60031001);  throw;}
        // id used
        if(m_tokenSurmmarys[_id].m_id!=0)                   {Err(60031002);  throw;}
        // symbol is used
        if( m_symols[_symbol])                              {Err(60031003);  throw;}

        if(_precision>8)                                    {Err(60031004);  throw;}
        // consider use 64 b VM for efficiency reason
        if(_maxSupply*_precision>=uint64(-1))               {Err(60031005);  throw;}
        if(_currentSupply>_maxSupply)                       {Err(60031006);  throw;}

        Token t = new Token(msg.sender,_symbol,_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash,m_coreToken);
        if(t==address(0x0))                                 {Err(60032001);  throw;}
        m_tokenSurmmarys[_id]=TokenSurmmary(_id,msg.sender,t);
        m_symols[_symbol]=true;
        m_ids[++m_amounts]=_id;
        m_tokenAble[_account]=m_tokenAble[_account]+1;
        //CreateToken(msg.sender,_symbol,_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash);

    }

    function setTokenAble(address _account,uint _tokenAmounts){

        if(msg.sender!=m_xindi)                             {Err(60030002);  throw;}
        // 0~31 : the account have created how many tokens
        //32~63 :how many tokens this account can create
        m_tokenAble[_account]=_tokenAmounts*uint32(-1)+m_tokenAble[_account]%uint32(-1);
        SetTokenAble(_account,_tokenAmounts);

    }
    function getTokenAble(address _account)constant returns(address t_account, bool _have){

        return (_account m_tokenAble[_account]);

    }
    function setOption(address _xindi,address _coreToken,uint _MinTerm,uint _limit){

        IfCore();

        m_MinTerm=_MinTerm;
        m_coreToken=_coreToken;
        m_xindi=_xindi;
        m_limit=_limit;

        SetOption(_xindi,_coreToken,_MinTerm,_limit);

    }

    function getTokenAddress(uint _id)constant returns(address){

        return m_tokenSurmmarys[_id].m_address;

    }
    function getTokenSurmmary(uint _id)constant returns(uint r_ids ,address _owner,address _tokenAddress){

        return (m_tokenSurmmarys[_id].m_id,m_tokenSurmmarys[_id].m_owner,m_tokenSurmmarys[_id].m_address);

    }

    function getTokenIds(uint _start,uint _limit)constant returns(uint[]){

        uint t_limit=_limit;
        uint t_end;
        if(t_limit>m_limit)
            t_limit=m_limit;
        t_end=_start+t_limit-1;

        if(t_end>m_amounts)
            t_end=m_amounts;
        uint[] memory res=new uint[](t_end-_start+1);

        for(uint i=_start;i<=t_end;i++)
            res[i-_start]=m_ids[i];

        return res;

    }
    function summary()constant returns (address _xindi,address _core,address _coreToken,uint _MinTerm,uint _tokenAmounts,uint _limit){

        _xindi=m_xindi;
        _core=m_core;
        _coreToken=m_coreToken;
        _MinTerm=m_MinTerm;
        _tokenAmounts=m_amounts;
        _limit=m_limit;
        return;

    }
}