//分红合约资产最大精度 h128, 前128位纪录辅助状态,后128位纪录余额
contract DividendTokenInterface {

    struct Dividend{

        uint m_no;

        uint m_start;

        uint m_days;

        uint m_totalAmount;

        //DividendStatus ,since solidity consider Enum as uint8,then merge with other variable to store
        //that may cause data error when contract logic update so use uint replace Enum
        uint m_status;

        address m_tokenAddress;

        address m_executor;

        // implemented dividend amount,
        uint m_implementedAmount;

        uint m_dayNo;
        //每天调用开始分红函数之后,会设定能分红豆的上限,
        uint m_limitedAmount;

        //分红间隔
        uint m_interval;

    }

    enum AuxStatus{

        EnumZero,
        Normal,
        Dividend

    }

    enum DividendStatus{

        EnumZero,
        Set,
        Start,
        End,
        Revoke

    }
    /// @notice set dividend by token creator ,would event Dividend if _success,并且确定分红持有依据
    /// @param _tokenAddress    分红豆资产合约地址
    /// @param _start           分红开始UTC时间戳
    /// @param _interval        分红间隔
    /// @param _times           分红次数
    /// @param _totalAmount     总分红量,由于四舍五入的差别,实际分红量会稍微高于或者低于_totalAmount
    /// @param _executor        分红执行者,一般由Andui指定
    /// @return _success true if success else false
    function setDividend(address _tokenAddress,uint _start ,uint _interval,uint _times,uint _totalAmount,address _executor)returns(bool _success);

    /// @notice revoke Dividend
    /// @param _no dividend No.
    function revokeDividend(uint _no)returns(bool _success);

    /// @notice set start dividend each cycle (per day) called by executor;
    /// @param _no dividend No.
    function startDividend(uint _no);

    /// @notice 补发最近一次分红,
    function reissueStartDividend(uint _no,uint _dayNo);

    /// @notice execute dividend called by executor,usually executor would call many times per cycle
    /// @param _no dividend No.
    /// @param _holders 资产持有者数组
    function executeDividend(uint _no,address [] _holders);

    /// @notice end dividend called by executor
    /// @param _no dividend No.
    function endDividend(uint _no);

    /// @notice
    /// @param _no              分红编号
    /// @param _tokenAddress    分红豆资产合约地址
    /// @param _start           分红开始UTC时间戳
    /// @param _interval        分红间隔
    /// @param _times           分红次数
    /// @param _totalAmount     总分红量,由于四舍五入的差别,实际分红量会稍微高于或者低于_totalAmount
    /// @param _executor        分红执行者,一般由Andui指定
    event SetDividend(uint _no,address _tokenAddress,uint _start ,uint _interval,uint _times,uint _totalAmount,address _executor);

    /// @notice
    /// @param _no              撤销分红分红编号
    /// @param _implementedAmount    已经完成分红量
    event RevokeDividend(uint _no,uint _implementedAmount);

    event StartDividend(uint _no);

    event EndDividend(uint _no);

    event ReissueStartDividend(uint _no,uint _dayNo);
}
