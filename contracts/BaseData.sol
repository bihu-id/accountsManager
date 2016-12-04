import "Err.sol";

//数据合约必须继承这个类,不能更改这个类,如果更改会导致合约读取数据错误,
contract BaseData{
    uint  porxy;
    uint  inited;
}
//逻辑合约必须继承这个类,不能更改这个类,如果更改会导致合约读取数据错误,必须严格检查编译器版本,防止编译器优化掉变量porxy;
contract BaseLogic is BaseData{

    event Init(uint[] _res);

    function notuse(uint x)internal {

        porxy=x;
        
    }
    function beforeInit()internal{

        if(inited==1)           {Err(10000001);throw;}

    }

    function afterInit(uint[] _res)internal{

        inited==1;
        Init(_res);

    }
    // notice data address cannot use ContracName() to init parameter

}