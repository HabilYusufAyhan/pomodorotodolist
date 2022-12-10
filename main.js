// görev 27 satırchoice

const startmission = document.querySelector(".startmission");
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
const startbutton = document.querySelector('.startbut');
var textinput;
var numberinput;
var breakingtimevalue = 0;
var timetotal = 0;
cross.addEventListener("click", remove);
textinput = undefined;
numberinput = undefined;
missionclose.onclick = function () {
  timetotal = 0;
  hour.textContent = "0" + 0;
  min.textContent = "0" + 0;
  success.disabled = true;
  breakingtimevalue = 0;
};
success.disabled = true;
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
success.onclick = function () {
  
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
    <p>Mola Süresi: <span class="breakingtime">${newbreaking}min</span></p>
  </div>
  <span style="display: none;">${tiklanma}</span>
 </div>
 
  
 `;
  startmission.appendChild(addmissionli);
};
var tiklanma = 0;
var asiltiklanma;
var toplam = 0;
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
      choicemission.textContent = "";
      choicetour.textContent = "";
    }
  } else if (tiklanilaneleman.classList.contains("check")) {
   
    asiltiklanma =
      tiklanilaneleman.parentElement.parentElement.parentElement.parentElement
        .lastElementChild.textContent;
    choicemission.textContent =
      tiklanilaneleman.parentElement.parentElement.parentElement.firstElementChild.textContent;
    choicetour.textContent =
      tiklanilaneleman.parentElement.parentElement.parentElement
        .nextElementSibling.firstElementChild.lastElementChild.firstElementChild
        .nextElementSibling.textContent + " tur";
    choicehour.textContent =
      tiklanilaneleman.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.textContent;
    choicemin.textContent =
      tiklanilaneleman.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.textContent;
      var saat = Math.floor(choicehour.textContent);
      var dakika = Math.floor(choicemin.textContent);
      var saniye = Math.floor(choicesec.textContent);
      toplam = ((saat*3600)+(dakika*60)+(saniye))*1000;
      

  
  }
}

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
  timebutton[0].style.transform = "rotate(10deg)";
  timebutton[1].style.transform = "rotate(0deg)";
  timebutton[2].style.transform = "rotate(0deg)";
  timebutton[3].style.transform = "rotate(0deg)";
  breakingtimevalue = 10;
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






