import "Error.sol";

contract LogicPorxy is Error{

    struct FunDetail{
        uint m_logic;
        // retutn result size of function, 32/0x20 per parameter;
        uint m_resSize;
    }
    //address core and set the logic address and register function
    uint m_coreAddress;
    //address of owner
    uint m_ownerAddress;
    //recode one data address, it only use for have one data contract like xindecontract ,accountManager contract
    uint m_dataAddress;
    mapping (uint =>FunDetail) public m_funs;

    event SetFun(uint _fun,uint _resSize);

    function LogicPorxy(){

        m_coreAddress=uint(msg.sender);
        m_ownerAddress=uint(msg.sender);

    }

    function onlyCore()internal {

        if (uint(msg.sender) != m_coreAddress)  { Err(10000002);throw; }

    }

    function onlyOwner()internal {

        if (uint(msg.sender) != m_ownerAddress) { Err(10000003);throw; }

    }

    function resetCore(uint _newCore){

        onlyCore();
        m_coreAddress=_newCore;

    }

    function resetOwner(uint _newOwner){

        onlyCore();
        m_ownerAddress=_newOwner;

    }

    function setfun(uint _logic,uint _fun,uint _resSize ){

        m_ownerAddress;
        m_funs[_fun]=FunDetail(_logic,_resSize);
        SetFun(_fun,_resSize);

    }

    // do not change the function name and parameter ,because the sig of this function was hard wirte in Data contract,
    function get(uint _fun)returns(uint,uint){

        //GetFun(_fun,address(m_funs[_fun].m_logic),m_funs[_fun].m_resSize,m_funs[_fun].m_gasNeed);
        return (m_funs[_fun].m_logic,m_funs[_fun].m_resSize);

    }

    function summary()constant returns(uint,uint){

        return(m_coreAddress,m_ownerAddress);

    }
}