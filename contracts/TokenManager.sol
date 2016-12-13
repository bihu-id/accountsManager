import "Token.sol";
import "AccountManager.sol";
import "BaseManager.sol";

contract RoleDefine_Token{

    //角色类型
   enum role{

        //控制KEY和批准KEY的Role,分别对应A8,A8_confirm
        coreRole,
        coreRoleC,

        //Manager合约会管理一些sub manager合约，
        //setSubManagerRole 设置sub manager合约的keys
        setSubKeyRole,
        setSubKeyRoleC,

        //冻结账号KEY和批准KEY的Role,分别对应K1,K1_confirm
        freezeRole,
        freezeRoleC,

        //解冻账号KEY和批准KEY的Role,分别对应K2,K2_confirm
        unfreezeRole,
        unfreezeRoleC,

        //强制转移资产KEY和批准KEY的Role,分别对应K3,K3_confirm
        forceTransferRole,
        forceTransferRoleC,

        //标示END
        end

    }

    //账户操作类型
   enum OperationType{

        setOptionType,

        setSubKeyType,

        //冻结账户
        freezeType,

        //解冻账户
        unfreezeType,

        //强制转移
        forceTransferType

   }

}

contract TokenManagerInterface is BaseManager,RoleDefine_Token {

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

    //total amounts of symbols
    uint m_amounts=0;

    //record the gas need of function call
    mapping(uint=>uint) m_gasNeed;

    //the account (contract address) can create token
    mapping(address=>uint) m_tokenAble;

    //record relationship between id and tokens;
    mapping(uint=>TokenSummary) m_tokenSummarys;

    //symbol=>ids// recorede symbol if use
    mapping(bytes32=>uint) m_symbols;

    //record add id=>symbol
    mapping(uint=>bytes32 ) m_ids;

    // Null address
    TokenSummary tokenSummaryNull;

    /// @notice create token ;                                                  创建token
    /// @param _symbol symbol of token;                                         token代号,不可重复
    /// token id 不可重复,0~47位是token的ID代号,48~63位是TOKEN的类型代号,可由用户自由选择
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
        uint  _hash)returns(bool);
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
    /// @notice 设置合约的参数 ;
    /// @param _xindi xindi合约地址,xindi合约能够调用setTokenAble
    /// @param _MinTerm 默认的token 最短有效期,
    /// @param _limit 最大显示多个
    function setOption(address _xindi,address _accountManager,address _tokenPorxy,uint _MinTerm,uint _limit);

    /// @notice 获得TOKEN的地址
    /// @param _id token Id
    /// @return TOKEN的地址
    function getTokenAddress(uint _id)constant returns(address);

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
    function getTokensSymbol(uint _start,uint _limit)constant returns(bytes32[]);

    /// @notice         冻结某个账户持有的资产
    /// @param _token   资产合约的地址
    /// @param _account 哪个账户持有的,如果_account =0x0 :冻结整个资产
    function freeze(address _token,address _account);

    /// @notice         解冻某个账户持有的资产
    /// @param _token   资产合约的地址
    /// @param _account 哪个账户持有的,如果_account =0x0 :解冻整个资产
    function unfreeze(address _token,address _account);

    /// @notice         强制转移_value从_from持有的_tokenId资产到_to
    /// @param _token   资产的合约
    /// @param _from    账户合约地址
    /// @param _to      账户合约地址
    /// @param _value   转移数量,包含精度
    function forceTransfer(address _token,address _from,address _to,uint _value);

    event SetOption(address _xindi,address _accountManager,uint _MinTerm,uint _limit);
    //event SetTokenAble(address _account,uint _tokenAmounts);
    event CreateToken(address _issuer,
                    bytes32 _symbol,
                    uint _id,
                    uint _maxSupply,
                    uint _precision,
                    uint _currentSupply,
                    uint _closingTime,
                    string _description,
                    uint _hash);

    event ResetMe(uint _no,address _keyAddress,role _role);
    event ResetMeC(uint _no,address _keyAddress,role _role);
    event ConfirmOperation(uint _no);
    event Freeze(address _Token,address _account);
    event Unfreeze(address _Token,address _account);
    event ForceTransfer(address _token,address _from,address _to,uint _value);

}

