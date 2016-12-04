import "Err.sol";
import "Account.sol";
import "BaseData.sol";

contract TxManager is BaseLogic {

    //use uint replace address to get high
    uint /*address*/ m_owner;
    //core address can reset owner
    uint /*address*/ m_core;

    /*
    modifier ifCore() {if(msg.sender != m_core)throw; _;}
    modifier ifOwner() {if(msg.sender != m_owner)throw; _;}
    */
    function ifCore() internal{if(uint(msg.sender) != m_core)         {Err(10000000);throw; }}
    function ifOwner()internal {if(uint(msg.sender) != m_owner)       {Err(10000000);throw; }}

    function init(){

        beforeInit()
        m_core=uint(msg.sender);
        uint[] memory t_res=new uint[](1);
        t_res[0]=m_core;
        afterInit(t_res);

    }

    function resetOwner(uint _newOwner){

        ifCore();
        m_owner=_newOwner;

    }

    function pass(uint _account,uint _hash){

        ifCore();
        Account t_account=Account(address(_account));
        t_account.setPass(_hash);

    }

    function resetCore(uint _newCore){

        ifCore();
        m_core=_newCore;

    }


    function summary()constant returns(uint _owner,uint _core){

        return(m_owner,m_core);

    }

}