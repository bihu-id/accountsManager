import "Error.sol";

//数据合约必须继承这个类,不能更改这个类,如果更改会导致合约读取数据错误,
contract BaseData is Error{

    // use type uint256/uint to void compiler merge several variables destroy store structure ,it would make error when contract upgrade with addtional variable
    // use uint replace address type to make contract more simple
    uint  porxy;
    uint  inited;
    uint  m_initor;
    uint  m_core;//base core of data contract , can init contract ,can reset m_onwer;

    function BaseData(uint _porxy){

        porxy=_porxy;
        m_initor=uint(msg.sender);

    }
}
//逻辑合约必须继承这个类,不能轻易更改这个类,如果更改会导致合约读取数据错误,
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