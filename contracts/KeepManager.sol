contract KeepManager{
    // _type : 1 add keep ,2 delete keep ,3,change core
    // _address : add/delete address, or core address
    // blockno : effect block no  absolutely
    function set(uint _type,uint _address,uint blockno);


}