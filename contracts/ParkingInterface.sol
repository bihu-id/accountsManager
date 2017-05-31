contract ParkingInterface{

    function initParking(
        address _issuer,
        bytes32 _symbol,
        uint _id,
        /*
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        */
        uint  _closingTime,
        string _description,
        uint _hash,
        address _manager,
        uint _noInSystem,
        address _system,
        string _name,
        uint _spaceAmount)
        returns(bool _success);

}