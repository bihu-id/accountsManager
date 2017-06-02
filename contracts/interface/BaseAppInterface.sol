contract BaseAppInterface{
    /// @notice change owner of contract(app)
    function changeOwner(address _newOwner)returns(bool _success);

}