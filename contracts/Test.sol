contract TestInterface{


    uint[] a;
    event Log(uint []);
}
contract Test is TestInterface{

    function get()constant returns(uint[]){
        Log(a);
        return a;
    }
    function set(uint[] _n){
        //Log(a);
        a=_n;

    }
}