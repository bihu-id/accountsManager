import "./Token.sol";
import "./BeanInterface.sol";

contract Bean is Token,BeanInterface{

    address m_tokenManager;
    function transfers(address[] _tos, uint256[] _amounts,uint _totalAmount)  returns (bool success) {

        ifEnd();
        ifFreeze();
        normal();
        if(_tos.length!=_amounts.length){}
            throwErrEvent(60071001);
        if (m_balances[msg.sender] >= _totalAmount && _totalAmount > 0) {
            m_balances[msg.sender] -= _totalAmount;
            uint t_totalAmount=0;
            for(uint i=0;i<_tos.length;i++){
                 t_totalAmount+=_amounts[i];
                 m_balances[_tos[i]]=_amounts[i];
                 //TODO check efficiency
                 //Transfers(msg.sender,_tos[i], amounts[i]);
            }
            if(t_totalAmount!=_totalAmount)
                {throwErrEvent(60072001);}
            return true;
        } else {
           throwErrEvent(60040005);
           return false;
        }

    }

    function setId(uint _newId){
        ifCore();
        m_option.m_id=              _newId;
        SetId(_newId);
    }
}