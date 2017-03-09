contract Test{
    uint x;
    uint y;
    event Set(uint x);
    function Test(uint _x){x=_x;}
    function get()returns(uint ){return x;}
    function set(uint _x){
        Set(x);
    }
}