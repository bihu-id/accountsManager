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
    /// @notice set dividend by token creator ,would event Dividend if _success
    /// @param _tokenAddress    分红豆资产合约地址
    /// @param _start           分红开始UTC时间戳
    /// @param _days            分红天数
    /// @param _totalAmount     总分红量,由于四舍五入的差别,实际分红量会稍微高于或者低于_totalAmount
    /// @param _executor        分红执行者,一般由Andui指定
    /// @return _success true if success else false
    function setDividend(address _tokenAddress,uint _start ,uint _days,uint _totalAmount,address _executor)returns(bool _success);

    /// @notice revoke Dividend
    /// @param _no dividend No.
    function revokeDividend(uint _no)returns(bool _success);

    /// @notice set start dividend each cycle (per day) called by executor;
    /// @param _no dividend No.
    function startDividend(uint _no);

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
    /// @param _days            分红天数
    /// @param _totalAmount     总分红量,由于四舍五入的差别,实际分红量会稍微高于或者低于_totalAmount
    /// @param _executor        分红执行者,一般由Andui指定
    event SetDividend(uint _no,address _tokenAddress,uint _start ,uint _days,uint _totalAmount,address _executor);

    event RevokeDividend(uint _no);
}
