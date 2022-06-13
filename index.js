var obj = document.getElementsByClassName("color")[0];
var arr = ["red","blue","green"];
var elem = document.querySelectorAll(".select .press .text");

function incrementValue(objBut)
{
    var obj = document.getElementsByClassName("color")[0];
    var arr = ["Red","Blue","Green"];
    var p = document.getElementsByClassName("color")[0].style.background;
    var value = document.getElementsByClassName("color")[0].style.background;
    var col = arr[Math.floor(Math.random() * 100) % 3];
    while(col.toLowerCase() === p) {
        col = arr[Math.floor(Math.random() * 100) % 3];
    }
    obj.style.background = col;
    var tex = arr[Math.floor(Math.random() * 100) % 3];
    while(col === tex) {
        tex = arr[Math.floor(Math.random() * 100) % 3];
    }
    obj.innerText = tex;
    console.log(p,col, tex, objBut.value);
    var k;
    if(p === objBut.value) {
        var l = document.querySelector("#score").innerText;
        k = parseInt(l.split(' ')[1]) + 1;
        document.querySelector("#score").innerText = "Score: " + k;
    }
    else{
        k = 0;
        document.querySelector("#score").innerText = "Score: " + k;
    }
}
