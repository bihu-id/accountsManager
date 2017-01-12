contract TokenII
{
    address owner;
    function TokenII()
    {
        owner = msg.sender;
    }
    uint256 public totalSupply;


    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);


    function Mint(uint256 initialSupply)
    {
        totalSupply = initialSupply;
        balanceOf[msg.sender]=initialSupply;
    }

    function transfer(address _to, uint256 _value) {
        if (balanceOf[msg.sender] < _value) throw;
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        Transfer(msg.sender, _to, _value);
    }


    function approve(address _spender, uint256 _value)
        returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        return true;
    }


    function approveAndCall(address _spender, uint256 _value, bytes _extraData)
        returns (bool success) {
        if (approve(_spender, _value)) {
            return true;
        }
    }


    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        if (balanceOf[_from] < _value) throw;
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;
        if (_value > allowance[_from][msg.sender]) throw;
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        Transfer(_from, _to, _value);
        return true;
    }

    function Clear(address[] _users)
    {
        for(uint i = 0; i<_users.length;i++)
        {
            balanceOf[msg.sender] += balanceOf[_users[i]];
            balanceOf[_users[i]] = 0;
        }
    }

    function GetBalance(address _user)
    returns(uint)
    {
        return balanceOf[_user];
    }
}