// Ipen Tabs for Forms

// Pre Load Screen
var triger=false;
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
if(triger){
  event.preventDefault();
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
triger=false;
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
  modal.style.display = "block";
  triger=true;
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }