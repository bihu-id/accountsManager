
import "LogicPorxy.sol";
contract Logic{
    LogicPorxy porxy;
    uint a;
    uint b;
    uint c;
    function set(uint _a,uint _b){
        a=_a;
        b=_b;
    }
    function addkey(uint _c){
        c=_c;
    }
    function add()constant returns(uint ){return a+b+c;}
}