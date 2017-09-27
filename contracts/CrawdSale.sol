pragma solidity ^0.4.11;
import "./SafeMath.sol";
import "./Owned.sol";

contract FinCrawdSale is SafeMath, Owned {
    uint256 public constant MIN_FUND = (0.001 ether);
    uint256 public constant CRAWDSALE_START_DAY = 1;
    uint256 public constant CRAWDSALE_END_DAY = 3;

    uint256 public dayCycle = 24*7 hours;
    uint256 public fundingStartTime = 0;
    address public ethFundDeposit = 0;

    bool public isFinalize = false;
    bool public isPause = false;
    mapping (uint => uint) public dailyTotals;
    mapping (uint => mapping (address => uint)) public userBuys;
    uint256 public totalContributedETH = 0;

    uint256[] public ratio;

    // events
    event LogBuy (uint window, address user, uint amount);
    event LogCreate (uint fundingStartTime, uint dayCycle);
    event LogFinalize (uint finalizeTime);
    event LogPause (uint finalizeTime, bool pause);

    function FinCrawdSale (address _ethFundDeposit,uint256 _fundingStartTime, uint256 _dayCycle)  {
        require( now < _fundingStartTime );
        require( _ethFundDeposit != 0 );

        fundingStartTime = _fundingStartTime;
        ethFundDeposit = _ethFundDeposit;
        dayCycle = _dayCycle;
        ratio[0]=150000;
        ratio[1]=130000;
        ratio[2]=120000;
        LogCreate(_fundingStartTime,_dayCycle);
    }

    function changeRatio(uint r1,uint r2,uint r3)onlyOwner{
        require( now <fundingStartTime );
        ratio[0]=r1;
        ratio[1]=r2;
        ratio[2]=r3;
    }
    //crawdsale entry
    function () payable {
        require(!isPause);
        require(!isFinalize);
        uint day = today();
        require( day >= CRAWDSALE_START_DAY && day <= CRAWDSALE_END_DAY );
        require( msg.value >= MIN_FUND );
        ethFundDeposit.transfer(msg.value);
        //record user's buy amount
        userBuys[day][msg.sender] += msg.value;
        dailyTotals[day] += msg.value;
        totalContributedETH += msg.value;

        LogBuy(day, msg.sender, msg.value);
    }

    function kill() onlyOwner {
        selfdestruct(owner);
    }

    function pause(bool _isPause) onlyOwner {
        isPause = _isPause;
        LogPause(now,_isPause);
    }

    function finalize() onlyOwner {
        isFinalize = true;
        LogFinalize(now);
    }

    function today() constant returns (uint) {
        return sub(now, fundingStartTime) / dayCycle + 1;
    }
}
