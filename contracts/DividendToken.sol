import "./Token.sol";
import "./BeanInterface.sol";
import "./DividendTokenInterface.sol";

contract DividendToken is Token ,DividendTokenInterface{

    //TODO check overflow
    //AuxAddress(address __ m_AuxTime)=>m_balance (补码)
    mapping ( uint=> uint)      m_balancesAux;

    address[]                   m_balancesAuxArray;

    //AuxStatus ,since solidity consider Enum as uint8,then merge variable that may cause data error when contract logic update
    //so use uint replace Enum
    uint                        public m_AuxStatus;

    uint                        public m_dividendAmount;

    //record dividend history No.=>dividend
    mapping(uint=>Dividend)     m_dividendHistory;

    //the current dividend ,store in m_dividendHistory index by No.
    uint                        m_currentNo;

    //分红辅助时间, m_balance[address]=m_AuxTime __ balance ,1.一个分红辅助时间内一个账户只能被分红一次,2.一个分红辅助时间确定
    uint                        m_AuxTime;

    // current rate ,not use
    uint                        public m_rate;

    function onlyExecutor(uint _no)internal{
        if(msg.sender!=m_dividendHistory[_no].m_executor)  throwErrEvent(60060001);   //60060001:  caller不是 分红执行者
    }

    function checkTime(uint _no)internal{
        uint t_start=m_dividendHistory[_no].m_start;
        uint t_end=t_start+m_dividendHistory[_no].m_days*m_dividendHistory[_no].m_interval;
        if(t_start<now &&now<t_end)
            m_dividendHistory[_no].m_status=uint(DividendStatus.Start);
        else
            throwErrEvent(60061001);    //60061001:  执行的分红没有开始或者已经终止
    }

    function checkStatus(uint _no)internal{
        if(m_dividendHistory[_no].m_status==uint(DividendStatus.End)||m_dividendHistory[_no].m_status==uint(DividendStatus.Revoke))
            //60061005:  分红已经结束或者取消
            throwErrEvent(60061005);
    }
    // only token issuer/dividendor can dividend
    function onlyIssuer()internal{
        if(msg.sender!=m_option.m_issuer)
            //60060002:  caller不是 凭证issuer
            throwErrEvent(60060002);
    }

    function setDividend(address _tokenAddress,uint _start ,uint _interval,uint _times,uint _totalAmount,address _executor)returns(bool _success){

        onlyIssuer();
        uint t_interval=_interval;
        if(_interval==0)
            t_interval=3600*24;
        else
            if(_interval<5*60)
                throwErrEvent(60061009);
        m_dividendAmount++;
        m_dividendHistory[m_dividendAmount]=Dividend(m_dividendAmount,_start,_times,_totalAmount,1,_tokenAddress,_executor,0,0,0,t_interval);
        SetDividend(m_dividendAmount,_tokenAddress,_start,t_interval,_times,_totalAmount,_executor);
        return true;

    }

    function revokeDividend(uint _no)returns(bool _success){

        onlyIssuer();
        uint t_start=m_dividendHistory[_no].m_start;
        uint t_end=t_start+m_dividendHistory[_no].m_days*m_dividendHistory[_no].m_interval;
        if(now>=t_end)
            //60061003:  不能撤销一个已经过期的分红
            throwErrEvent(60061003);
        if(m_AuxStatus==uint(AuxStatus.Dividend))
            //60061004:  分红执行阶段不能撤销分红
            throwErrEvent(60061004);
        m_dividendHistory[_no].m_status=uint(DividendStatus.Revoke);
        RevokeDividend(_no,m_dividendHistory[_no].m_implementedAmount);
        return true;

    }

    function startDividend(uint _no)returns(bool _success){
        onlyExecutor(_no);
        checkTime(_no);
        checkStatus(_no);

        uint t_start=m_dividendHistory[_no].m_start;
        uint t_dayNo=m_dividendHistory[_no].m_dayNo;
        uint t_interval=m_dividendHistory[_no].m_interval;
        uint haveSetEndTime=t_start+t_dayNo*t_interval;


        if (m_AuxStatus==uint(AuxStatus.Dividend))
            //不能重复开启分红
            throwErrEvent(60061007);
        uint t_totalAmount=m_dividendHistory[_no].m_totalAmount;

        //set m_limitedAmount perDay
        if(now>haveSetEndTime){
            uint t_rate=(t_totalAmount/m_dividendHistory[_no].m_days)/m_option.m_currentSupply;
            m_dividendHistory[_no].m_dayNo++;
            uint t_addtionalLimited=t_rate*m_option.m_currentSupply;

            uint t_timestamp=t_start+t_dayNo*t_interval;
            m_dividendHistory[_no].m_detailPerInterval[m_dividendHistory[_no].m_dayNo]=ExecuteDetail(t_rate,0,t_addtionalLimited,t_timestamp);

            m_dividendHistory[_no].m_limitedAmount+=t_addtionalLimited;
            m_AuxStatus=uint(AuxStatus.Dividend);
            m_AuxTime=now;
        }
        else
            //不到下一次分红执行周期,不能开启执行
            throwErrEvent(60061012);
        StartDividend(_no,m_dividendHistory[_no].m_dayNo);
        return true;
    }

    function executeDividend(uint _no,address [] _holders){

        onlyExecutor(_no);

        if(m_dividendHistory[_no].m_status!=2)
            //执行一个还没有开始的分红
            throwErrEvent(60061006);
        BeanInterface beam=BeanInterface(m_dividendHistory[_no].m_tokenAddress);

        //uint    t_len=_holders.length;
        uint[]  memory  t_amounts=new uint[](_holders.length);
        uint    t_totalAmounts=0;
        uint    t_AuxTime=m_AuxTime;
        uint    t_dayNo=m_dividendHistory[_no].m_dayNo;
        //uint    t_rate=m_dividendHistory[_no].m_detailPerInterval[t_dayNo].m_rate;

        for(uint i=0;i<_holders.length;i++){
            //address t_holder=_holders[i];
            uint t_holderAux=serializeAddressAux(_holders[i],uint32(t_AuxTime));
            uint t_time_balance=m_balances[_holders[i]];
            uint t_time;
            uint t_balance;
            (t_time,t_balance)=parseBalance(t_time_balance);
            if(t_time==t_AuxTime)
                // this address have dividend
                t_amounts[i]=0;
            else{
                uint complementAmount=t_balance+m_balancesAux[t_holderAux];
                //never complementAmount>>255<0
                if(complementAmount>>255==0){//recode 0 just make t_amount length do not change
                    t_amounts[i]=(complementAmount*m_dividendHistory[_no].m_detailPerInterval[t_dayNo].m_rate);
                    t_totalAmounts+=t_amounts[i];
                    //update t_time_balance
                    m_balances[_holders[i]]=serializeBalance(t_AuxTime,t_balance);
                }else
                {
                    throwErrEvent(60069991);
                }

            }
            // todo when t_amount<0
        }
        changeAndCheckLimit(_no,t_totalAmounts);
        beam.dividends(_holders,t_amounts,t_totalAmounts);
    }

    function changeAndCheckLimit(uint _no,uint t_totalAmounts)internal{

        uint    t_dayNo=m_dividendHistory[_no].m_dayNo;
        uint t_implementedAmount=m_dividendHistory[_no].m_implementedAmount+t_totalAmounts;
        m_dividendHistory[_no].m_implementedAmount=t_implementedAmount;

        uint t_implementedAmountPerDay=m_dividendHistory[_no].m_detailPerInterval[t_dayNo].m_implementedAmount+t_totalAmounts;
        m_dividendHistory[_no].m_detailPerInterval[t_dayNo].m_implementedAmount=t_implementedAmountPerDay;

        uint limit=m_dividendHistory[_no].m_detailPerInterval[t_dayNo].m_limitedAmount;
        if(t_implementedAmount>m_dividendHistory[_no].m_limitedAmount||t_implementedAmountPerDay>limit)
            //分红数超过最大限额。
            throwErrEvent(60061002);

    }

    function reissueDividend(uint _no,uint _dayNo,address [] _addresses,uint [] _balances){

        onlyExecutor(_no);
        if(now<=m_dividendHistory[_no].m_detailPerInterval[_dayNo].m_timestamp)
            //只能补已经过期的分红
            throwErrEvent(60061010);
        if(_addresses.length!=_balances.length)
            //地址和分红额数组长度补一致
            throwErrEvent(60061011);

        uint t_totalAmounts=0;
        for(uint i=0;i<_balances.length;i++)
            t_totalAmounts+=_balances[i];

        uint t_implementedAmountPerDay=m_dividendHistory[_no].m_detailPerInterval[_dayNo].m_implementedAmount+t_totalAmounts;
        m_dividendHistory[_no].m_detailPerInterval[_dayNo].m_implementedAmount=t_implementedAmountPerDay;
        uint limit=m_dividendHistory[_no].m_detailPerInterval[_dayNo].m_limitedAmount;

        if(t_implementedAmountPerDay>limit)
            //分红数超过最大限额。
            throwErrEvent(60061002);

        BeanInterface beam=BeanInterface(m_dividendHistory[_no].m_tokenAddress);

        beam.dividends(_addresses,_balances,t_totalAmounts);
    }

    function endDividend(uint _no){

        onlyExecutor(_no);
        uint t_end=m_dividendHistory[_no].m_start+m_dividendHistory[_no].m_days*m_dividendHistory[_no].m_interval;
        if(now>=t_end)
            //set end status
            m_dividendHistory[_no].m_status=3;
        m_AuxStatus=1;
        EndDividend(_no);

    }

    function serializeAddressAux(address _address,uint32 _time)internal returns(uint _addressAux){

        uint32 Max32=uint32(-1);
        return uint(_address)*Max32+_time;

    }

    function parseAddressAux(uint _addressAux)internal returns(address _address,uint32 _time){

        uint32 Max32=uint32(-1);
        uint32 t_time=uint32(_addressAux%Max32);
        address t_address=address((_addressAux-t_time)/Max32);
        return (t_address, t_time);

    }

    function serializeBalance(uint _time,uint _balance)internal returns(uint _time_balance){

        return _time*uint128(-1)+_balance;

    }

    function parseBalance(uint _time_balance)internal returns(uint _time,uint _balance){

        uint Max128=uint128(-1);
        uint t_balance=_time_balance%Max128;
        uint t_time=(_time_balance-_balance)/Max128;
        return (t_time,t_balance);

    }
    // just return balance
    function parseBalance2(uint _time_balance)internal returns(uint _balance){

        uint Max128=uint128(-1);
        return _time_balance%Max128;
    }

    function transfer(address _to, uint256 _amount)  returns (bool success) {

        ifEnd();
        ifFreeze();
        normal();
        if (parseBalance2(m_balances[msg.sender]) >= _amount && _amount > 0) {
            m_balances[msg.sender] -= _amount;
            m_balances[_to] += _amount;
            if(m_AuxStatus==uint(AuxStatus.Dividend)){
                //补码
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
        if (parseBalance2(m_balances[tx.origin]) >= _amount && _amount > 0) {
            m_balances[tx.origin] -= _amount;
            m_balances[_to] += _amount;
            if(m_AuxStatus==2){
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

    function balanceOf(address _owner) constant returns (uint256 balance){
        uint t_balance;
        uint t_time;
        (t_time,t_balance)=parseBalance(m_balances[_owner]);
        return t_balance;
    }

    function getDividend(uint _no)constant returns (uint t_no,uint _start,uint _days,uint _totalAmount,uint _status,address _tokenAddress,address _executor,uint _implementedAmount,uint _dayNo,uint _limitedAmount,uint _interval){

        t_no=m_dividendHistory[_no].m_no;
        _start=m_dividendHistory[_no].m_start;
        _days=m_dividendHistory[_no].m_days;
        _totalAmount=m_dividendHistory[_no].m_totalAmount;
        _status=m_dividendHistory[_no].m_status;
        _tokenAddress=m_dividendHistory[_no].m_tokenAddress;
        _executor=m_dividendHistory[_no].m_executor;
        _implementedAmount=m_dividendHistory[_no].m_implementedAmount;
        _dayNo=m_dividendHistory[_no].m_dayNo;
        _limitedAmount=m_dividendHistory[_no].m_limitedAmount;
        _interval=m_dividendHistory[_no].m_interval;

        return;

    }

    function getImplement(uint _no,uint _dayNo)constant returns(uint _rate,uint _implementedAmount,uint _limitedAmount){

        _rate=m_dividendHistory[_no].m_detailPerInterval[_dayNo].m_rate;
        _implementedAmount=m_dividendHistory[_no].m_detailPerInterval[_dayNo].m_implementedAmount;
        _limitedAmount=m_dividendHistory[_no].m_detailPerInterval[_dayNo].m_limitedAmount;
        return;

    }

    function getRate(uint _no)constant returns(uint _rate){
        return m_dividendHistory[_no].m_detailPerInterval[m_dividendHistory[_no].m_dayNo].m_rate;
    }
}