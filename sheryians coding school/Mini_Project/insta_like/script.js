var dbl = document.querySelector("#container");
var C = document.querySelector("i");

dbl.addEventListener('dblclick', function(){
    C.style.opacity=0.8;
    setTimeout(() => {
        C.style.opacity=0;
        
    }, 500);
    setTimeout(() => {
        C.styel.transform = 'translate(-50%,-50%) scale(1)';
    }, 1000);
    
})
