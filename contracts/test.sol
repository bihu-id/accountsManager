contract test{
    uint x;
    uint y;
    event Set(uint x);
    function get()returns(uint ){return x;}
    function set(uint _x){
        Set(x);
    }
}