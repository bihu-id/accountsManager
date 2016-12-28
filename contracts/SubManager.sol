import "BaseData.sol";
import "Data.sol";

contract BaseOption is BaseLogic{

    enum Role{
        coreRole,
        optionRole,                         //reset by Superior ,set the option of this contract
        optionRoleC,                        //reset by Superior ,confirm the options of this contract
        ownerRole                           //do operation do not need confirm like create account ..
    }

    mapping (uint=>uint)    m_keys;

    //leg=>m_options
    //options[0]:keys amounts
    //options[1]:option amounts
    //options[2++]:other options
    mapping(uint=>mapping(uint=>uint)) m_options;

    uint m_leg;

    bool m_haveWait;
    event ResetOption(uint _key,uint _value);

    function BaseInit()internal{

        m_leg=0;

    }

    function initOption(uint _no,uint _value)internal{

        m_options[m_leg][_no]=_value;

    }
    function getOption(uint _no)internal returns(uint){

        return m_options[m_leg][_no];

    }

    //请求批准参数测试
    function requestConfirm(){

        onlyKey(0);
        m_haveWait=true;

    }

    function confirm(){

        onlyKey(1);
        if(!m_haveWait)                                 {throwErr(60000002);    }
        m_leg=changeLeg(m_leg);
        m_haveWait=false;

    }

    function onlyKey(uint _no)internal {

        if (uint(msg.sender) != m_keys[_no])            {throwErr(10000002);    }

    }

    function changeLeg(uint _leg) internal returns(uint){return (_leg+1)%2;}

    function resetOption(uint _key,uint _value){

        onlyKey(1);
        if(_key<=0)                                 {                   }
        uint nextLeg=changeLeg(m_leg);
        if(_key>m_options[nextLeg][1])              {                   }
        if(m_options[nextLeg][1]==_key)
            m_options[nextLeg][1]=_key+1;
        for(uint i=0;i<m_options[m_leg][1];i++)
            m_options[nextLeg][i]=m_options[m_leg][i];
        m_options[nextLeg][_key]=_value;
        ResetOption(_key,m_options[nextLeg][_key]);

    }

    function _getOptions(uint _leg) internal returns(uint [] _res){

        uint t_size=m_options[_leg][1];
        uint[] memory res=new uint[](t_size);
        for(uint i=0;i<t_size;i++)
            res[i]=m_options[_leg][i];
        return res;

    }

    function getOptions() constant returns(uint[] _res){

        return _getOptions(m_leg);

    }

    function getOptionsWait() constant returns(uint[] _res){

        return _getOptions(changeLeg(m_leg));

    }

}
contract SubManager is BaseOption{

    event ResetOption(uint _key,uint _value);

    function resetKey(uint _role,uint _key){

        onlyKey(0);
        m_keys[_role]=_key;
    }

    function getKeys()constant returns(address[] _keys){

        uint t_size=m_options[m_leg][0];
        address[] memory res=new address[](t_size);
            for(uint i=0;i<t_size;i++)
                res[i]=address(m_keys[i]);
        return res;

    }

}