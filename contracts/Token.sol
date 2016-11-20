import "Erc20.sol";

contract TokenInterface is Erc20 {

     struct Option{

            // operaton of this token must called by coreContract
            address m_coreContract;
            // core can override transfer value from any address to any address
            address m_core;
            //symbol of taken;
            string m_symbol;

            //id of token, the low 48 is id ,and 48-64 is type;
            uint m_id;
            //the creator/owner of token
            address m_issuer;
            // max supply of token ,u256
            uint m_maxSupply;
            //
            uint m_precision;

            uint m_currentSupply;

            //register date
            uint m_registerTime;

            // end time of this token
            uint  m_closingTime;

            string m_description;

            //hash of contract
            uint m_hash;

    }

    Option m_option;

    mapping (address => uint256) m_balances;
    mapping (address => mapping (address => uint256)) m_allowed;

    /// @notice Override send `_amount` tokens to `_to` from `_from`
    /// @param _from The address of the sender
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    //function transferOverride(address _from,address _to,uint _amount)returns (bool success);

    /// @return the summary of this token
    function surmmay()constant returns(
        address _issuer,
        string _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        string _description,
        uint _registerTime,
        uint _closingTime,
        address _coreContract,
        uint _hash
        );
}

contract Token is TokenInterface {

    //check token if end
    modifier notEnd() {if(now < m_option.m_closingTime) throw; _;}
    //check if the operation is called from core
    modifier ifCore() {if(msg.sender != m_option.m_core)throw; _;}

    //force transfer by core
    event ForceTransfer(address _from, address _to, uint _amount);

    event TokenCreate(
        address _issuer,
        string _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint _hash,
        address _coreContract);

    function Token(
        address _issuer,
        string _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint _hash,
        address _coreContract
        ){
            //if(now<_closingTime) throw;
            m_option.m_issuer=_issuer;
            m_option.m_symbol=_symbol;
            m_option.m_id=_id;
            m_option.m_maxSupply=_maxSupply;
            m_option.m_precision=_precision;
            m_option.m_description=_description;
            m_option.m_closingTime=_closingTime;
            m_option.m_coreContract=_coreContract;
            m_option.m_registerTime=now;
            m_option.m_hash=_hash;

            TokenCreate(_issuer,_symbol,_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash, _coreContract);
        }

    function balanceOf(address _owner) constant returns (uint256 balance) {
        return m_balances[_owner];
    }

    function totalSupply() constant returns (uint supply){

        return m_option.m_currentSupply;

    }

    function allowance(address owner, address spender) constant returns (uint _allowance){

        return  m_allowed[owner][spender];

    }

    function transfer(address _to, uint256 _amount) notEnd returns (bool success) {

        if (m_balances[msg.sender] >= _amount && _amount > 0) {
            m_balances[msg.sender] -= _amount;
            m_balances[_to] += _amount;
            Transfer(msg.sender, _to, _amount);
            return true;
        } else {
           return false;
        }
    }
    function forceTransfer(address _from,address _to,uint _amount)notEnd ifCore returns (bool success){

        if (m_balances[_from] >= _amount && _amount > 0) {
            m_balances[_from] -= _amount;
            m_balances[_to] += _amount;
            ForceTransfer(_from, _to, _amount);
            return true;
        } else {
           return false;
        }
    }

function transferFrom(address _from, address _to, uint256 _amount) notEnd returns (bool success) {

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

    function approve(address _spender, uint256 _amount) notEnd returns (bool success) {
        m_allowed[msg.sender][_spender] = _amount;
        Approval(msg.sender, _spender, _amount);
        return true;
    }


    function surmmay()constant returns(
        address _issuer,
        string _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        string _description,
        uint _registerTime,
        uint  _closingTime,
        address _coreContract,
        uint _hash
        ){
            _issuer=m_option.m_issuer;
            _symbol=m_option.m_symbol;
            _id=m_option.m_id;
            _maxSupply=m_option.m_maxSupply;
            _precision=m_option.m_precision;
            _currentSupply=m_option.m_currentSupply;
            _description=m_option.m_description;
            _registerTime=m_option.m_registerTime;
            _closingTime=m_option.m_closingTime;
            _coreContract=m_option.m_coreContract;
            _hash=m_option.m_hash;
        return;
    }
}

