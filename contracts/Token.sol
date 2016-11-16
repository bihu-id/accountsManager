
contract TokenInterface {
     struct Option{
        //symbol of taken;
        string symbol;
        //the creator/owner of token
        address issuer;
        // max supply of token ,u256
        uint maxSupply;
        //
        uint precision;

        uint currentSupply;

        string description;
        //register date
        uint registerTime;
        // end time of this token
        uint  closingTime;
        // operaton of this token must called by coreContract
        address coreContract;
        // core can override transfer value from any address to any address
        address core;
    }
    Option m_option;

    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    /// @param _owner The address from which the balance will be retrieved
    /// @return The balance
    function balanceOf(address _owner) constant returns (uint256 balance);

    /// @notice Send `_amount` tokens to `_to` from `_from`
    /// @param _from The address of the sender
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    function transfer(address _from,address _to, uint256 _amount) returns (bool success);

    /// @notice Override send `_amount` tokens to `_to` from `_from`
    /// @param _from The address of the sender
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    //function transferOverride(address _from,address _to,uint _amount)returns (bool success);

    /// @notice Send `_amount` tokens to `_to` from `_from` on the condition it
    /// is approved by `_from`
    /// @param _from The address of the origin of the transfer
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    function transferFrom(address _from, address _to, uint256 _amount) returns (bool success);

    /// @notice `msg.sender` approves `_spender` to spend `_amount` tokens on
    /// its behalf
    /// @param _spender The address of the account able to transfer the tokens
    /// @param _amount The amount of tokens to be approved for transfer
    /// @return Whether the approval was successful or not
    function approve(address _from ,address _spender, uint256 _amount) returns (bool success);

    /// @param _owner The address of the account owning tokens
    /// @param _spender The address of the account able to transfer the tokens
    /// @return Amount of remaining tokens of _owner that _spender is allowed
    /// to spend

    function allowance(
        address _owner,
        address _spender
    ) constant returns (uint256 remaining);

    /// @return the summary of this token
    function surmmay()constant returns(
        address _issuer,
        string _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        string _description,
        uint _registerTime,
        uint _closingTime,
        address _coreContract
        );
    event Transfer(address indexed _from, address indexed _to, uint256 _amount);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _amount
    );
}

contract Token is TokenInterface {

    //check token if end
    modifier notEnd() {if(now < m_option.closingTime) throw; _;}
    //check if the operation is called from core
    modifier ifCore() {if(msg.sender != m_option.core)throw; _;}

    event TokenCreate(
        address _issuer,
        string _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        string _description,
        uint  _closingTime,
        address _coreContract
        );

    function Token(
        address _issuer,
        string _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        string _description,
        uint  _closingTime,
        address _coreContract
        ){
            //if(now<_closingTime) throw;
            m_option.issuer=_issuer;
            m_option.symbol=_symbol;
            m_option.maxSupply=_maxSupply;
            m_option.precision=_precision;
            m_option.description=_description;
            m_option.closingTime=_closingTime;
            m_option.coreContract=_coreContract;
            m_option.registerTime=now;
            TokenCreate(_issuer,_symbol,_maxSupply,_precision,_currentSupply,_description,_closingTime, _coreContract);
        }

    function balanceOf(address _owner) notEnd constant returns (uint256 balance) {
        return balances[_owner];
    }

    function transfer(address _from ,address _to, uint256 _amount) notEnd ifCore returns (bool success) {

        if (balances[_from] >= _amount && _amount > 0) {
            balances[_from] -= _amount;
            balances[_to] += _amount;
            Transfer(_from, _to, _amount);
            return true;
        } else {
           return false;
        }
    }
    /*function transferOverride(address _from,address _to,uint _amount)notEnd ifCore returns (bool success){

        if (balances[_from] >= _amount && _amount > 0) {
            balances[_from] -= _amount;
            balances[_to] += _amount;
            Transfer(_from, _to, _amount);
            return true;
        } else {
           return false;
        }
    }*/

    function transferFrom(
        address _from,
        address _to,
        uint256 _amount
    )  notEnd ifCore returns (bool success) {

        if (balances[_from] >= _amount
            && allowed[_from][msg.sender] >= _amount
            && _amount > 0) {
            balances[_from] -= _amount;
            allowed[_from][msg.sender] -= _amount;
            balances[_to] += _amount;
            Transfer(_from, _to, _amount);
            return true;
        } else {
            return false;
        }
    }

    function approve(address _from ,address _spender, uint256 _amount) notEnd ifCore returns (bool success) {
        allowed[_from][_spender] = _amount;
        Approval(_from, _spender, _amount);
        return true;
    }

    function allowance(address _owner, address _spender) notEnd constant returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }
    function surmmay()constant returns(
        address _issuer,
        string _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        string _description,
        uint _registerTime,
        uint  _closingTime,
        address _coreContract
        ){
            _issuer=m_option.issuer;
            _symbol=m_option.symbol;
            _maxSupply=m_option.maxSupply;
            _precision=m_option.precision;
            _currentSupply=m_option.currentSupply;
            _description=m_option.description;
            _registerTime=m_option.registerTime;
            _closingTime=m_option.closingTime;
            _coreContract=m_option.coreContract;
        return;
    }
}

contract TokenManagerInterface {

    struct TokenSurmmary{
        address owner;
        address contractAddress;
    }
    uint MinTerm=3600;
    // core of token contract
    address coreContract;
    // core of this contract
    address core;
    //record relationship between symbols and owner;
    mapping(string=>TokenSurmmary) tokenSurmmarys;
    // Null address
    TokenSurmmary tokenSurmmaryNull;
    //total amounts of symbols
    uint amounts=0;
    //record add symbols
    string[] symbolsArray;
    function createToken(
        address _issuer,
        string _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        string _description,
        uint  _closingTime);
    function setOption(uint _MinTerm,address _coreContract);
    function getTokenAddress(string _symbol)constant returns(address);
    function getTokenSurmmary(string _symbol)constant returns(address,address);

}
contract TokenManager is TokenManagerInterface{

    modifier ifCore() {if(msg.sender != core)throw; _;}
    function TokenManager(){core=msg.sender;}
    function createToken(
        address _issuer,
        string _symbol,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        string _description,
        uint  _closingTime)ifCore{
        //if(tokenSurmmarys[_symbol]!=tokenSurmmaryNull) throw;
        if(_closingTime<0||_closingTime<now+MinTerm) throw;
        Token t = new Token(_issuer,_symbol,_maxSupply,_precision,_currentSupply,_description,_closingTime,coreContract);
        tokenSurmmarys[_symbol]=TokenSurmmary(_issuer,t);
        amounts++;
        }
    function setOption(uint _MinTerm,address _coreContract)ifCore{

        MinTerm=_MinTerm;
        coreContract=_coreContract;
    }
    function getTokenAddress(string _symbol)constant returns(address){

        return tokenSurmmarys[_symbol].contractAddress;
    }
    function getTokenSurmmary(string _symbol)constant returns(address,address){

        return (tokenSurmmarys[_symbol].owner,tokenSurmmarys[_symbol].contractAddress);
    }
}