as={
    "a":{
        "b":1
    },
    "b":{
        "b":2
    }
}
bs=[
    {"b":1},
    {"b":2}
]
var resb=bs.map(function(a){
    return a.b

})

function getType(json,key){
    var res
    res=Object.keys(json).map(function(k){
        return json[k][key]
    })
    return res
}
var self=this
var resa=getType(as,"b")


console.log(resa,resb)
