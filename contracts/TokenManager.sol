import "./contractBase/Token.sol";
import "./AccountCreator.sol";
import "./contractBase/BaseManager.sol";
import "./contractInterface/TokenManagerInterface.sol";
import "./contractBase/BaseSToken.sol";

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

        resetOptionRole,
        resetOptionRoleC,

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

        setSubKeyType,

        setOptionType,

        //冻结账户
        freezeType,

        //解冻账户
        unfreezeType,

        //强制转移
        forceTransferType

   }

}

contract TokenManager is BaseManager,RoleDefine_Token,TokenManagerInterface{

    //total amounts of symbols also m_amounts++ as the id of new token
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

    function TokenManager()BaseData(uint(msg.sender)){}

    function init(uint _core,uint _coreC,uint _xindi,uint _accountManager,uint _tokenPorxy)returns (bool success){

        beforeInit();

        m_keys[0]=_core;
        m_keys[1]=_coreC;

        m_options[uint(Option.keysAmount)]=12;
        m_options[uint(Option.optionsAmount)]=8;
        m_options[uint(Option.funAmount)]=3;

        m_options[uint(Option.xindi)]=_xindi;
        m_options[uint(Option.accountManager)]=_accountManager;
        m_options[uint(Option.tokenProxy)]=_tokenPorxy;
        m_options[uint(Option.MinTerm)]=24*3600;
        m_options[uint(Option.limit)]=100;

        uint[] memory t_res=new uint[](3);
        t_res[0]=uint(_xindi);
        t_res[1]=uint(_accountManager);
        t_res[2]=uint(_tokenPorxy);

        afterInit(t_res);
        return true;
    }

    function isXindiManageAccount ()internal{
        // just check the sender if the account manager by accountManager ,other check is done by server
        AccountCreator am=AccountCreator(m_options[uint(Option.accountManager)]);
        if(am.getAccountNo(msg.sender)==0)                      {throwErrEvent(60030001);     }
    }

    function createToken(
        bytes32 _symbol,
        /*uint _id,*/
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint  _hash)returns (bool success) {

        //check token symbol length ,length must >=3
        if((uint(_symbol)*0x10000)==0)                          {throwErrEvent(60030010);     }

        isXindiManageAccount();

        //if(tokenAble()==0)                                    {throwErrEvent(60030001);     }
        // 0: no expired term
        if(_closingTime!=0 && (_closingTime<0||_closingTime<now+m_options[uint(Option.MinTerm)]))
                                                                {throwErrEvent(60031001);     }
        // id used
        //if(m_tokenSummarys[_id].m_id!=0)                      {throwErrEvent(60031002);     }
        // symbol is used
        if( m_symbols[_symbol]>0)                               {throwErrEvent(60031003);     }

        if(_precision>8)                                        {throwErrEvent(60031004);     }
        // consider use 64 b VM for efficiency reason
        if(_maxSupply>=uint64(-1))                              {throwErrEvent(60031005);     }
        if(_currentSupply>_maxSupply)                           {throwErrEvent(60031006);     }

        uint t_id=m_amounts+1;
        m_amounts=t_id;
        Data d = new Data(m_options[uint(Option.tokenProxy)]);
        if(d==address(0x0))                                     {throwErrEvent(60032001);     }
        CreateTokenData(d);
        Token t=Token(d);
        if(!t.init(msg.sender,_symbol,t_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash,this))
                                                                {throwErrEvent(60032002);     }
        m_tokenSummarys[t_id]=TokenSummary(t_id,msg.sender,d);

        m_symbols[_symbol]=t_id;
        m_ids[t_id]=_symbol;

        //m_ids[m_amounts]=_id;
        //m_tokenAble[msg.sender]=m_tokenAble[msg.sender]+1;

        CreateToken(msg.sender,_symbol,t_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash);

        //temp(msg.sender,d);
        return true;
    }

    function registerToken(bytes32 _symbol,address _token)returns(bool _success){
        // todo temp commit
        //isXindiManageAccount();
        //check token symbol length ,length must >=3
        if((uint(_symbol)*0x10000)==0)                          {throwErrEvent(60030010);     }
        // symbol is used
        if( m_symbols[_symbol]>0)                               {throwErrEvent(60031003);     }

        m_amounts++;

        BaseSToken bst=BaseSToken(_token);
        bst.setId(m_amounts);
        m_tokenSummarys[m_amounts]=TokenSummary(m_amounts,msg.sender,_token);

        m_symbols[_symbol]=m_amounts;
        m_ids[m_amounts]=_symbol;
        RegisterToken(m_amounts,_symbol,_token);
        return true;
    }
    /*
    function tokenAble()internal returns(uint32){


        //uint t=m_tokenAble[msg.sender];
        //return uint32((t-t%uint32(-1))/uint32(-1)-t%uint32(-1));
    }


    function setTokenAble(address _account,uint _tokenAmounts){

        if(msg.sender!=m_xindi)                                 {throwErrEvent(60030002);  }
        // 0~31 : the account have created how many tokens
        //32~63 :how many tokens this account can create
        m_tokenAble[_account]=_tokenAmounts*uint32(-1)+m_tokenAble[_account]%uint32(-1);
        SetTokenAble(_account,_tokenAmounts);

    }

    function getTokenAble(address _account)constant returns(address t_account, uint _amounts){

        return (_account m_tokenAble[_account]);

    }
    */

    function getTokenAddress(uint _id)constant returns(address _tokenAddress){

        return m_tokenSummarys[_id].m_address;

    }

    function getTokenId(bytes32 _symbol)constant returns(uint _id){
        return m_symbols[_symbol];
    }
    function getTokenSummary(uint _id)constant returns(uint r_ids ,address _owner,address _tokenAddress){

        return (m_tokenSummarys[_id].m_id,m_tokenSummarys[_id].m_owner,m_tokenSummarys[_id].m_address);

    }

    function getTokensSymbol(uint _start,uint _limit)constant returns(bytes32[] _symbols){

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

    function summary()constant returns (address _xindi,address _accountManager,address _tokenPorxy,uint _MinTerm,uint _tokenAmounts,uint _limit){

        _xindi=             address(m_options[uint(Option.xindi)]);
        _accountManager=    address(m_options[uint(Option.accountManager)]);
        _tokenPorxy=        address(m_options[uint(Option.tokenProxy)]);
        _MinTerm=           m_options[uint(Option.MinTerm)];
        _tokenAmounts=      m_amounts;
        _limit=             m_options[uint(Option.limit)];
        return;

    }

    function getTokenAmounts()constant returns(uint _amount){

        return m_amounts;

    }

    function freeze(address _token,address _account)returns (bool success) {

        checKey(m_keys[uint(role.freezeRole)]);
        uint[] memory t_data=new uint[](2);

        t_data[0]=0x8d1fdf2f;

        //t_data[0]=m_funs[uint(Fun.freeze)];
        t_data[1]=uint(_account);
        addOperation(_token,uint(OperationType.unfreezeType),uint(role.freezeRoleC),t_data);
        Freeze(_token,_account);
        return true;

    }

    function unfreeze(address _token,address _account)returns (bool success) {

        checKey(m_keys[uint(role.unfreezeRole)]);
        uint[] memory t_data=new uint[](2);

        t_data[0]=0x45c8b1a6;
        //t_data[0]=m_funs[uint(Fun.unfreeze)];
        t_data[1]=uint(_account);
        addOperation(_token,uint(OperationType.unfreezeType),uint(role.unfreezeRoleC),t_data);
        Unfreeze(_token,_account);
        return true;

    }

    function forceTransfer(address _token,address _from,address _to,uint _value)returns (bool success) {

        checKey(m_keys[uint(role.forceTransferRole)]);
        uint[] memory t_data=new uint[](4);

        t_data[0]=0x33bebb77;
        //t_data[0]=m_funs[uint(Fun.forceTransfer)];
        t_data[1]=uint(_from);
        t_data[2]=uint(_to);
        t_data[3]=uint(_value);
        addOperation(_token,uint(OperationType.forceTransferType),uint(role.forceTransferRoleC),t_data);
        forceTransfer(_token,_from,_to,_value);
        return true;

    }

    //seperate logic
    function changeTokenProxy(address _tokenAddress,address _newProxy){
        checKey(m_keys[uint(role.setSubKeyRole)]);
        Token t=Token(_tokenAddress);
        t.changeLogicProxy(uint(_newProxy));
        ChangeTokenProxy(_tokenAddress,_newProxy);
    }

    function setDouRelatedToken(address _dou,address _relatedToken){
        checKey(m_keys[uint(role.setSubKeyRole)]);
        BaseSToken t=BaseSToken(_dou);
        t.setRelatedToken(_relatedToken);
        SetDouRelatedToken(_dou,_relatedToken);
    }

}