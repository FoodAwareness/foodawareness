// Ipen Tabs for Forms
var formContainer = document.getElementById('form-container')
formContainer.style.display = "none";
var tabcontent = document.getElementsByClassName("tabcontent");

function openForm(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// To Enter The Form
var displayform = document.getElementById('form-display');
displayform.addEventListener('click', formdisplay)
function formdisplay() {
  formContainer.style.display = "block";
  tabcontent[0].style.display = "block";
  displayform.removeEventListener('click', formdisplay)
}

// Select Radio

function switchradio(evt) {
  var radiolabelMale = document.getElementsByClassName("radio-label-male")
  var radiolabelFemale = document.getElementsByClassName("radio-label-female")
  for (var i = 0; i < radiolabelMale.length; i++) {
    radiolabelMale[i].className = radiolabelMale[i].className.replace(" active", "");
  }
  for (var i = 0; i < radiolabelFemale.length; i++) {
    radiolabelFemale[i].className = radiolabelFemale[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

// Pre Load Screen

var myVar;

function preLoad() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myPage").style.display = "block";
}





// Decliration And Caculation Functions For BMR , BMI , BFP 

var BMRmale, BMRfemale, BMI, BFPadults, BFPchildren, Gender;
function CalculateBMRmale() {
  BMRmale = Math.floor(((10 * Weight) + (6.25 * Height) - (5 * Age) + 5) * Activity)
}

function CalculateBMRfemale() {
  BMRfemale = Math.floor(((10 * Weight) + (6.25 * Height) - (5 * Age) - 161) * Activity)
}

function CalculateBMI() {
  BMI = Math.floor(Weight / Math.pow(Height / 100, 2))
}

function CalculateBFPadults() {
  BFPadults = Math.floor((1.2 * BMI) + (0.23 * Age) - (10.8 * Gender) - 5.4)
}

function CalculateBFPchildren() {
  BFPchildren = Math.floor((1.51 * BMI) - (0.7 * Age) - (3.6 * Gender) + 1.4)
}


// Add Listener For Adults Form

var AdultsForm = document.getElementById('adults-form');
AdultsForm.addEventListener('submit', Result1);
function Result1(event1) {
  event1.preventDefault();
  //console.log(event1);
  Age = event1.target.AgeAdults.value;
  Height = event1.target.Height.value;
  Weight = event1.target.Weight.value;
  if (event1.target.male.labels[0].className === 'radio-label-male active') {
    Gender = 1;
  } else {
    Gender = 0;
  }
  Activity = event1.target.ActivityAdults.value;
  CalculateBMI();
  CalculateBFPadults();
  if (Gender === 1) {
    CalculateBMRmale();
  } else {
    CalculateBMRfemale();
  }
}

// Add Listener For Children Form

var ChildrenForm = document.getElementById('children-form');
ChildrenForm.addEventListener('submit', Result2);
function Result2(event2) {
  event2.preventDefault();
  //console.log(event2);
  Age = event2.target.AgeChildren.value;
  Height = event2.target.Height.value;
  Weight = event2.target.Weight.value;
 
  if (event2.target.male.nextElementSibling.className === 'radio-label-male active') {
    Gender = 1;
  } else {
    Gender = 0;
  }
  Activity = event2.target.ActivityChildren.value;
  CalculateBMI();
  CalculateBFPchildren();
  if (Gender === 1) {
    CalculateBMRmale();
  } else {
    CalculateBMRfemale();
  }
}