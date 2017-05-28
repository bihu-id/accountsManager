import "./BaseData.sol";
import "./ParkingCreatorInterface.sol";
import "./Parking.sol";

contract ParkingCreator is BaseLogic,ParkingCreatorInterface{

    uint m_currentNo;

    function createParking(uint _noInSystem,address _system,string _name,uint _spaceAmount,address _manager ,uint _closingTime,address _logicProxy){

        Data d = new Data(uint(_logicProxy));
        if(d==address(0x0))
            throwErrEvent(60032001);
        CreateParkingData(d);

        Parking p=Parking(d);
        bytes32 _symbol=0x0000000;//todo

        TokenManager tm=TokenManager(_manager);

        uint _id=tm.getTokenAmounts()+1;
        if(!p.initParking(msg.sender,_symbol,_id,1,0,1,_closingTime,_name,_hash,_manager,_noInSystem,_system,_name,_spaceAmount))
            throwErrEvent(60032002);
        tm.registerToken(_symbol,d);
    }
}

