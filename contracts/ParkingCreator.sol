import "./BaseData.sol";
import "./ParkingCreatorInterface.sol";
import "./Parking.sol";
import "./Data.sol";
import "./TokenManager.sol";
import "./Parking.sol";

contract ParkingCreator is BaseLogic,ParkingCreatorInterface{

    uint m_symbolNo;
    function init(){

        // 0000000000000000 000001
        uint base=0x30303030303030303030303030303030;
        uint app=1;
        uint no=0;
        m_symbolNo=(base<<6+000000000001)<<10+no;
    }

    function createParking(uint _noInSystem,address _system,string _name,uint _spaceAmount,address _manager ,uint _closingTime,uint _hash,address _logicProxy)returns (bool _success){
        Data d = new Data(uint(_logicProxy));
        if(d==address(0x0))
            throwErrEvent(60032001);
        CreateParkingData(d);

        Parking p=Parking(d);

        m_symbolNo++;

        bytes32 _symbol=bytes32(m_symbolNo);

        TokenManager tm=TokenManager(_manager);

        uint _id=tm.getTokenAmounts()+1;
        if(!p.initParking(msg.sender,_symbol,_id,_closingTime,_name,_hash,_manager,_noInSystem,_system,_name,_spaceAmount))
            throwErrEvent(60032002);
        tm.registerToken(_symbol,d);
        return true;
    }


}

