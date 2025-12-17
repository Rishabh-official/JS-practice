var arr=[
    {dp:"https://images.unsplash.com/photo-1765568562615-4bf854edcf1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
     story:"https://images.unsplash.com/photo-1765743353154-54481abe0591?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1765663371809-cdbdc2982be6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
     story:"https://plus.unsplash.com/premium_photo-1765663371886-2abc505e9165?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1765506265670-9e1c53f3a0e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
     story:"https://images.unsplash.com/photo-1765506255227-2feaa9bd58ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1765489690445-6a8e4e330936?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
     story:"https://images.unsplash.com/photo-1765248226896-e00e94701f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1765263956030-a74e79c6f3bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
     story:"https://images.unsplash.com/photo-1765003291278-495489d2d7fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
];

var clutter="";
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id=${idx} src=${elem.dp} alt="">
</div>`
})
var story =document.querySelector('#stories');
story.innerHTML=clutter;
story.addEventListener('click',function(dets){
    
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(() => {
        document.querySelector("#full-screen").style.display = "none";
    }, 2000);
})
