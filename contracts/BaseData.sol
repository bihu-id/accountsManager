import "./BaseEvent.sol";

//数据合约必须继承这个类,不能更改这个类,如果更改会导致合约读取数据错误,
//data contract must inherit  this base contract, c
contract BaseData is BaseEvent{

    // use type uint256/uint to void compiler merge several variables destroy store structure ,it would make error when contract upgrade with addtional variable
    // use uint replace address type to make contract more simple
    uint  porxy;        //0x0
    uint  inited;       //0x1
    uint  m_initor;     //0x2       can init contract ,also as the real core of contract
    uint  m_core;       //0x3       if 1 mean data if 0 mean logic default

    function BaseData(uint _porxy){

        porxy=_porxy;
        m_initor=uint(msg.sender);
        m_core=1;

    }
}
//逻辑合约必须继承这个类,不能轻易更改这个类,如果更改会导致合约读取数据错误,
//logic contract must inherit this contract ,do not change this contract .
//todo  logic contract also can store data ,attacker can call logic contract to store many data ,
//but it is not a bug problem , though logic contract store mass of data , it does not increase
//the time cost of read code of contract .

contract BaseLogic is BaseData{

    event Init(uint[] _res);
    event ResetCore(uint _old,uint _new);
    event ResetOwner(uint _old,uint _new);

    function checKey(uint _key)internal{
        if(uint(msg.sender)!=_key)                                      { throwErrEvent(10000000);  }
    }

    function beforeInit()internal{

        if(inited==1)                                                   { throwErrEvent(10000004); }
        if(uint(msg.sender)!=m_initor)                                  { throwErrEvent(10000005); }

    }

    function afterInit(uint[] _res)internal{

        inited=1;
        Init(_res);

    }

    function version()constant returns(string _versionString){
        return "V000";
    }
}