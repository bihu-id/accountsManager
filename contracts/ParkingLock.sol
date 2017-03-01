import "AccountInterface.sol";
import "TokenInterface.sol";
//import "Erc20.sol";
import "BaseEvent.sol";

contract ParkingLock is BaseEvent{

     enum Status{

        normal,
        freeze

     }
     event Transfer(address  from, address  to, uint value);
    address public owner;
    address public user;
    address public issuer;
    uint    registerTime;
    uint public price; // fixed price for demo
    uint public rentTime;
    uint public returnTime;

    bool public isRented;

    mapping (address => uint256) m_balances;

	event Rent(address _user,uint _rentTime,uint _returnTime,bool _isRented);

    modifier onlyOwner()
    {
        if (msg.sender != owner) throw;
        _;
    }

    modifier onlyUsers()
    {
        if (msg.sender != user) throw;
        _;
    }

    modifier require(bool _condition)
    {
        if (!_condition) throw;
        _;
    }

    modifier noMoney()
    {
        if (msg.value > 0) throw;
        _;
    }

    function ParkingLock()
    {
        issuer=msg.sender;
    	m_balances[msg.sender] 	=1;
    	registerTime=now;
    	user 	= msg.sender;
    	price 	=100;

    	rentTime = 0;
        returnTime = 0;

    	isRented = false;

    }

    function setPrice(uint _price){
        price=_price;
    }
    function rent(address _tokenAddress,address _user,uint _start, uint256 _amount) require(!isRented) returns (bool success)
    {

        AccountInterface A=AccountInterface(_user);
        //this do not need
        if(A.transferTokenReceipt.gas(msg.gas)(_tokenAddress,owner,_amount)) {


        //TokenInterface t=TokenInterface(_tokenAddress);
        //if(t.transferOrigin.gas(msg.gas)(owner,_amount)){
            user = _user;
            rentTime = _start;
            returnTime = _start + _amount/price   ;

            isRented = true;

            Rent(msg.sender,_start,returnTime,isRented);
            return true;
        } else {
            return false;
        }
    }

    function returnLock()
    {
        isRented = false;
        rentTime = 0;
        returnTime = 0;
        user = owner;
    }

    function check(){
        if( returnTime < block.timestamp) {
            isRented = false;
            rentTime = 0;
            returnTime = 0;
            user = owner;
        }
    }
    function parkSummary() constant returns (
    	uint _price,
    	bool _isRented,
    	address _owner,
    	address _user
    	)
    {
        _price = price;
        _isRented = isRented;
        _owner = owner;
        _user = user;

    	return;
    }
    function summary()constant returns(
        uint        _id,
        address     _issuer,
        bytes32     _symbol,
        uint        _maxSupply,
        uint        _precision,
        uint        _currentSupply,
        string      _description,
        uint        _registerTime,
        uint        _closingTime,
        address     _coreContract,
        uint        _hash,
        Status      _status
    ){
        _id=                10000;
        _issuer=            issuer;
        _symbol=            "PAK";
        _maxSupply=         1;
        _precision=         1;
        _currentSupply=     1;
        _description=       "停车权合约";
        _registerTime=      registerTime;
        _closingTime=       0;
        _coreContract=      0x100;
        _hash=              0x100;
        _status=            Status(0);
        return;

    }
    function transfer(address _to, uint256 _amount)  returns (bool success) {

        if (m_balances[msg.sender] >= _amount && _amount == 1) {
            m_balances[msg.sender] -= _amount;
            m_balances[_to] += _amount;
            owner=_to;
            Transfer(msg.sender, _to, _amount);
            return true;
        } else {
           throwErrEvent(60040005);
           return false;
        }

    }
    function balanceOf(address _owner) constant returns (uint256 balance) {

        return m_balances[_owner];

    }
}