contract TokenManager is TokenManagerInterface{

    function init(address _xindi,address _accountManager,address _tokenPorxy){

        beforeInit();

        m_options[uint(Option.keysAmount)]=10;
        m_options[uint(Option.optionsAmount)]=8;
        m_options[uint(Option.funAmount)]=3;

        m_options[uint(Option.xindi)]=uint(_accountManager);
        m_options[uint(Option.accountManager)]=uint(_xindi);
        m_options[uint(Option.tokenProxy)]=uint(_tokenPorxy);
        m_options[uint(Option.MinTerm)]=24*3600;
        m_options[uint(Option.limit)]=100;

        uint[] memory t_res=new uint[](3);
        t_res[0]=uint(_xindi);
        t_res[1]=uint(_accountManager);
        t_res[2]=uint(_tokenPorxy);

        afterInit(t_res);

    }

    function createToken(
        bytes32 _symbol,
        /*uint _id,*/
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint  _hash)returns(bool){

        // just check the sender if the account manager by accountManager ,other check is done by server
        AccountManager am=AccountManager(m_options[uint(Option.accountManager)]);
        if(am.getAccountNo(msg.sender)!=0)                      {Err(60030001);     throw;}
        //if(tokenAble()==0)                                    {Err(60030001);     throw;}
        // 0: no expired term
        if(_closingTime!=0 && (_closingTime<0||_closingTime<now+m_options[uint(Option.MinTerm)]))
                                                                {Err(60031001);     throw;}
        // id used
        //if(m_tokenSummarys[_id].m_id!=0)                      {Err(60031002);     throw;}
        // symbol is used
        if( m_symbols[_symbol]>0)                               {Err(60031003);     throw;}

        if(_precision>8)                                        {Err(60031004);     throw;}
        // consider use 64 b VM for efficiency reason
        if(_maxSupply*_precision>=uint64(-1))                   {Err(60031005);     throw;}
        if(_currentSupply>_maxSupply)                           {Err(60031006);     throw;}

        uint t_id=m_amounts+1;
        m_amounts=t_id;
        Data d = new Data(m_options[uint(Option.tokenProxy)]);
        if(d==address(0x0))                                     {Err(60032001);     throw;}
        Token t=Token(d);
        if(!t.init(msg.sender,_symbol,t_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash,this))
                                                                {Err(60032002);     throw;}
        m_tokenSummarys[t_id]=TokenSummary(t_id,msg.sender,d);

        m_symbols[_symbol]=t_id;
        m_ids[t_id]=_symbol;

        //m_ids[m_amounts]=_id;
        //m_tokenAble[msg.sender]=m_tokenAble[msg.sender]+1;

        CreateToken(msg.sender,_symbol,t_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash);

        //temp(msg.sender,d);
        return true;
    }

    /*function tokenAble()internal returns(uint32){


        //uint t=m_tokenAble[msg.sender];
        //return uint32((t-t%uint32(-1))/uint32(-1)-t%uint32(-1));
    }


    function setTokenAble(address _account,uint _tokenAmounts){

        if(msg.sender!=m_xindi)                                 {Err(60030002);  throw;}
        // 0~31 : the account have created how many tokens
        //32~63 :how many tokens this account can create
        m_tokenAble[_account]=_tokenAmounts*uint32(-1)+m_tokenAble[_account]%uint32(-1);
        SetTokenAble(_account,_tokenAmounts);

    }

    function getTokenAble(address _account)constant returns(address t_account, uint _amounts){

        return (_account m_tokenAble[_account]);

    }*/

    function setOption(address _xindi,address _accountManager,address _tokenPorxy,uint _MinTerm,uint _limit){

        ifCore();

        m_options[uint(Option.MinTerm)]=_MinTerm;
        m_options[uint(Option.xindi)]=uint(_xindi);
        m_options[uint(Option.limit)]=_limit;
        m_options[uint(Option.accountManager)]=uint(_accountManager);
        m_options[uint(Option.tokenProxy)]=uint(_tokenPorxy);

        SetOption(_xindi,_accountManager,_MinTerm,_limit);

    }

    function getTokenAddress(uint _id)constant returns(address){

        return m_tokenSummarys[_id].m_address;

    }

    function getTokenSummary(uint _id)constant returns(uint r_ids ,address _owner,address _tokenAddress){

        return (m_tokenSummarys[_id].m_id,m_tokenSummarys[_id].m_owner,m_tokenSummarys[_id].m_address);

    }

    function getTokensSymbol(uint _start,uint _limit)constant returns(bytes32[]){

        uint t_limit=_limit;
        uint t_end;
        if(t_limit>m_options[uint(Option.limit)])
            t_limit=m_options[uint(Option.limit)];
        t_end=_start+t_limit-1;

        if(t_end>m_amounts)
            t_end=m_amounts;
        bytes32[] memory res=new bytes32[](t_end-_start+1);

        for(uint i=_start;i<=t_end;i++)
            res[i-_start]=m_ids[i];

        return res;

    }

    function getOption()constant returns (address _xindi,address _accountManager,address _tokenPorxy,uint _MinTerm,uint _tokenAmounts,uint _limit){

        _xindi=             address(m_options[uint(Option.xindi)]);
        _accountManager=    address(m_options[uint(Option.accountManager)]);
        _tokenPorxy=        address(m_options[uint(Option.tokenProxy)]);
        _MinTerm=           m_options[uint(Option.MinTerm)];
        _tokenAmounts=      m_amounts;
        _limit=             m_options[uint(Option.limit)];
        return;

    }

    function getTokenAmounts()constant returns(uint){

        return m_amounts;

    }

    function comfirm(address _account,uint _no){

        checKey(m_keys[uint(m_operations[_no].m_type)*2+1]);
        if(m_operations[_no].m_account!=_account)                           {Err(11000006);throw; }
        if(m_operations[_no].m_status!=OperationStatus.waitComfirm)         {Err(11000004);throw; }

        uint[] memory t_data=new uint[](m_operations[_no].m_data.length);
        t_data=m_operations[_no].m_data;
        if(m_operations[_no].m_type==uint(OperationType.freezeType))
            freezeC(_account,t_data);
        if(m_operations[_no].m_type==uint(OperationType.unfreezeType))
            unfreezeC(_account,t_data);
        if(m_operations[_no].m_type==uint(OperationType.forceTransferType))
            forceTransferC(_account,t_data);
        del(_no);
        ConfirmOperation(_no);

    }

    function freeze(address _token,address _account){

        checKey(m_keys[uint(role.freezeRole)]);
        uint[] memory t_data=new uint[](1);
        t_data[0]=uint(_account);
        addOperation(_token,uint(OperationType.unfreezeType),m_funs[uint(Fun.freeze)],t_data);
        Freeze(_token,_account);

    }

    function freezeC(address _token,uint [] _data)internal{

        Token t_t=Token(_token);

        t_t.freeze.gas(msg.gas)(address(_data[0]));

    }

    function unfreeze(address _token,address _account){

        checKey(m_keys[uint(role.unfreezeRole)]);
        uint[] memory t_data=new uint[](1);
        t_data[0]=uint(_account);
        addOperation(_token,uint(OperationType.unfreezeType),m_funs[uint(Fun.unfreeze)],t_data);
        Unfreeze(_token,_account);

    }

    function unfreezeC(address _token,uint [] _data)internal{

        Token t_t=Token(_token);
        t_t.unfreeze.gas(msg.gas)(address(_data[0]));

    }

    function forceTransfer(address _token,address _from,address _to,uint _value){

        checKey(m_keys[uint(role.forceTransferRole)]);
        uint[] memory t_data=new uint[](3);
        t_data[0]=uint(_from);
        t_data[1]=uint(_to);
        t_data[2]=uint(_value);
        addOperation(_token,uint(OperationType.forceTransferType),m_funs[uint(Fun.forceTransfer)],t_data);

    }

    function forceTransferC(address _token,uint [] _data)internal{

        Token t_t=Token(_token);
        t_t.forceTransfer.gas(msg.gas)(address(_data[0]),address(_data[1]),_data[2]);

    }

}