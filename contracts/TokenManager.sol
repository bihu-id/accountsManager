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

    // Min term of token before expire
    uint m_MinTerm=3600;

    // core of token contracts, core of token contracts can force transfer balance
    address m_coreContract;

    // core of this contract
    address m_core;

    // max return max limit when call getTokenIds()
    uint m_limit=1000;

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
        address _issuer,
        string _symbol,
        uint _type,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint  _hash);
    function setOption(uint _MinTerm,address _coreContract);
    function getTokenAddress(uint _id)constant returns(address);
    function getTokenSurmmary(string _id)constant returns(uint r_ids ,address _owner,address _tokenAddress);

}

contract TokenManager is TokenManagerInterface{

    modifier ifCore() {if(msg.sender != m_core)throw; _;}
    function TokenManager(){m_core=msg.sender;}
    function createToken(
        address _issuer,
        string _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint  _hash)ifCore{

        //if(tokenSurmmarys[_symbol]!=tokenSurmmaryNull) throw;
        if(_closingTime<0||_closingTime<now+m_MinTerm) throw;
        // id used
        if(m_tokenSurmmarys[_id].m_id!=0) throw;
        // symbol is used
        if( m_symols[_symbol]) throw;
        // consider use 64 b VM for efficiency reason
        if(_maxSupply*_precision>=2^64) throw;

        Token t = new Token(_issuer,_symbol,_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash,m_coreContract);
        m_tokenSurmmarys[_id]=TokenSurmmary(_id,_issuer,t);
        m_symols[_symbol]=true;
        m_ids[++m_amounts]=_id;

    }

    function setOption(uint _MinTerm,address _coreContract,uint _limit)ifCore{

        m_MinTerm=_MinTerm;
        m_coreContract=_coreContract;
        m_limit=_limit;

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
}