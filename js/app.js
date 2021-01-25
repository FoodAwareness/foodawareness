"use strict"

var trigger=false;

// Pre Load Screen

var myVar;

function preLoad() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  // document.getElementById("myPage").style.display = "grid";
}



// submit contact us Form

window.onclick = function(event) {
  if(trigger){
  event.preventDefault();
  if (event.target == modal) {
    modal.style.display = "none";
    trigger=false;
  }
}
}

//Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("sendMessage");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  trigger=true;
  modal.style.display = "block";
}

var userName=document.getElementById("nameUser")
if(localStorage.getItem("name")){
  userName.textContent="Hello "+localStorage.getItem("name");

}
else{
  userName.remove();
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }