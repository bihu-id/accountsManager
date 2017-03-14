import "./Token.sol";
import "./BeanInterface.sol";

contract Bean is Token,BeanInterface{

    // the related token , the call from related token can issuer more token while dividend
    address m_relatedToken;

    function onlyRelatedToken() internal{
        if(msg.sender!=m_relatedToken) throwErrEvent(60070001);
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
             m_balances[_tos[i]]=_amounts[i];
             //TODO check efficiency
             //Transfers(msg.sender,_tos[i], amounts[i]);
        }
        if(t_totalAmount!=_totalAmount)
            {throwErrEvent(60072001);}
        if(m_option.m_maxSupply-m_option.m_currentSupply<_totalAmount)           {throwErrEvent(60041001);}
        m_option.m_currentSupply+=_totalAmount;
        Dividends(msg.sender,t_totalAmount);
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