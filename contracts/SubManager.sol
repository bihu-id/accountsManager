import "BaseData.sol";

contract BaseOption is BaseLogic{

    //0:option setting key                  reset by Superior ,set the option of this contract
    //1:option setting comfirm key          reset by Superior ,comfirm the options of this contract
    //2++:owner                               do operation do not need comfirm like create account ..
    mapping (uint=>uint)    m_keys;

    mapping(uint=>mapping(uint=>uint)) m_options;

    //leg=>optionAmounts
    mapping(uint=>uint) m_optionAmounts;
    uint m_leg;

    bool m_haveWait;
    event ResetOption(uint _key,uint _value);

    function BaseInit(){

        m_leg=0;
        m_optionAmounts[0]=0;
        m_optionAmounts[1]=0;

    }

    function requestComfirm(){

        onlyKey(0);
        m_haveWait=true;

    }

    function comfirm(){

        onlyKey(1);
        if(!m_haveWait)                                 { Err(60000002);    throw; }
        m_leg=changeLeg(m_leg);
        m_haveWait=false;

    }

    function onlyKey(uint _no)internal {

        if (uint(msg.sender) != m_keys[_no])            { Err(10000002);    throw; }

    }

    function changeLeg(uint _leg) internal returns(uint){return (_leg+1)%2;}

    function resetOption(uint _key,uint _value){

        onlyKey(1);
        uint nextLeg=changeLeg(m_leg);
        if(_key>m_optionAmounts[nextLeg])           {                   throw; }
        if(m_optionAmounts[nextLeg]==_key)
            m_optionAmounts[nextLeg]=_key+1;
        for(uint i=0;i<m_optionAmounts[m_leg];i++)
            m_options[nextLeg][i]=m_options[m_leg][i];
        m_options[nextLeg][_key]=_value;
        ResetOption(_key,m_options[nextLeg][_key]);

    }

    function _getOptions(uint _leg) internal returns(uint [] _res){

        uint t_size=m_optionAmounts[_leg];
        uint[] memory res=new uint[](t_size);
        for(uint i=0;i<m_optionAmounts[_leg];i++)
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

    function subInit(uint _setKey,uint _setKeyC,uint _owner) internal{

        m_keys[0]=_setKey;
        m_keys[1]=_setKeyC;
        m_keys[2]=_owner;

        BaseInit();
    }

    function resetKey(uint _role,uint _key){

        ifCore();
        m_keys[_role]=_key;
    }

    function getKeys()constant returns(address,address,address){
        return(address(m_keys[0]),address(m_keys[1]),address(m_keys[2]));
    }

}