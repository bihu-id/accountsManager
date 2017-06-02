import "./base/Erc20.sol";

contract Erc20Token is Erc20 {

    mapping (address => uint256) m_balances;
    mapping (address => mapping (address => uint256)) m_allowed;
    uint m_totalSupply;

    function Erc20Token(uint _totalSupply,uint _currentSupply){
        m_totalSupply=_totalSupply;
        m_balances[msg.sender]=_currentSupply;
    }
    function balanceOf(address _owner) constant returns (uint256 balance) {

        return m_balances[_owner];

    }

    function totalSupply() constant returns (uint supply){

        return m_totalSupply;

    }

    function allowance(address owner, address spender) constant returns (uint _allowance){

        return  m_allowed[owner][spender];

    }

    function transfer(address _to, uint256 _amount)  returns (bool success) {

        if (m_balances[msg.sender] >= _amount && _amount > 0) {
            m_balances[msg.sender] -= _amount;
            m_balances[_to] += _amount;
            Transfer(msg.sender, _to, _amount);
            return true;
        } else {
           return false;
        }

    }

    function transferFrom(address _from, address _to, uint256 _amount) returns (bool success) {

        if (m_balances[_from] >= _amount
            && m_allowed[_from][msg.sender] >= _amount
            && _amount > 0) {
            m_balances[_from] -= _amount;
            m_allowed[_from][msg.sender] -= _amount;
            m_balances[_to] += _amount;
            Transfer(_from, _to, _amount);
            return true;
        } else {
            return false;
        }
    }

    function approve(address _spender, uint256 _amount)  returns (bool success) {

        m_allowed[msg.sender][_spender] = _amount;
        Approval(msg.sender, _spender, _amount);
        return true;

    }

}

