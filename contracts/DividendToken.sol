import "Token.sol";
import "BeanInterface.sol";

DividendTokenInterface {
    struct Dividend{

        uint m_no;

        uint m_start;

        uint days;

        // eg. 1dou/token/day
        uint m_dividendRate;

        uint m_status;//1:set 2:start 3:end

        address tokenAddress;

        address m_executor;

    }
    struct AuxAddress{
        uint32      m_time;
        address     m_address;
    }
    function dividend(address _tokenAddress,uint _start ,uint _days,uint _dividendRate)returns(bool _success);
    function startDividend(uint _no);
    function executeDividend(address [] _holders);
    function endDividend(uint _no);
    function clearDividend(address [] _holders);
}

DividendToken is Token ,DividendTokenInterface{

    //TODO check overflow
    mapping (AuxAddress => int128)     m_balancesAux;

    address[]                          m_balancesAuxArray;

    //1:normal 2:dividend
    uint                    m_dividendStatus;

    uint                    m_dividendAmount;

    //record dividend history No.=>dividend
    mapping(uint=>Dividend) m_dividendHistory;

    //the current dividend ,store in m_dividendHistory index by No.
    uint m_currentNo;

    uint m_AuxTime;

    function onlyExecutor(uint _no)internal{
        if(msg.sender()!=m_dividendHistory[_no].m_executor)  {throwErrEvent(60060001);     }
    }

    function onlyAvailable(uint _no)internal{
        uint t_start=m_dividendHistory[_no].m_start;
        uint t_end=m_dividendHistory[_no].m_end<now;
        if(m_dividendHistory[_no].m_start>now &&m_dividendHistory[_no].m_end<now)
            m_dividendHistory[_no].m_status=2;
        else
            {throwErrEvent(60061001);     }
    }
    // TODO only token issuer/dividendor can dividend
    function dividend(address _tokenAddress,uint _start ,uint _days,uint _dividendRate,address _executor)returns(bool _success){
        m_dividendAmount++;
        m_dividendHistory[m_dividendAmount]=Dividend(m_dividendAmount,_start,_days,_dividendRate,1,_tokenAddress,_executor);
        //m_currentNo=m_dividendAmount;
        return true;
    }

    function startDividend(uint _no){
        onlyExecutor(_no);
        onlyAvailable(_no);
        m_dividendStatus=2;
        m_AuxTime=now;
    }

    function executeDividend(uint _no,address [] _holders){
        onlyExecutor(_no);
        onlyAvailable(_no);
        BeanInterface beam=BeanInterface(t_dividend.m_tokenAddress);

        uint[]  t_amounts=new uint[_holders.length];
        uint    t_totalAmounts=0;
        uint    t_AuxTime=m_AuxTime;
        for(uint i=0;i<t+len;i++){
            uint t_amount=_holders[i]]+m_balancesAux[_holders[i];
            if(t_amount>=0)//just make t_amount length do not change {
                t_amounts[i]=m_balance[_holders[i]]+m_balancesAux[AuxAddress(m_AuxTime,_holders[i])];
                t_totalAmounts+=t_amount;
            }
            // todo when t_amount<0
        }
        beam.transfers(_holders,t_amounts,t_totalAmounts);
    }

    function endDividend(){
        if(m_dividendHistory[_no].m_end<=now)
            m_dividendHistory[_no].m_status=3;
        m_dividendStatus=1;
    }

    function getAuxAddress()constant returns(address [] _addresses){
        return m_balancesAuxArray;
    }

    function clear(address [] _addresses);

    function transfer(address _to, uint256 _amount)  returns (bool success) {

        ifEnd();
        ifFreeze();
        normal();
        if (m_balances[msg.sender] >= _amount && _amount > 0) {
            m_balances[msg.sender] -= _amount;
            m_balances[_to] += _amount;
            if(m_dividendStatus==2){
                AuxAddress t_sender=AuxAddress(m_AuxTime,msg.sender);
                AuxAddress t_to=AuxAddress(m_AuxTime,_to);
                m_balancesAux[t_sender]+=_amount;
                m_balancesAux[t_to]-=_amount;
            }
            Transfer(msg.sender, _to, _amount);
            return true;
        } else {
           throwErrEvent(60040005);
           return false;
        }

    }

    function transferOrigin(address _to,uint _amount)returns (bool success){

        ifEnd();
        ifFreeze();
        normal();
        if (m_balances[tx.origin] >= _amount && _amount > 0) {
            m_balances[tx.origin] -= _amount;
            m_balances[_to] += _amount;
            if(m_dividendStatus==2){
                AuxAddress t_sender=AuxAddress(m_AuxTime,msg.sender);
                AuxAddress t_to=AuxAddress(m_AuxTime,_to);
                m_balancesAux[t_sender]+=_amount;
                m_balancesAux[t_to]-=_amount;
            }
            Transfer(tx.origin, _to, _amount);
            return true;
        } else {
           throwErrEvent(60040005);
           return false;
        }
    }
}