import "AccountInterface.sol";
import "TokenInterface.sol";
import "BaseAppInterface.sol";

contract ParkingLock is BaseAppInterface{

    address public owner;
    address public user;

    uint public price; // fixed price for demo
    uint public rentTime;
    uint public returnTime;

    bool public isRented;


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
    	owner 	= msg.sender;
    	user 	= msg.sender;
    	price 	=0;

    	rentTime = 0;
        returnTime = 0;

    	isRented = false;

    }

    function setPrice(uint _price){
        price=_price;
    }
    function rent(address _tokenAddress,address _user,uint _start, uint256 _amount) require(!isRented) returns (bool success)
    {

        /*AccountInterface A=AccountInterface(_user);
        //this do not need
        if(A.transferTokenReceipt.gas(msg.gas)(this,_tokenAddress,owner,_amount)) {
        */

        TokenInterface t=TokenInterface(_tokenAddress);
        if(t.transferOrigin.gas(msg.gas)(owner,_amount)){
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
    function summary() constant returns (
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

    function changeOwner(address _newOwner) onlyOwner returns(bool _success)
    {
    	owner = _newOwner;
    	return true;
    }
}
