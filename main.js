// görev 27 satırchoice

const startmission = document.querySelector(".startmission");
const finishmission = document.querySelector(".finishmission")
const timebutton = document.querySelectorAll(".waitingbuttondiv .minfiveteen");
const plus = document.querySelectorAll(".plus .minfiveteen");
const sour = document.querySelectorAll(".sour .minfiveteen");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const cross = document.querySelector(".list");
const success = document.querySelector(".success");
const missionclose = document.querySelector("#missionclose");
const choicemission = document.querySelector(".choicemission");
const choicetour = document.querySelector(".choicetour");
const choicehour = document.querySelector(".choicehour");
const choicemin = document.querySelector(".choicemin");
const choicesec = document.querySelector(".choicesec");
const startbutton = document.querySelector(".startbut");
const addmission = document.querySelector(".addmission");
const newmission = document.querySelector(".newmission");
var textinput;
var numberinput;
var breakingtimevalue = 0;
var timetotal = 0;

cross.addEventListener("click", remove);
textinput = undefined;
numberinput = undefined;
// missiconchoiceoff
missionclose.onclick = function () {
  timetotal = 0;
  hour.textContent = "0" + 0;
  min.textContent = "0" + 0;
  success.disabled = true;
  breakingtimevalue = 0;
};
success.disabled = true;
//
//button on off
function change() {
  const missionnumberinput = document.querySelector(".missionnumberinput");
  const missiontextinput = document.querySelector(".missiontextinput");
  numberinput = missionnumberinput.value;
  textinput = missiontextinput.value;
  if (
    (hour.textContent != 0 || min.textContent != 0) &&
    breakingtimevalue != 0 &&
    textinput != "" &&
    numberinput != ""
  ) {
    success.disabled = false;
  }
}
//
// list writing
success.onclick = function () {
  newmission.style.opacity = "0";
  newmission.style.zIndex = "-1";
  tiklanma++;
  const missiontextinput = document.querySelector(".missiontextinput");
  const missionnumberinput = document.querySelector(".missionnumberinput");

  textinput = missiontextinput.value;
  numberinput = missionnumberinput.value;
  const addmissionli = document.createElement("li");
  addmissionli.classList.add("mission");
  totaltimehour = hour.textContent;
  totaltimemin = min.textContent;
  newtour = numberinput;
  newbreaking = breakingtimevalue;
  addmissionli.innerHTML = `
  <div class="textcontrol">
  <div class="toptextbutton">
  <span class="missiontext" style="text-align: left;"
    >${textinput}</span
  >
  <div class="controlbutton">
                  <button>
                    <i class="settingsicon fa-solid fa-cog"></i>
                  </button>
                  <button class="cross">
                    <i style="color: red;" id="cross" class="cross2 fa-solid fa-x"></i>
                  </button>
                  <button class="check2">
                    <i style="color: green;" id="check" class="check fa-solid fa-check"></i>
                    <span style="display: none;"></span>
                  </button>
                </div>
                </div>
                <div class="missiontime">
    <p>Süre: <span class="time"><span>${totaltimehour}</span>.<span>${totaltimemin}</span>.<span>00</span></span><span class="tour"><span>/</span><span>${newtour}</span>tur</span></p>
    <p>Mola Süresi: <span class="breakingtime">${newbreaking}</span><span>min</span></p>
  </div>
  <span style="display: none;">${tiklanma}</span>
 </div>
 
  
 `;
  startmission.appendChild(addmissionli);
  timetotal = 0;
  hour.textContent = "0" + 0;
  min.textContent = "0" + 0;
  success.disabled = true;
  breakingtimevalue = 0;
};
//////////
var tiklanma = 0;
var asiltiklanma;
var toplam = 0;
// click delete option

