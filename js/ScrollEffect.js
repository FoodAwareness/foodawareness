Scroll();
function Scroll(){
    var introText=document.querySelector(".effected");  
    var introPosition=introText.getBoundingClientRect().top;
// console.log(introPosition);
var screenPos=window.innerHeight/1.5;

if(introPosition<screenPos){

    introText.classList.add("appear")
}
}

window.addEventListener("scroll",Scroll)

