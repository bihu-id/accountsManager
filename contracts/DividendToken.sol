import "./Token.sol";
import "./BeanInterface.sol";
import "./DividendTokenInterface.sol";

contract DividendToken is Token ,DividendTokenInterface{

    //TODO check overflow
    //AuxAddress=>m_balance
    mapping ( uint=> uint)      m_balancesAux;

    address[]                   m_balancesAuxArray;

    //AuxStatus ,since solidity consider Enum as uint8,then merge variable that may cause data error when contract logic update
    //so use uint replace Enum
    uint                        m_dividendStatus;

    uint                        public m_dividendAmount;

    //record dividend history No.=>dividend
    mapping(uint=>Dividend)     public m_dividendHistory;

    //the current dividend ,store in m_dividendHistory index by No.
    uint m_currentNo;

    uint m_AuxTime;

    function onlyExecutor(uint _no)internal{
        if(msg.sender!=m_dividendHistory[_no].m_executor)  {throwErrEvent(60060001);     }
    }

    function onlyAvailable(uint _no)internal{
        uint t_start=m_dividendHistory[_no].m_start;
        uint t_end=t_start+m_dividendHistory[_no].m_days*3600*24;
        if(t_start>now &&t_end<now)
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
        BeanInterface beam=BeanInterface(m_dividendHistory[_no].m_tokenAddress);
        uint t_len=_holders.length;
        uint[]  memory  t_amounts=new uint[](t_len);
        uint    t_totalAmounts=0;
        uint    t_AuxTime=m_AuxTime;
        for(uint i=0;i<t_len;i++){
            address t_holder=_holders[i];
            uint t_holderAux=serializeAddressAux(t_holder,uint32(t_AuxTime));
            uint complementAmount=m_balances[t_holder]+m_balancesAux[t_holderAux];
            //never complementAmount>>255<0
            if(complementAmount>>255==0){//recode 0 just make t_amount length do not change
                t_amounts[i]=complementAmount;
                t_totalAmounts+=complementAmount;
            }else
            {
                throwErrEvent(60069991);
            }
            // todo when t_amount<0
        }
        beam.transfers(_holders,t_amounts,t_totalAmounts);
    }

    function endDividend(uint _no){
        uint t_end=m_dividendHistory[_no].m_start+m_dividendHistory[_no].m_days*3600*24;
        if(t_end<=now)
            m_dividendHistory[_no].m_status=3;
        m_dividendStatus=1;
    }

    function serializeAddressAux(address _address,uint32 _time)internal returns(uint _addressAux){
        return uint(_address)*0x100000000+_time;
    }

    function parseAddressAux(uint _addressAux)internal returns(address _address,uint32 _time){
        uint32 t_time=uint32(_addressAux%0x100000000);
        address t_address=address((_addressAux-t_time)/0x100000000);
        return (t_address, t_time);
    }


    function transfer(address _to, uint256 _amount)  returns (bool success) {

        ifEnd();
        ifFreeze();
        normal();
        if (m_balances[msg.sender] >= _amount && _amount > 0) {
            m_balances[msg.sender] -= _amount;
            m_balances[_to] += _amount;
            if(m_dividendStatus==2){
                uint complementAmount=~_amount+1;
                m_balancesAux[serializeAddressAux(msg.sender,uint32(m_AuxTime))]+=_amount;
                m_balancesAux[serializeAddressAux(_to,uint32(m_AuxTime))]+=complementAmount;
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
                uint complementAmount=~_amount+1;
                m_balancesAux[serializeAddressAux(msg.sender,uint32(m_AuxTime))]+=_amount;
                m_balancesAux[serializeAddressAux(_to,uint32(m_AuxTime))]+=complementAmount;
            }
            Transfer(tx.origin, _to, _amount);
            return true;
        } else {
           throwErrEvent(60040005);
           return false;
        }
    }

}