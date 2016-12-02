contract BaseData{
    uint  porxy;
    uint c;

}

//notice do not change any code of this contract.
contract Data1 is BaseData{

    //LogicPorxy porxy;
    function Data(uint _porxy){
        porxy=_porxy;
    }

}
contract Test is BaseData{

    mapping(uint=>uint) a;
    mapping(uint=>uint) b;
    function Data(uint _porxy){
        a[_porxy]=_porxy;
        b[_porxy]=_porxy;
    }
}