var breaking;
function remove(e) {
  const tiklanilaneleman = e.target;
  if (tiklanilaneleman.classList.contains("cross2")) {
    tiklanilaneleman.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    if (
      tiklanilaneleman.parentElement.parentElement.parentElement.parentElement
        .lastElementChild.textContent == asiltiklanma
    ) {
    
      choicehour.textContent = "0" + 0;
      choicemin.textContent = "0" + 0;
      choicesec.textContent = "0"+ 0;
      choicemission.textContent = "";
      choicetour.textContent = "";
      startbutton.style.opacity = "0.5";
      startbutton.style.cursor = "auto";
      startbutton.style.zIndex = "-1";
    }
  } else if (tiklanilaneleman.classList.contains("check")) {
    write = 0;
    startbutton.disabled = false;
    startbutton.style.opacity = "1";
    startbutton.style.cursor = "pointer";
    startbutton.style.zIndex = "1";
    asiltiklanma =
      tiklanilaneleman.parentElement.parentElement.parentElement.parentElement
        .lastElementChild.textContent;
    choicemission.textContent =
      tiklanilaneleman.parentElement.parentElement.parentElement.firstElementChild.textContent;
    choicetour.textContent =
      tiklanilaneleman.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.textContent;
    choicehour.textContent =
      tiklanilaneleman.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.textContent;
    choicemin.textContent =
      tiklanilaneleman.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.textContent;
    breaking =
      tiklanilaneleman.parentElement.parentElement.parentElement
        .nextElementSibling.lastElementChild.firstElementChild.textContent;
    console.log(breaking);
   finishhour = choicehour.textContent;
   finishmin = choicemin.textContent;
   finishsec = choicesec.textContent;
   finishtour = choicetour.textContent;
  }
}
var finishhour;
var finishmin;
var finishsec;
var finishtour;
///////////////////////
// mission add edit
plussour();
function plussour() {
  plus[0].onclick = function () {
    timetotal = timetotal + 1;
    if (timetotal / 60 < 10) {
      hour.textContent = "0" + Math.floor(timetotal / 60);
      if (timetotal / 60 < 0) {
        hour.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      hour.textContent = Math.floor(timetotal / 60);
    }

    if (timetotal % 60 < 10) {
      min.textContent = "0" + (timetotal % 60);
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      min.textContent = timetotal % 60;
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    }
  };
  plus[1].onclick = function () {
    timetotal = timetotal + 15;
    if (timetotal / 60 < 10) {
      hour.textContent = "0" + Math.floor(timetotal / 60);
      if (timetotal / 60 < 0) {
        hour.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      hour.textContent = Math.floor(timetotal / 60);
    }

    if (timetotal % 60 < 10) {
      min.textContent = "0" + (timetotal % 60);
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      min.textContent = timetotal % 60;
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    }
  };
  plus[2].onclick = function () {
    timetotal = timetotal + 30;
    if (timetotal / 60 < 10) {
      hour.textContent = "0" + Math.floor(timetotal / 60);
      if (timetotal / 60 < 0) {
        hour.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      hour.textContent = Math.floor(timetotal / 60);
    }

    if (timetotal % 60 < 10) {
      min.textContent = "0" + (timetotal % 60);
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      min.textContent = timetotal % 60;
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    }
  };
  plus[3].onclick = function () {
    timetotal = timetotal + 60;
    if (timetotal / 60 < 10) {
      hour.textContent = "0" + Math.floor(timetotal / 60);
      if (timetotal / 60 < 0) {
        hour.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      hour.textContent = Math.floor(timetotal / 60);
    }

    if (timetotal % 60 < 10) {
      min.textContent = "0" + (timetotal % 60);
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      min.textContent = timetotal % 60;
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    }
  };
  sour[0].onclick = function () {
    timetotal = timetotal - 10;
    if (timetotal / 60 < 10) {
      hour.textContent = "0" + Math.floor(timetotal / 60);
      if (timetotal / 60 < 0) {
        hour.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      hour.textContent = Math.floor(timetotal / 60);
    }

    if (timetotal % 60 < 10) {
      min.textContent = "0" + (timetotal % 60);
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      min.textContent = timetotal % 60;
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    }
  };
  sour[1].onclick = function () {
    timetotal = timetotal - 15;
    if (timetotal / 60 < 10) {
      hour.textContent = "0" + Math.floor(timetotal / 60);
      if (timetotal / 60 < 0) {
        hour.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      hour.textContent = Math.floor(timetotal / 60);
    }

    if (timetotal % 60 < 10) {
      min.textContent = "0" + (timetotal % 60);
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      min.textContent = timetotal % 60;
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    }
  };
  sour[2].onclick = function () {
    timetotal = timetotal - 30;
    if (timetotal / 60 < 10) {
      hour.textContent = "0" + Math.floor(timetotal / 60);
      if (timetotal / 60 < 0) {
        hour.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      hour.textContent = Math.floor(timetotal / 60);
    }

    if (timetotal % 60 < 10) {
      min.textContent = "0" + (timetotal % 60);
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      min.textContent = timetotal % 60;
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    }
  };
  sour[3].onclick = function () {
    timetotal = timetotal - 60;
    if (timetotal / 60 < 10) {
      hour.textContent = "0" + Math.floor(timetotal / 60);
      if (timetotal / 60 < 0) {
        hour.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      hour.textContent = Math.floor(timetotal / 60);
    }

    if (timetotal % 60 < 10) {
      min.textContent = "0" + (timetotal % 60);
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    } else {
      min.textContent = timetotal % 60;
      if (timetotal % 60 < 0) {
        min.textContent = "0" + 0;
        timetotal = 0;
      }
    }
  };
  timebutton[0].onclick = function () {
    timebutton[0].style.transform = "rotate(10deg)";
    timebutton[1].style.transform = "rotate(0deg)";
    timebutton[2].style.transform = "rotate(0deg)";
    timebutton[3].style.transform = "rotate(0deg)";
    breakingtimevalue = 1;
  };
  timebutton[1].onclick = function () {
    timebutton[0].style.transform = "rotate(0deg)";
    timebutton[1].style.transform = "rotate(10deg)";
    timebutton[2].style.transform = "rotate(0deg)";
    timebutton[3].style.transform = "rotate(0deg)";
    breakingtimevalue = 15;
  };
  timebutton[2].onclick = function () {
    timebutton[0].style.transform = "rotate(0deg)";
    timebutton[1].style.transform = "rotate(0deg)";
    timebutton[2].style.transform = "rotate(10deg)";
    timebutton[3].style.transform = "rotate(0deg)";
    breakingtimevalue = 30;
  };
  timebutton[3].onclick = function () {
    timebutton[0].style.transform = "rotate(0deg)";
    timebutton[1].style.transform = "rotate(0deg)";
    timebutton[2].style.transform = "rotate(0deg)";
    timebutton[3].style.transform = "rotate(10deg)";
    breakingtimevalue = 60;
  };
}
//////////////////////
//countdown
startbutton.disabled = true;
if (startbutton.disabled == true) {
  startbutton.style.opacity = "0.5";
  startbutton.style.cursor = "auto";
  startbutton.style.zIndex = "-1";
}

function countdown() {
  var countdownhour = Math.floor(choicehour.textContent);
  var countdownmin = Math.floor(choicemin.textContent);
  var countdownsec = Math.floor(choicesec.textContent);
  if (countdownhour != 0 || countdownmin != 0 || countdownsec != 0) {
    if (countdownhour > 0 && countdownmin == 0 && countdownsec == 0) {
      countdownhour--;
      countdownmin = 59;
      countdownsec = 60;
    }
    if (countdownhour >= 0 && countdownmin > 0 && countdownsec == 0) {
      countdownsec = 60;
      countdownmin--;
    }
    if (countdownhour >= 0 || countdownmin >= 0 || countdownsec >= 0) {
      countdownsec--;
    }
    if (countdownhour < 10) {
      choicehour.textContent = "0" + countdownhour;
    } else {
      choicehour.textContent = countdownhour;
    }
    if (countdownmin < 10) {
      choicemin.textContent = "0" + countdownmin;
    } else {
      choicemin.textContent = countdownmin;
    }
    if (countdownsec < 10) {
      choicesec.textContent = "0" + countdownsec;
    } else {
      choicesec.textContent = countdownsec;
    }
  }
}
var sayac = 0;
var time;
var hourselect;
var minselect;
startbutton.onclick = function () {
  hourselect = choicehour.textContent;
  minselect = choicemin.textContent;
  sayac++;
  if (sayac == 1) {
    time = setInterval(countdown, 1000);
  }
  
};
var mola = 0;
var write = 0;
function kontrol() {
  if (
    Math.floor(choicehour.textContent) == 0 &&
    Math.floor(choicemin.textContent) == 0 &&
    Math.floor(choicesec.textContent) == 0
  ) {
  
    if (choicetour.textContent == 0) {
      clearInterval(time);
      sayac = 0;
      if (write == 0 && breaking != undefined) {
        const addmissionli = document.createElement("li");
      addmissionli.classList.add("mission");
      addmissionli.innerHTML = `
  <div class="textcontrol">
  <div class="toptextbutton">
  <span class="missiontext" style="text-align: left;"
    >${choicemission.textContent}</span
  >
  <div class="controlbutton">
                  <button class="cross">
                    <i style="color: red;" id="cross" class="cross2 fa-solid fa-x"></i>
                  </button>
                </div>
                </div>
                <div class="missiontime">
    <p>Süre: <span class="time"><span>${finishhour}</span>.<span>${finishmin}</span>.<span>${finishsec}</span></span><span class="tour"><span>/</span><span>${finishtour}</span>tur</span></p>
    <p>Mola Süresi: <span class="breakingtime">${breaking}</span><span>min</span></p>
  </div>

 </div>
 
  
 `;
 finishmission.appendChild(addmissionli);
 write = 1;
      }
    }
    else{
      if (mola == 0) {
        choicetour.textContent = choicetour.textContent-1;
        if (choicetour.textContent >= 1) {
          if (Math.floor(breaking) < 60) {
            choicemin.textContent = breaking;
            mola = 1;
          } else if (Math.floor(breaking) == 60) {
            choicehour.textContent = 1;
            mola = 1;
        }
        
         
      }
      }
      else if(mola == 1){
        choicehour.textContent = hourselect;
        choicemin.textContent = minselect;
        mola = 0;
      }
      
  }

}

}
setInterval(kontrol, 100);
