contract TestInterface{


    uint a;
    uint b;
    mapping (uint=>uint ) m;
    mapping (uint=>uint ) m1;
    uint [] x;

    uint l;

}
contract Test is TestInterface{

    function get()constant returns(uint){
        return l;
    }
    function set(uint _n,uint _value){
        m[++l]=_value;
        m1[l]=_value;
    }
    function getm(uint _n)constant returns(uint){
        return m1[_n];
    }
}