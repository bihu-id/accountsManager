import "Account.sol";
import "SubManager.sol";

contract TxManager is SubManager {

    //use uint replace address to get high
    uint /*address*/ m_owner;

    function TxManager()BaseData(uint(msg.sender)){}

    function init(){

        beforeInit();
        m_core=uint(msg.sender);
        uint[] memory t_res=new uint[](1);
        t_res[0]=m_core;
        afterInit(t_res);

    }

    function pass(uint _account,uint _hash,uint _other){

        onlyKey(2);
        Account t_account=Account(address(_account));
        t_account.setPass(_hash,_other);

    }

    function summary()constant returns(uint _owner,uint _core){

        return(m_owner,m_core);

    }

    function resetCore(uint _newCore){}
}