var x = 0;

var btn = document.querySelector(".btn");
var value = document.querySelector("#num");

function dec(){
    var a;

    a = x--;

    document.getElementById("num").innerHTML=a;
}

function inc(){
    var b;

    b = x++;

    document.getElementById("num").innerHTML=b;
}