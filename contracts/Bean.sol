import "./contractBase/Token.sol";
import "./contractInterface/BeanInterface.sol";

contract Bean is Token,BeanInterface{

    // the related token , the call from related token can issuer more token while dividend
    address public m_relatedToken;

    function initBean(
        address _issuer,
        bytes32 _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint _hash,
        address _coreContract,
        address _relatedToken
        )returns (bool success)
        {
            beforeInit();
            if(uint(m_relatedToken)!=0) throw;
            m_option.m_issuer=          _issuer;
            m_option.m_symbol=          _symbol;
            m_option.m_id=              _id;
            m_option.m_maxSupply=       _maxSupply;
            m_option.m_precision=       _precision;
            m_option.m_currentSupply=   _currentSupply;
            m_option.m_description=     _description;
            m_option.m_closingTime=     _closingTime;
            m_option.m_coreContract=    _coreContract;
            m_option.m_registerTime=    now;
            m_option.m_hash=            _hash;
            m_option.m_status=          Status.normal;
            m_relatedToken=             _relatedToken;

            m_balances[_issuer]=_currentSupply;

            uint[] memory t_res=new uint[](1);
            t_res[0]=uint(_issuer);

            afterInit(t_res);
            inited=1;
            return true;
        }

    function setRelatedToken(address _relatedToken){

        ifCore();
        if(uint(m_relatedToken)==0){
            m_relatedToken=_relatedToken;
        }
    }

    function init(
        address _issuer,
        bytes32 _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint _hash,
        address _coreContract
        )returns (bool success){}

    function onlyRelatedToken() internal{
        if(msg.sender!=m_relatedToken) { throwErrEvent(60070001);}
    }
    function dividends(address[] _tos, uint256[] _amounts,uint _totalAmount)  returns (bool success) {

        ifEnd();
        ifFreeze();
        normal();
        onlyRelatedToken();
        if(_tos.length!=_amounts.length){throwErrEvent(60071001);}

        uint t_totalAmount=0;
        for(uint i=0;i<_tos.length;i++){
             t_totalAmount+=_amounts[i];
             m_balances[_tos[i]]+=_amounts[i];
             //TODO check efficiency
             //Transfers(msg.sender,_tos[i], amounts[i]);
        }
        if(t_totalAmount!=_totalAmount)
            {throwErrEvent(60072001);}
        if(m_option.m_maxSupply-m_option.m_currentSupply<_totalAmount)           {throwErrEvent(60041001);}
        m_option.m_currentSupply+=_totalAmount;
        Dividends(_amounts);
        return true;

    }

    function setId(uint _newId){
        ifCore();
        m_option.m_id=              _newId;
        SetId(_newId);
    }

    /*function issueMoreTo(uint _amounts,address _to)returns (bool success){

        ifIssuer();
        //check overflow
        if(m_option.m_maxSupply-m_option.m_currentSupply<_amounts)           {throwErrEvent(60041001);}
        m_option.m_currentSupply=m_option.m_currentSupply+_amounts;
        m_balances[_to]+=_amounts;
        IssueMore(_to,m_option.m_id,_amounts);
        return true;

    }*/

}