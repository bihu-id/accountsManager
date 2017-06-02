import "./base/BaseData.sol";
import "./interface/ParkingCreatorInterface.sol";
import "./Parking.sol";
import "./base/Data.sol";
import "./interface/TokenManagerInterface.sol";
import "./base/SubManager.sol";

contract ParkingCreator is SubManager{

    uint m_symbolNo;
    uint m_owner;

    function ParkingCreator()BaseData(uint(msg.sender)){}


    function init(uint _core,uint _resetKey,uint _resetKeyC, uint _owner,uint _manager,uint _logicProxy){

        beforeInit();
        BaseInit();
        m_keys[0]=_core;
        m_keys[1]=_resetKey;
        m_keys[2]=_resetKeyC;
        m_keys[3]=0;

        initOption(0,4);// keys amounts
        initOption(1,4);// options amounts
        initOption(2,_manager);// tokenManager address
        initOption(3,_logicProxy);

        uint base=0x30303030303030303030303030303030;
        uint app=1;
        uint no=0;
        m_symbolNo=(base<<6+app)<<10+no;

        uint[] memory t_res=new uint[](6);

        t_res[0]=m_keys[0];
        t_res[1]=m_keys[1];
        t_res[2]=m_keys[2];
        t_res[3]=m_keys[3];
        t_res[4]=getOption(2);
        t_res[5]=getOption(3);

        afterInit(t_res);

    }

    function createParking(uint _noInSystem,address _system,string _name,uint _spaceAmount,uint _closingTime,uint _hash){

        address _manager=address(getOption(2));
        address _logicProxy=address(getOption(3));

        Data d = new Data(uint(_logicProxy));
        if(d==address(0x0))
            throwErrEvent(60032001);
        //CreateParkingData(d);

        Parking p=Parking(d);

        m_symbolNo++;

        TokenManagerInterface tm=TokenManagerInterface(_manager);
        uint _id=tm.getTokenAmounts()+1;

        if(!p.initParking(msg.sender,_noInSystem,_system,_name,_spaceAmount))
            throwErrEvent(60032002);
        p.initB(msg.sender,bytes32(m_symbolNo),_id,_closingTime,_name,_hash,_manager);
        tm.registerToken(bytes32(m_symbolNo),d);

    }


    function version()constant returns(string _versionString){
        return "ParkingCreator-t-0.01";
    }
}