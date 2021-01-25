'use strict'

// Switch between tabs
var trigger=true;
var tabcontent = document.getElementsByClassName("tabcontent");
function openForm(evt, formName) {
  var i, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
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

// Decliration And Caculation Functions For BMR , BMI , BFP , Carbohydrates

var Name, Age, Height, Weight, Activity, BMRmale, BMRfemale, BMI, BFPadults, BFPchildren, Carbs40, Carbs65, Carbs75, Protein10, Protein35, Gender;
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
function CalculateCarbs(BMR) {
    Carbs40 = Math.floor((BMR * 0.4) / 4)
    Carbs65 = Math.floor((BMR * 0.65) / 4)
    Carbs75 = Math.floor((BMR * 0.75) / 4)
}
function CalculateProtein(BMR) {
    Protein10 = Math.floor((BMR * 0.1) / 4)
    Protein35 = Math.floor((BMR * 0.35) / 4)
}

// Add Listener For Adults Form

var AdultsForm = document.getElementById('adults-form');
AdultsForm.addEventListener('submit', Result1);
function Result1(event1) {

  
    event1.preventDefault();
    if(trigger){
    //console.log(event1);
    Name=event1.target.name.value;
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
        CalculateCarbs(BMRmale)
        CalculateProtein(BMRmale)
    } else {
        CalculateBMRfemale();
        CalculateCarbs(BMRfemale)
        CalculateProtein(BMRfemale)
    }
    render();
    console.log(BMRmale, BMRfemale, BMI, BFPadults, Carbs40, Carbs65, Carbs75, Gender)
    LocalStoreAdults()
    trigger=false;
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
    // male = 1 , female = 0;
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
        CalculateCarbs(BMRmale)
        CalculateProtein(BMRmale)
    } else {
        CalculateBMRfemale();
        CalculateCarbs(BMRfemale)
        CalculateProtein(BMRfemale)
    }

}

function LocalStoreAdults() {
    localStorage.setItem("name",Name)
    localStorage.setItem('Age', Age)
    localStorage.setItem('Height', Height)
    localStorage.setItem('Weight', Weight)
    localStorage.setItem('Gender', Gender)
    localStorage.setItem('Activity', Activity)
    localStorage.setItem('BMI', BMI)
    localStorage.setItem('BFP', BFPadults)
    if (Gender === 1) {
        localStorage.setItem('BMR', BMRmale)
    } else {
        localStorage.setItem('BMR', BMRfemale)
    }
    localStorage.setItem('Carbohydrates 40 %', Carbs40)
    localStorage.setItem('Carbohydrates 65 %', Carbs65)
    localStorage.setItem('Carbohydrates 75 %', Carbs75)

    localStorage.setItem('Protein 10%', Protein10)
    localStorage.setItem('Protein 35%', Protein35)
}


var thArray=["Goal","Daily Calories","40%","65%","75%"]





function render (){
if(Gender==1){
    var meintancArr=[BMRmale,(BMRmale*0.4)/4,(BMRmale*0.65)/4,(BMRmale*0.75)/4];
    var halflose=BMRmale/1.3;
var loseHalfArr=[halflose,(halflose*0.4)/4,(halflose*0.65)/4,(halflose*0.75)/4];
console.log(loseHalfArr);
var halflose1=BMRmale/1.8;
var Lose1KG=[halflose1,(halflose1*0.4)/4,(halflose1*0.65)/4,(halflose1*0.75)/4]
}else{
    var meintancArr=[BMRfemale,(BMRfemale*0.4)/4,(BMRfemale*0.65)/4,(BMRfemale*0.75)/4];

    var halflose=BMRfemale/1.3;
    var loseHalfArr=[halflose,(halflose*0.4)/4,(halflose*0.65)/4,(halflose*0.75)/4];
    var halflose1=BMRfemale/1.8;
    var Lose1KG=[halflose1,(halflose1*0.4)/4,(halflose1*0.65)/4,(halflose1*0.75)/4]
}

    var ShowResult = document.getElementById('Results')
var ProteinRes=document.createElement("h3")
ProteinRes.textContent="your daily intake Protien between (10-35)% : "+"("+Protein10+")"+"-"+"("+Protein35+")"
ShowResult.appendChild(ProteinRes)

if(Gender==1){
    var sugar=document.createElement("h3")
    sugar.textContent="Avg Sugar intake per day for male : 36g "
    ShowResult.appendChild(sugar)
}else{
    var sugar=document.createElement("h3")
    sugar.textContent="Avg  Sugar intake per day for female : 30g "
    ShowResult.appendChild(sugar)

}

var bodyFat=document.createElement("h3")
bodyFat.textContent="Your body fat percentage is : "+BFPadults+"%"
ShowResult.appendChild(bodyFat)

var bodyMass=document.createElement("h3")
bodyMass.textContent="Your body mass percentage is : "+BMI+"%"
ShowResult.appendChild(bodyMass)


var table=document.createElement("table")
ShowResult.appendChild(table)
var TR=document.createElement("tr")
table.appendChild(TR)
for(var x=0;x<thArray.length;x++){
  var thMain=document.createElement("th");
thMain.textContent=thArray[x];
  TR.appendChild(thMain);
}
//---------------------//
var TRtd=document.createElement("TR")
table.appendChild(TRtd)
 var meint=document.createElement("td")
 meint.textContent="maintenence Weight" 
 TRtd.appendChild(meint)

for(var x=0;x<loseHalfArr.length;x++){

    var menTH=document.createElement("td")
    menTH.textContent=Math.floor(meintancArr[x]);
    TRtd.appendChild(menTH)
}

 //---------------------//
 var TRlo=document.createElement("TR")
 table.appendChild(TRlo)
 var losehalf=document.createElement("td")
 losehalf.textContent="Lose 0.5kg/week" 
 TRlo.appendChild(losehalf)

 for(var x=0;x<loseHalfArr.length;x++){

    
    var LoseHdd=document.createElement("td")
    LoseHdd.textContent=Math.floor(loseHalfArr[x]);
    TRlo.appendChild(LoseHdd)
}


 //-----------------//
 var TRlos=document.createElement("TR")
 table.appendChild(TRlos)
 var loseOne=document.createElement("td")
 loseOne.textContent="Lose 1kg/week" 
 TRlos.appendChild(loseOne)
 for(var x=0;x<Lose1KG.length;x++){

    
    var Losing1k=document.createElement("td")
    Losing1k.textContent=Math.floor(Lose1KG[x]);
    TRlos.appendChild(Losing1k)
}

 

 /////////
}


