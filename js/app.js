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

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

var userName=document.getElementById("nameUser")
if(localStorage.getItem("name")){
  userName.textContent="Name: "+localStorage.getItem("name");

}
else{
  userName.remove();
}

var userAge=document.getElementById("ageUser")
if(localStorage.getItem("Age")){
  userAge.textContent="Age: "+localStorage.getItem("Age");

}
else{
  userAge.remove();
}


var userHeight=document.getElementById("HeightUser")
if(localStorage.getItem("Height")){
  userHeight.textContent="Height: "+localStorage.getItem("Height");

}
else{
  userHeight.remove();
}

var userWeight=document.getElementById("WeightUser")
if(localStorage.getItem("Weight")){
  userWeight.textContent="Weight: "+localStorage.getItem("Weight");

}
else{
  userWeight.remove();
}

var userGender=document.getElementById("userData")
if(localStorage.getItem("Gender")){

}
else{
  userGender.remove();
}

// localStorage.setItem("name", Name)
// localStorage.setItem('Age', Age)
// localStorage.setItem('Height', Height)
// localStorage.setItem('Weight', Weight)
// localStorage.setItem('Gender', Gender)
// localStorage.setItem('Activity', Activity)
// localStorage.setItem('BMI', BMI)
// localStorage.setItem('BFP', BFPadults)


function getDataDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        // openDropdown.classList.remove('show');
      }
    }
  }
}