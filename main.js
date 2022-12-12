// görev 27 satırchoice

const startmission = document.querySelector(".startmission");
const finishmission = document.querySelector(".finishmission");
const timebutton = document.querySelectorAll(".waitingbuttondiv .minfiveteen");
const plus = document.querySelectorAll(".plus .minfiveteen");
const sour = document.querySelectorAll(".sour .minfiveteen");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const cross = document.querySelector(".list");
const finishcross = document.querySelector(".finishlist");
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
const stopbutton = document.querySelector(".stopbut");
const listtitle = document.querySelectorAll(".listtitle");
const body = document.querySelector(".body");
const startcompletehour = document.querySelector(".startcompletehour");
const startcompletemin = document.querySelector(".startcompletemin");
const startcompletesec = document.querySelector(".startcompletesec");
const finishcompletehour = document.querySelector(".finishcompletehour");
const finishcompletemin = document.querySelector(".finishcompletemin");
const finishcompletesec = document.querySelector(".finishcompletesec");
var textinput;
var numberinput;
var breakingtimevalue = 0;
var timetotal = 0;
var a;
var b;
var c;
var d;
cross.addEventListener("click", remove);
finishcross.addEventListener("click", remove2);
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
  a = startcompletehour.textContent;
  b = startcompletemin.textContent;
  if (
    Math.floor(a) + Math.floor(totaltimehour) < 10 &&
    Math.floor(a) + Math.floor(totaltimehour) >= 0
  ) {
    startcompletehour.textContent =
      "0" + (Math.floor(a) + Math.floor(totaltimehour));
  } else {
    startcompletehour.textContent = Math.floor(a) + Math.floor(totaltimehour);
  }
  if (
    Math.floor(b) + Math.floor(totaltimemin) < 10 &&
    Math.floor(b) + Math.floor(totaltimemin) >= 0
  ) {
    startcompletemin.textContent =
      "0" + (Math.floor(b) + Math.floor(totaltimemin));
  } else {
    startcompletemin.textContent = Math.floor(b) + Math.floor(totaltimemin);
  }
};
//////////
var tiklanma = 0;
var asiltiklanma;
var toplam = 0;
// click delete option
var removecompletemission;
var breaking;
function remove(e) {
  const tiklanilaneleman = e.target;
  removecompletemission = tiklanilaneleman;
  if (tiklanilaneleman.classList.contains("cross2")) {
    tiklanilaneleman.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    if (
      Math.floor(startcompletehour.textContent) -
        Math.floor(
          tiklanilaneleman.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild
            .firstElementChild.textContent
        ) <
      10
    ) {
      startcompletehour.textContent =
        "0" +
        (Math.floor(startcompletehour.textContent) -
          Math.floor(
            tiklanilaneleman.parentElement.parentElement.parentElement
              .nextElementSibling.firstElementChild.firstElementChild
              .firstElementChild.textContent
          ));
    } else {
      startcompletehour.textContent =
        Math.floor(startcompletehour.textContent) -
        Math.floor(
          tiklanilaneleman.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild
            .firstElementChild.textContent
        );
    }
    if (
      Math.floor(startcompletemin.textContent) -
        Math.floor(
          tiklanilaneleman.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild
            .firstElementChild.nextElementSibling.textContent
        ) <
      10
    ) {
      startcompletemin.textContent =
        "0" +
        (Math.floor(startcompletemin.textContent) -
          Math.floor(
            tiklanilaneleman.parentElement.parentElement.parentElement
              .nextElementSibling.firstElementChild.firstElementChild
              .firstElementChild.nextElementSibling.textContent
          ));
    } else {
      startcompletemin.textContent =
        Math.floor(startcompletemin.textContent) -
        Math.floor(
          tiklanilaneleman.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild
            .firstElementChild.nextElementSibling.textContent
        );
    }

    console.log(
      tiklanilaneleman.parentElement.parentElement.parentElement
        .nextElementSibling.firstElementChild.firstElementChild
        .firstElementChild.nextElementSibling.textContent
    );
    if (
      tiklanilaneleman.parentElement.parentElement.parentElement.parentElement
        .lastElementChild.textContent == asiltiklanma
    ) {
      choicehour.textContent = "0" + 0;
      choicemin.textContent = "0" + 0;
      choicesec.textContent = "0" + 0;
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
    timetotal = timetotal + 10;
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
    timebutton[0].style.transform = "scale(1.1)";
    timebutton[1].style.transform = "scale(1)";
    timebutton[2].style.transform = "scale(1)";
    timebutton[3].style.transform = "scale(1)";
    breakingtimevalue = 10;
  };
  timebutton[1].onclick = function () {
    timebutton[0].style.transform = "scale(1)";
    timebutton[1].style.transform = "scale(1.1)";
    timebutton[2].style.transform = "scale(1)";
    timebutton[3].style.transform = "scale(1)";
    breakingtimevalue = 15;
  };
  timebutton[2].onclick = function () {
    timebutton[0].style.transform = "scale(1)";
    timebutton[1].style.transform = "scale(1)";
    timebutton[2].style.transform = "scale(1.1)";
    timebutton[3].style.transform = "scale(1)";
    breakingtimevalue = 30;
  };
  timebutton[3].onclick = function () {
    timebutton[0].style.transform = "scale(1)";
    timebutton[1].style.transform = "scale(1)";
    timebutton[2].style.transform = "scale(1)";
    timebutton[3].style.transform = "scale(1.1)";
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
var finishwrite = 0;
startbutton.onclick = function () {
  finishwrite = 1;
  addmission.style.display = "none";
  listtitle[0].style.opacity = "0";
  listtitle[1].style.opacity = "0";
  listtitle[0].style.zIndex = "-1";
  listtitle[1].style.zIndex = "-1";
  stopcontrol = 0;
  startbutton.style.display = "none";
  stopbutton.style.display = "inline-block";
  hourselect = choicehour.textContent;
  minselect = choicemin.textContent;
  sayac++;
  if (sayac == 1) {
    time = setInterval(countdown, 1000);
  }
};
var mola = 0;
var write = 0;
var inbreak;
function kontrol() {
  if (
    Math.floor(choicehour.textContent) == 0 &&
    Math.floor(choicemin.textContent) == 0 &&
    Math.floor(choicesec.textContent) == 0
  ) {
    if (choicetour.textContent == 0) {
      body.style.background = "#3b5998";
      listtitle[0].style.opacity = "1";
      listtitle[0].style.zIndex = "1";
      listtitle[1].style.opacity = "1";
      listtitle[1].style.zIndex = "1";
      stopbutton.style.display = "none";
      startbutton.style.display = "inline-block";
      addmission.style.display = "inline-block";

      clearInterval(time);
      sayac = 0;
      if (write == 0 && breaking != undefined && stopcontrol == 0) {
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
        removecompletemission.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        c = finishcompletehour.textContent;
        d = finishcompletemin.textContent;
        if (Math.floor(c) + Math.floor(finishhour) < 10) {
          finishcompletehour.textContent =
            "0" + (Math.floor(c) + Math.floor(finishhour));
        } else {
          finishcompletehour.textContent =
            Math.floor(c) + Math.floor(finishhour);
        }
        if (Math.floor(d) + Math.floor(finishmin) < 10) {
          finishcompletemin.textContent =
            "0" + (Math.floor(d) + Math.floor(finishmin));
        } else {
          finishcompletemin.textContent = Math.floor(d) + Math.floor(finishmin);
        }
        if (
          Math.floor(startcompletehour.textContent) - Math.floor(finishhour) <
          10
        ) {
          startcompletehour.textContent =
            "0" +
            (Math.floor(startcompletehour.textContent) -
              Math.floor(finishhour));
        } else {
          startcompletehour.textContent =
            Math.floor(startcompletehour.textContent) - Math.floor(finishhour);
        }
        if (
          Math.floor(startcompletemin.textContent) - Math.floor(finishmin) <
          10
        ) {
          startcompletemin.textContent =
            "0" +
            (Math.floor(startcompletemin.textContent) - Math.floor(finishmin));
        } else {
          startcompletemin.textContent =
            Math.floor(startcompletemin.textContent) - Math.floor(finishmin);
        }
        write = 1;
      }
      if (finishwrite == 1 && choicetour == 0) {
        choicemission.textContent = "gorev bitti";
        choicetour.textContent = "";
        finishwrite = 0;
      }
    } else {
      if (mola == 0) {
        choicetour.textContent = choicetour.textContent - 1;

        if (choicetour.textContent >= 1) {
          if (Math.floor(breaking) < 60) {
            choicemin.textContent = breaking;
            mola = 1;
            body.style.background = "#1da1f2";
            startbutton.style.background = "#3b5998";
            stopbutton.style.background = "#3b5998";
            addmission.style.background = "#3b5998";
            inbreak = choicemission.textContent;
            choicemission.textContent = "Moladasınız";
          } else if (Math.floor(breaking) == 60) {
            choicehour.textContent = 1;
            mola = 1;
            body.style.background = "#1da1f2";
            startbutton.style.background = "#3b5998";
            stopbutton.style.background = "#3b5998";
            addmission.style.background = "#3b5998";
            inbreak = choicemission.textContent;
            choicemission.textContent = "Moladasınız";
          }
        }
      } else if (mola == 1) {
        body.style.background = "#3b5998";
        startbutton.style.background = "#1da1f2";
        stopbutton.style.background = "#1da1f2";
        addmission.style.background = "#1da1f2";
        choicehour.textContent = hourselect;
        choicemin.textContent = minselect;
        choicemission.textContent = inbreak;
        mola = 0;
      }
    }
  }
}
var stopcontrol = 0;
stopbutton.onclick = function () {
  body.style.background = "#3b5998";
  addmission.style.display = "inline-block";
  listtitle[0].style.opacity = "1";
  listtitle[1].style.opacity = "1";
  listtitle[0].style.zIndex = "1";
  listtitle[1].style.zIndex = "1";
  stopcontrol = 1;
  stopbutton.style.display = "none";
  startbutton.style.display = "inline-block";
  startbutton.disabled = "true";
  startbutton.style.opacity = "0.5";
  startbutton.style.zIndex = "-1";
  startbutton.style.cursor = "auto";
  clearInterval(time);
  choicehour.textContent = "0" + 0;
  choicemin.textContent = "0" + 0;
  choicesec.textContent = "0" + 0;
  choicemission.textContent = "Durduruldu";
  choicetour.textContent = "0";
};
function remove2(a) {
  const finishtiklanilaneleman = a.target;
  if (finishtiklanilaneleman.classList.contains("cross2")) {
    finishtiklanilaneleman.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    if (
      Math.floor(finishcompletehour.textContent) -
        Math.floor(
          finishtiklanilaneleman.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild
            .firstElementChild.textContent
        ) <
      10
    ) {
      finishcompletehour.textContent =
        "0" +
        (Math.floor(finishcompletehour.textContent) -
          Math.floor(
            finishtiklanilaneleman.parentElement.parentElement.parentElement
              .nextElementSibling.firstElementChild.firstElementChild
              .firstElementChild.textContent
          ));
    } else {
      finishcompletehour.textContent =
        Math.floor(finishcompletehour.textContent) -
        Math.floor(
          finishtiklanilaneleman.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild
            .firstElementChild.textContent
        );
    }
    if (
      Math.floor(finishcompletemin.textContent) -
        Math.floor(
          finishtiklanilaneleman.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild
            .firstElementChild.nextElementSibling.textContent
        ) <
      10
    ) {
      finishcompletemin.textContent =
        "0" +
        (Math.floor(finishcompletemin.textContent) -
          Math.floor(
            finishtiklanilaneleman.parentElement.parentElement.parentElement
              .nextElementSibling.firstElementChild.firstElementChild
              .firstElementChild.nextElementSibling.textContent
          ));
    } else {
      finishcompletemin.textContent =
        Math.floor(finishcompletemin.textContent) -
        Math.floor(
          finishtiklanilaneleman.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild
            .firstElementChild.nextElementSibling.textContent
        );
    }
  }
}
setInterval(kontrol, 100);
