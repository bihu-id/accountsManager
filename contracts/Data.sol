import "BaseData.sol";

contract Data is BaseLogic{

    function Data(uint _porxy){

        porxy=_porxy;
        m_initor=uint(msg.sender);

    }

    //TODO  check sha3 function would cover memory 0x00~0x60 ?
    function(){
        assembly {
            //store fun sig 0x20~0x3F of memery
            //0x20:start from 0x20 of memery
            //0x2801617e is the function of LogicProxy.get()  do not change the function name "get" of contract LogicProxy.
            mstore(0x20,0x9507d39a)

            //store fun sig 4 Bityes to memery 0x5C~0x5F,mem start 0x20 ( can release memery 0x20~0x5F )
            calldatacopy(0x5C,0x0,0x04)


            //call LogicProxy.get() to get the logic address and fun return result size
            //call(g, a, v, in, insize, out, outsize)
            //gas: call gas
            //sload(0x0):LogicProxy address is stored with key 0x0,notice sload derectly to stake ,so do not use memery
            //callvalue: call value
            //0x3c:call data start from 0x3c
            //0x24:call data size  notice : 0x6d4ce63c+fun sig is store from 0x3c~0x60 in memery
            //0x20:call return from 0x20
            //0x40:call return size
            //return the logic address is stored on memery from 0x20~0x3F,
            //return fun return result size is stored on memery from 0x40~0x5F,
            //mem free start 0x80
            call(gas,sload(0x0),callvalue,0x3c, 0x24, 0x20, 0x40)

            //copy call data to memery
            //0x80:copy data to memery start 0x80
            //0x0: copy data from 0x of data
            //codesize:copy codesize from data to memery
            //call data is stored on memery from 0x80 to 0x80+codesize ,
            calldatacopy(0x80,0x0,calldatasize)

            //delegate logic contract
            //delegatecall(gas, address, in, insize, out, outsize)
            //mload(0x20):load delegatecall address from 0x20 to 0x3F of memery
            //0x80:call data from 0x80 of memery
            //calldatasize:call data size ,notice call data is stored on memery from 0x80 to 0x80+calldatasize
            //but free mem start from 0x60(can release mem from 0x60)
            //0x60:delegatecall return result would been store on memery from 0x60
            //mload(0x40):delegatecall return result size from x040~0x5F of memery

            //jumpi jumpi to 0x02 if ~delegatecall ,0x02 is not a jumpdest so throw;

            jumpi(0x02,iszero(delegatecall(gas, mload(0x20), 0x80, calldatasize, 0x60, mload(0x40))))

            //return result from 0x60~0x60+returnSize ,and result Size is store from 0x40~0x5F on memery
            return(0x60, mload(0x40))

        }
    }
}