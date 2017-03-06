import "Token.sol";
import "BeanInterface.sol";

Bean is Token,BeanInterface{

    events Transfers(address _from ,uint _allAmount);
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
                 t_totalAmount+=amounts[i];
                 m_balance[_tos[i]]=amounts[i];
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
}