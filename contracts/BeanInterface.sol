import "BaseSToken.sol";

contract BeanInterface is BaseSToken{

    event Dividends(uint [] _allAmount);
    /// @notice transfers
    /// @param _tos             接受者地址数组
    /// @param _amounts         发送数量数组(乘精度后)
    /// @param _totalAmount     总发送数量 _amounts总数
    function dividends(address[] _tos, uint256[] _amounts,uint _totalAmount)  returns (bool success);

    function issueMoreTo(uint _amounts,address _to)returns (bool success);
}