import "./Token.sol";
import "./ParkingInterface.sol";

contract Parking is Token,ParkingInterface{

    //No. of parking in Parking King
    uint m_noInSystem;

    //address of Parking system
    address m_system;

    //name
    string m_name;

    // parking space amount
    uint   m_spaceAmount;

    uint[] m_spaces;

    //andui is manager
    address m_manager;

    address m_owner;

    function pay(uint _parkingNo,uint _spaceNo,uint _localNo,uint _onValue,uint _offValue){

    }

    function initParking(
            address _issuer,
            bytes32 _symbol,
            uint _id,
            uint _maxSupply,
            uint _precision,
            uint _currentSupply,
            uint  _closingTime,
            string _description,
            uint _hash,
            uint _noInSystem,
            address _system,
            string _name,
            uint _spaceAmount){

        beforeInit();
        m_noInSystem=_noInSystem;
        m_system=_system;
        m_name=_name;
        m_spaceAmount=_spaceAmount;
        m_owner=_issuer;

        init(_issuer,_symbol,_id,_maxSupply,_precision,_currentSupply,_closingTime,_description,_hash);

    }

}