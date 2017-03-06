BeanInterface{

    events Transfers(address _from ,uint _allAmount);
    function transfers(address[] _tos, uint256[] _amounts,uint _totalAmount)  returns (bool success);
}