var btn = document.querySelector("button");
var C = document.querySelector("#c");
let flag = 0;
btn.addEventListener('click',function(){
    if(flag == 0){
        c.innerHTML = "Friend";
    c.style.color = "green";
    flag = 1;
    }
    else{
        c.innerHTML = "Stranger";
        c.style.color = "red";
        flag = 0;
    }
})