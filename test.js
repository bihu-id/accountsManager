a={
    "1":1,
    "b":{
        "b1":11
    }
}
b={}
function getSub(obj,keys){
    var subObj=obj
    for(var i=0;i<keys.length;i++)
        if(subObj[keys[i]]!=undefined)
        {
            subObj=subObj[keys[i]]
        }
        else
            return
    return subObj
}
console.log(a)

