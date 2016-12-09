import "Error.sol";

contract LogicProxy is Error{

    struct FunDetail{
        uint m_logic;
        // retutn result size of function, 32/0x20 per parameter;
        uint m_resSize;
    }

    enum Keys{

        m_A,   //contract update key                0
        m_AC,  //contract update comfirm key        1
        m_T,   //reset keys key                     2
        m_TC  //reset keys comfirm key              3

    }

    //Type  0:Fun,1:key

    //Type=>(Keys=>address)
    mapping(uint=>mapping(uint=>uint))    m_key;

    //Type=>(funSig=>FunDetail)
    mapping (uint=>mapping(uint =>FunDetail))  m_funs;

    //Type=>bool
    mapping(uint=>bool) m_haveWait;

    //Type=>Leg 0:left 1:right
    mapping(uint=>uint) m_leg;

    event SetFun(uint _fun,uint _resSize);

    function requestComfirm(uint _type){

        onlyKey(_type*2);
        m_haveWait[_type]=true;

    }

    function comfirm(uint _type){

        onlyKey(_type*2+1);
        if(!m_haveWait[_type])          { Err(60000002);throw; }
        m_leg[_type]=(m_leg[_type]+1)%2;
        m_haveWait[_type]=false;

    }

    function LogicProxy(){

        m_key[0][0]=uint(msg.sender);    //
        m_key[0][1]=uint(msg.sender);
        m_key[0][2]=uint(msg.sender);
        m_key[0][3]=uint(msg.sender);
        m_leg[0]=0;
        m_leg[1]=0;

    }

    function checKey(uint _key)internal{

        if (uint(msg.sender) != _key)  { Err(10000002);throw; }

    }

    function onlyKey(uint _no)internal {

        checKey(m_key[m_leg[1]][_no]);

    }

    function changeLeg(uint _leg) internal returns(uint){return (_leg+1)%2;}
    function resetKey(uint _no,uint _newKey){

        onlyKey(2);
        uint t_leg=m_leg[1];
        uint t_legc=changeLeg(t_leg);

        m_key[t_legc][0]=m_key[t_leg][0];
        m_key[t_legc][1]=m_key[t_leg][1];
        m_key[t_legc][2]=m_key[t_leg][2];
        m_key[t_legc][3]=m_key[t_leg][3];
        m_key[t_legc][_no]=_newKey;

    }

    function setfun(uint _logic,uint _fun,uint _resSize ){

        onlyKey(0);
        m_funs[changeLeg(m_leg[0])][_fun]=FunDetail(_logic,_resSize);
        SetFun(_fun,_resSize);

    }

    // do not change the function name and parameter ,because the sig of this function was hard wirte in Data contract,
    function get_(uint _leg,uint _fun)internal returns(uint,uint){

        return (m_funs[_leg][_fun].m_logic,m_funs[_leg][_fun].m_resSize);

    }

    function get(uint _fun)constant returns(uint,uint){

        return get_(m_leg[0],_fun);

    }

    function getWait(uint _fun)constant returns(uint,uint){

        return get_(changeLeg(m_leg[0]),_fun);

    }

    function getkey(uint _leg)internal returns (address A,address AC,address T,address TC){

        //int t_leg=t_leg;
        return(
                address(m_key[_leg][0]),
                address(m_key[_leg][1]),
                address(m_key[_leg][2]),
                address(m_key[_leg][3])
        );
    }
    function getKeys()constant returns(address A,address AC,address T,address TC){

        return getkey(m_leg[1]);

    }

    function getWaitKeys()constant returns(address A,address AC,address T,address TC){

        return getkey(changeLeg(m_leg[1]));

    }
}