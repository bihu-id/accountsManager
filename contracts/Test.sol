contract TestInterface{


    uint a;
    uint b;
    mapping (uint=>uint ) m;
    mapping (uint=>uint ) m1;
    uint [] x;

    uint l;

}
contract Test is TestInterface{

    function get()constant returns(uint[]){
        return x;
    }
    function set(uint[] _n){
        uint[] memory t_x=new uint[](_n.length);
        for (uint i=0;i<_n.length;i++)
            t_x[i]=_n[i]*10;
        e(t_x);

    }
    function e(uint [] _x)internal {
        x=_x;
    }


}