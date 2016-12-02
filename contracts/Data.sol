import "BaseData.sol";

contract Data is BaseLogic{

    function Data(uint _porxy){
        porxy=_porxy;
    }

    //TODO  check sha3 function would cover memory 0x00~0x60 ?
    function(){
        assembly {
            //start memory from 0x100
            //store fun sig 0x120~0x13F of memery
            //0x120:start from 0x120 of memery
            //0x9507d39a is the function of LogicPorxy.get()  do not change the function name "get" of contract logicporxy.
            mstore(0x120,0x9507d39a)

            //store fun sig 4 Bityes to memery 0x15C~0x15F,mem start 0x120 ( can release memery 0x120~0x15F )
            calldatacopy(0x15C,0x0,0x04)


            //call LogicPorxy.get() to get the logic address and fun return result size
            //call(g, a, v, in, insize, out, outsize)
            //100000: call gas
            //sload(0x0):logicPorxy address is stored with key 0x0,notice sload derectly to stake ,so do not use memery
            //callvalue: call value
            //0x13c:call data start from 0x13c
            //0x124:call data size  notice : 0x6d4ce63c+fun sig is store from 0x13c~0x160 in memery
            //0x120:call return from 0x120
            //0x160:call return size
            //return the logic address is stored on memery from 0x120~0x13F,
            //return fun return result size is stored on memery from 0x140~0x15F,
            //return fun call gas need  is stored on memery from 0x160~0x17F,
            //mem free start 0x180
            call(100000,sload(0x0),callvalue,0x13c, 0x124, 0x120, 0x160)

            //copy call data to memery
            //0x180:copy data to memery start 0x180
            //0x0: copy data from 0x of data
            //codesize:copy codesize from data to memery
            //call data is stored on memery from 0x180 to 0x180+codesize ,
            calldatacopy(0x180,0x0,calldatasize)

            //delegate logic contract
            //delegatecall(gas, address, in, insize, out, outsize)
            //mload(0x160):call gas
            //mload(0x120):load delegatecall address from 0x120 to 0x13F of memery
            //0x180:call data from 0x180 of memery
            //calldatasize:call data size ,notice call data is stored on memery from 0x180 to 0x180+calldatasize
            //but free mem start from 0x160(can release mem from 0x160)
            //0x160:delegatecall return result would been store on memery from 0x160
            //mload(0x140):delegatecall return result size from x0140~0x15F of memery

            //jumpi jumpi to 0x02 if ~delegatecall ,0x02 is not a jumpdest so throw;

            jumpi(0x02,iszero(delegatecall(mload(0x160), mload(0x120), 0x180, calldatasize, 0x160, mload(0x140))))

            //return result from 0x160~0x160+returnSize ,and result Size is store from 0x40~0x5F on memery
            return(0x160, mload(0x140))

        }
    }