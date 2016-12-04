
contract LogicPorxy{

    struct FunDetail{
        uint m_logic;
        // retutn result size of function, 32/0x20 per parameter;
        uint m_resSize;
        // gas need to run this function
        uint m_gasNeed;
    }
    //address core and set the logic address and register function
    uint m_coreAddress;
    //address of logic contract
    uint m_logicAddress;
    //recode one data address, it only use for have one data contract like xindecontract ,accountManager contract
    uint m_dataAddress;
    mapping (uint =>FunDetail) public m_funs;

    event SetLogic(address _logic);

    event SetFun(uint _fun,uint _resSize ,uint _gasNeed);

    function LogicPorxy(){

        m_coreAddress=uint(msg.sender);

    }

    modifier onlyCore() {if (uint(msg.sender) != m_coreAddress) throw; _;}

    function setLogic(uint _logicAddress)onlyCore(){

        m_logicAddress=_logicAddress;
        SetLogic(address(_logicAddress));

    }

    function setfun(uint _logic,uint _fun,uint _resSize ,uint _gasNeed)onlyCore(){

        m_funs[_fun]=FunDetail(_logic,_resSize,_gasNeed);
        SetFun(_fun,_resSize,_gasNeed);

    }

    // do not change the function name and parameter ,because the sig of this function was hard wirte in Data contract,
    function get(uint _fun)returns(uint,uint,uint){

        //GetFun(_fun,address(m_funs[_fun].m_logic),m_funs[_fun].m_resSize,m_funs[_fun].m_gasNeed);
        return (m_funs[_fun].m_logic,m_funs[_fun].m_resSize,m_funs[_fun].m_gasNeed);

    }

    function summary()constant returns(uint,uint){

        return(m_coreAddress,m_logicAddress);

    }
}