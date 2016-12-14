import "Error.sol";

//数据合约必须继承这个类,不能更改这个类,如果更改会导致合约读取数据错误,
contract BaseData is Error{

    // use uint256 to void compiler merge several variable destroy store structure when add new variable when contract upgrade
    uint  porxy;
    uint  inited;
    uint  m_initor;
    uint  m_core;//base core of data contract , can init contract ,can reset m_onwer;
    //uint  m_owner; //can set option of contract;

    function BaseData(uint _porxy){

        porxy=_porxy;
        m_initor=uint(msg.sender);

    }
}
//逻辑合约必须继承这个类,不能轻易更改这个类,如果更改会导致合约读取数据错误,必须严格检查编译器版本,防止编译器优化掉变量porxy;
contract BaseLogic is BaseData{

    event Init(uint[] _res);
    event ResetCore(uint _old,uint _new);
    event ResetOwner(uint _old,uint _new);
    event Success(bool _ok);

    function checKey(uint _key)internal{
        if(uint(msg.sender)!=_key)                                      {Err(10000000);throw; }
    }

    function beforeInit()internal{

        if(inited==1)                               {Err(10000004);throw;}
        if(uint(msg.sender)!=m_initor)              {Err(10000005);throw;}

    }

    function afterInit(uint[] _res)internal{

        inited=1;
        Init(_res);

    }

    //##resetCore 300000 0
    function ifCore()internal {checKey(m_core);}

    function resetCore(uint _newCore){

        ifCore();
        uint t_old=m_core;
        m_core=_newCore;
        ResetCore(t_old,_newCore);

    }

    /*function resetOwner(uint _newOwner){

        ifCore();
        uint t_old=m_owner;
        m_owner=_newOwner;
        ResetOwner(t_old,_newOwner);

    }*/
    // notice data address cannot use ContracName() to init parameter

}