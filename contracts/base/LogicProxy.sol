import "./BaseEvent.sol";

contract LogicProxy is BaseEvent{

    struct FunDetail{
        uint m_logic;
        // retutn result size of function, 32/0x20 per parameter;
        uint m_resSize;
    }

    enum Keys{

        m_A,   //contract update key                0
        m_AC,  //contract update confirm key        1
        m_T,   //reset keys key                     2
        m_TC   //reset keys confirm key             3

    }

    //Type  0:Fun,1:key

    //Leg=>(Keys=>address)
    mapping(uint=>mapping(uint=>uint))    m_key;

    //Leg=>(funSig=>FunDetail)
    mapping (uint=>mapping(uint =>FunDetail))  m_funs;

    //Type=>bool
    mapping(uint=>bool) m_haveWait;

    //Type=>Leg 0:left 1:right
    mapping(uint=>uint) m_leg;

    event SetFun(uint _fun,uint _resSize);

    function requestConfirm(uint _type)returns (bool success){

        onlyKey(_type*2);//fun:m_A,key:m_T
        m_haveWait[_type]=true;
        return true;

    }

    function confirm(uint _type)returns (bool success){

        onlyKey(_type*2+1);//fun:m_AC,key:m_TC
        if(!m_haveWait[_type])              {throwErrEvent(60000002);    }
        m_leg[_type]=(m_leg[_type]+1)%2;
        m_haveWait[_type]=false;
        return true;

    }

    function LogicProxy(){

        //init leg is left
        m_key[0][0]=uint(msg.sender);    //m_key[leg][m_A]=uint(msg.sender)
        m_key[0][1]=uint(msg.sender);
        m_key[0][2]=uint(msg.sender);
        m_key[0][3]=uint(msg.sender);
        m_leg[0]=0;     //m_leg[fun]=left
        m_leg[1]=0;     //m_leg[key]=left

    }

    function checKey(uint _key)internal{

        if (uint(msg.sender) != _key)       {throwErrEvent(10000002);    }

    }

    //internal interface to check key
    function onlyKey(uint _no)internal {

        checKey(m_key[m_leg[1]][_no]);

    }

    function changeLeg(uint _leg) internal returns(uint){return (_leg+1)%2;}

    function resetKey(uint _no,uint _newKey)returns (bool success){

        onlyKey(2);//m_T
        uint t_leg=m_leg[1];
        uint t_legc=changeLeg(t_leg);

        //copy keys of  current leg key to next leg
        m_key[t_legc][0]=m_key[t_leg][0];
        m_key[t_legc][1]=m_key[t_leg][1];
        m_key[t_legc][2]=m_key[t_leg][2];
        m_key[t_legc][3]=m_key[t_leg][3];
        //set key
        m_key[t_legc][_no]=_newKey;
        return true;

    }

    // do not copy funs of current leg to next leg, so all functions should update even update one function.
    function setfun(uint _logic,uint _fun,uint _resSize )returns (bool success){

        onlyKey(0);//m_A
        m_funs[changeLeg(m_leg[0])][_fun]=FunDetail(_logic,_resSize);
        SetFun(_fun,_resSize);
        return true;

    }

    function get_(uint _leg,uint _fun)internal returns(uint,uint){

        return (m_funs[_leg][_fun].m_logic,m_funs[_leg][_fun].m_resSize);

    }

    // do not change the function name and parameter ,because the sig of this function was hard wirte in Data contract,
    function get(uint _fun)constant returns(uint _address,uint _returnSize){

        uint t_address;
        uint t_returnSize;
        (t_address,t_returnSize)=get_(m_leg[0],_fun);
        if(t_address==0x0)
            throwErrEvent(12000002);
        return (t_address,t_returnSize);

    }

    function getWait(uint _fun)constant returns(uint _address,uint _returnSize){

        return get_(changeLeg(m_leg[0]),_fun);

    }

    function getkeys_(uint _leg)internal returns (address A,address AC,address T,address TC){

        //int t_leg=t_leg;
        return(
                address(m_key[_leg][0]),
                address(m_key[_leg][1]),
                address(m_key[_leg][2]),
                address(m_key[_leg][3])
        );
    }
    function getKeys()constant returns(address A,address AC,address T,address TC){

        return getkeys_(m_leg[1]);

    }

    function getWaitKeys()constant returns(address A,address AC,address T,address TC){

        return getkeys_(changeLeg(m_leg[1]));

    }
}