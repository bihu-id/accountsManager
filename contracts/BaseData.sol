import "BaseEvent.sol";

//数据合约必须继承这个类,不能更改这个类,如果更改会导致合约读取数据错误,
contract BaseData is BaseEvent{

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

    function checKey(uint _key)internal{
        if(uint(msg.sender)!=_key)                                      { throwErrEvent(10000000);  }
    }

    function beforeInit()internal{

        if(inited==1)                               { throwErrEvent(10000004); }
        if(uint(msg.sender)!=m_initor)              { throwErrEvent(10000005); }

    }

    function afterInit(uint[] _res)internal{

        inited=1;
        Init(_res);

    }

}