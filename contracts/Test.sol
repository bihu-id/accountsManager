contract TestInterface{

    enum role{

        reSetRole,
        reSetRoleC

    }
    address a;
    address b;
    function set(address _a,role _role);
    function get()returns (address,address);
}
contract Test is TestInterface{

    function set(address _a,role _role){
        if(_role==role.reSetRole)
            a=_a;
        else
            b=_a;
    }
    function get()returns (address,address){
        return (a,b);
    }
}