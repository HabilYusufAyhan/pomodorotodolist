//body renk değişimi
const body = document.querySelector(".body");
const planlist = document.querySelector(".planlist");
const finishlist = document.querySelector(".finishlist2");
// listelerin tanımlanması
const startmission = document.querySelector(".startmission");
const finishmission = document.querySelector(".finishmission");
// görev özelliklerinin alınması
const missionaddsuccess = document.querySelector(".success");
const waitingmin = document.querySelector(".waitingmin");
const missiontimeinput = document.querySelector(".missiontimeinput");
const missiontourinput = document.querySelector(".missionnumberinput");
const missiontextinput = document.querySelector(".missiontextinput");
/*countdown barın tanımlanması*/
const countdowntimer = document.querySelector(".timer");
const countdowntour = document.querySelector(".choicetour");
const countdowntext = document.querySelector(".choicemission");
//başlat durdur butonunun tanımlanması
const startbutton = document.querySelector(".startbut");
const stopbutton = document.querySelector(".stopbut");
const addmission = document.querySelector(".addmission");
const delete2 = document.querySelector('.delete');
//düzenleme
const customizecross = document.querySelector('.customizecross');
const missioncustomize = document.querySelector('.missioncust');
const customizetime = document.querySelector('.customizetime');
const customizetext = document.querySelector('.customizetext');
const customizetour = document.querySelector('.customizetour');
const customizewaiting = document.querySelector('.customizewaiting');
const cusbutton = document.querySelector('.cusbutton');

missionaddsuccess.onclick = function () {
  deletethismission++;
  var timeconverterhour = 0 + "0";
  var timeconvertermin = 0 + "0";
  var timeconvertersec = 0 + "0";
  var totaltimemain = missiontimeinput.value;
  if (totaltimemain < 60) {
    if (totaltimemain < 10) {
      timeconvertermin = "0" + totaltimemain;
    } else {
      timeconvertermin = totaltimemain;
    }
  } else {
    timeconvertermin = totaltimemain % 60;
    if (timeconverterhour < 10) {
      timeconverterhour = "0" + Math.floor(totaltimemain / 60);
    } else {
      timeconverterhour = Math.floor(totaltimemain / 60);
    }
    if (timeconvertermin < 10) {
      timeconvertermin = "0" + timeconvertermin;
    }
  }
  const addmissionli = document.createElement("li");
  addmissionli.classList.add("mission");
  addmissionli.innerHTML = `
  <div class="textcontrol">
  <div class="toptextbutton">
  <span class="missiontext" style="text-align: left;"
    >${missiontextinput.value}</span
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
                  </button>
                </div>
                </div>
                <div class="missiontime">
    <p>Süre: <span class="time"> <span>${timeconverterhour}</span>.<span>${timeconvertermin}</span>.<span>${timeconvertersec}</span></span><span class="tour"><span>/</span><span>${missiontourinput.value}</span><span> tur</span></span></p>
    <p>Mola Süresi: <span class="breakingtime"> <span>${waitingmin.value}</span><span>dk</span> </span></p>
    <span style="display: none;">${deletethismission}</span>
    <span style="display: none;">${missiontimeinput.value}</span>

  </div>
 </div>
 
  
 `;
  startmission.appendChild(addmissionli);
};
// listedeki elemanı silme ekleme tur ile mola arası geçişi sağlama
var tourcountdown;
var totaltotalmin;
var successbutton;
var finishwrite;
var finishtour;
var finishwaiting;
var waitingcountdown;
var deletethismission = 0;
var crossbutton;
startmission.addEventListener("click", startaddorremove);
finishmission.addEventListener("click", finishaddorremove);
function finishaddorremove(e) {
  crossbutton = e.target;
  if (crossbutton.classList.contains("cross2")) {
    crossbutton.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
}

function startaddorremove(e) {
  successbutton = e.target;
  if (successbutton.classList.contains("check")) {
    startbutton.disabled = false;
    startbutton.style.background = '#1da1f2'
    startbutton.style.cursor = 'pointer';
    startbutton.onmouseenter = function(){
      startbutton.style.background = 'white';
      startbutton.style.color = '#1da1f2'
    }
    startbutton.onmouseleave = function(){
      startbutton.style.background = '#1da1f2';
      startbutton.style.color = 'white'
    }
    delete2.textContent = successbutton.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.previousElementSibling.textContent;
    console.log(delete2.textContent);
    finishwrite =
      successbutton.parentElement.parentElement.previousElementSibling
        .textContent;
    countdowntext.textContent = finishwrite;
    //var writetotaltime = successbutton.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent;
    //var writetotalhour = Math.floor(writetotaltime/60);
    //var writetotalmin = Math.floor(writetotaltime%60);
    countdowntimer.textContent =
      successbutton.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent;
    finishtour =
      successbutton.parentElement.parentElement.parentElement.nextElementSibling
        .firstElementChild.firstElementChild.nextElementSibling
        .firstElementChild.nextElementSibling.textContent;
    console.log(finishtour);
    countdowntour.textContent = finishtour + " tur";
    finishwaiting =
      successbutton.parentElement.parentElement.parentElement.nextElementSibling
        .firstElementChild.nextElementSibling.firstElementChild
        .firstElementChild.textContent;
    waitingcountdown = finishwaiting;
    console.log(waitingcountdown);
    totaltotalmin =
      successbutton.parentElement.parentElement.parentElement.nextElementSibling
        .lastElementChild.textContent;
    tourcountdown = finishtour;
  } else if (successbutton.classList.contains("cross2")) {
    if (delete2.textContent == successbutton.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.previousElementSibling.textContent) {
       startbutton.disabled = true;
       countdowntext.textContent = '';
          countdowntimer.textContent = '00.00.00';
          countdowntour.textContent = '';
          startbutton.style.background = '#aad7f2'
          startbutton.style.cursor = 'auto';
          startbutton.style.color = 'white';
    }
    successbutton.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
  else if(successbutton.classList.contains('settingsicon')){
    customizetext.value = successbutton.parentElement.parentElement.previousElementSibling
    .textContent;
    customizetime.value = successbutton.parentElement.parentElement.parentElement.nextElementSibling
    .lastElementChild.textContent;
    customizetour.value = successbutton.parentElement.parentElement.parentElement.nextElementSibling
    .firstElementChild.firstElementChild.nextElementSibling
    .firstElementChild.nextElementSibling.textContent;
    customizewaiting.value = successbutton.parentElement.parentElement.parentElement.nextElementSibling
    .firstElementChild.nextElementSibling.firstElementChild
    .firstElementChild.textContent;

     missioncustomize.style.opacity = '1';
     missioncustomize.style.zIndex = '1';
    cusbutton.onclick = function(){
      
      missioncustomize.style.opacity = '0';
      missioncustomize.style.zIndex = '-1';
      successbutton.parentElement.parentElement.previousElementSibling
    .textContent=customizetext.value;

    successbutton.parentElement.parentElement.parentElement.nextElementSibling
    .firstElementChild.firstElementChild.textContent=Math.floor(customizetime.value/60)+ '.' + customizetime.value%60 + '.' + '00';
console.log(customizetime.value);
    successbutton.parentElement.parentElement.parentElement.nextElementSibling
    .firstElementChild.firstElementChild.nextElementSibling
    .firstElementChild.nextElementSibling.textContent = customizetour.value;

    successbutton.parentElement.parentElement.parentElement.nextElementSibling
    .firstElementChild.nextElementSibling.firstElementChild
    .firstElementChild.textContent = customizewaiting.value;
    successbutton.parentElement.parentElement.parentElement.nextElementSibling
    .lastElementChild.textContent = customizetime.value;
 
    if (delete2.textContent == successbutton.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.previousElementSibling.textContent) {
     
      console.log('girdi');
      countdowntext.textContent = successbutton.parentElement.parentElement.previousElementSibling
      .textContent;
      countdowntimer.textContent = successbutton.parentElement.parentElement.parentElement.nextElementSibling
      .firstElementChild.firstElementChild.textContent;
      countdowntour.textContent=successbutton.parentElement.parentElement.parentElement.nextElementSibling
      .firstElementChild.firstElementChild.nextElementSibling
      .firstElementChild.nextElementSibling.textContent;
      tourcountdown = countdowntour.textContent;
      totaltotalmin = customizetime.value;
    }
    }
  }
}
// button disabled enabled
startbutton.disabled = true;
startbutton.style.background = '#aad7f2'
startbutton.style.cursor = 'auto';
startbutton.style.color = 'white';

// countdown
var stopstart;
setInterval(kontrol, 100);
var consttotal;
startbutton.onclick = function () {
  
  toursayac = 0;
  sayac = 0;
  planlist.style.opacity = "0";
  planlist.style.zIndex = "-1";
  finishlist.style.opacity = "0";
  finishlist.style.zIndex = "-1";
  startbutton.style.display = "none";
  addmission.style.display = "none";
  stopbutton.style.display = "inline-block";
  consttotal = totaltotalmin;

  stopstart = setInterval(countdown, 1000);
  second = 0;
  sayac = 0;
};
stopbutton.onclick = function () {
  tourcountdown = countdowntour.textContent
  toursayac = 0;
  sayac = 0;
  planlist.style.opacity = "1";
  planlist.style.zIndex = "1";
  finishlist.style.opacity = "1";
  finishlist.style.zIndex = "1";
  second = 0;
  totaltotalmin = consttotal;
  countdowntimer.textContent =
    Math.floor(consttotal / 60) +
    "." +
    Math.floor(consttotal % 60) +
    "." +
    second;
  startbutton.style.display = "inline-block";
  addmission.style.display = "inline-block";
  stopbutton.style.display = "none";
  clearInterval(stopstart);
};
customizecross.onclick = function(){
  missioncustomize.style.opacity = '0';
  missioncustomize.style.zIndex = '-1';
}
var second = 59;
function countdown() {
  if (second == 0 && totaltotalmin != 0) {
    totaltotalmin = Math.floor(totaltotalmin - 1);
    second = 60;
  }
  if (second != 0) {
    second--;
  }
  countdowntimer.textContent =
    Math.floor(totaltotalmin / 60) +
    "." +
    Math.floor(totaltotalmin % 60) +
    "." +
    second;
}
var sayac = 0;
var toursayac = 0;
missionaddsuccess.disabled = true;

function kontrol() {
if (missiontextinput.value != '' && missiontimeinput.value != '' && missiontourinput.value != '' && waitingmin.value != '') {
  missionaddsuccess.disabled = false;

}
else{
  missionaddsuccess.disabled = true;
}




  if (
    tourcountdown != 0 &&
    totaltotalmin == 0 &&
    second == 0 &&
    toursayac == 0
  ) {
    console.log("tur geçti");

    if (tourcountdown != 0) {
      tourcountdown--;
      if (tourcountdown != 0) {
        totaltotalmin = waitingcountdown;
        body.style.background = "#1da1f2";
        startbutton.style.background = "#3b5998";
        stopbutton.style.background = "#3b5998";
        addmission.style.background = "#3b5998";
      }

      countdowntour.textContent = tourcountdown;
      toursayac = 1;
    }
  } else if (
    tourcountdown != 0 &&
    totaltotalmin == 0 &&
    second == 0 &&
    toursayac == 1
  ) {
    if (tourcountdown != 0) {
      body.style.background = "#3b5998";
      startbutton.style.background = "#1da1f2";
      stopbutton.style.background = "#1da1f2";
      addmission.style.background = "#1da1f2";
    }
    totaltotalmin = consttotal;
    toursayac = 0;
  }
  if (totaltotalmin == 0 && second == 0 && tourcountdown == 0) {
    clearInterval(stopstart);
    successbutton.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    startbutton.style.display = "inline-block";
    stopbutton.style.display = "none";
    addmission.style.display = "inline-block";
    planlist.style.opacity = "1";
    planlist.style.zIndex = "1";
    finishlist.style.opacity = "1";
    finishlist.style.zIndex = "1";
    if (sayac == 0) {
      const addmissionli = document.createElement("li");
      addmissionli.classList.add("mission");
      addmissionli.innerHTML = `
      <div class="textcontrol">
      <div class="toptextbutton">
      <span class="missiontext" style="text-align: left;"
        >${finishwrite}</span
      >
      <div class="controlbutton">
                     
                      <button class="cross">
                        <i style="color: red;" id="cross" class="cross2 fa-solid fa-x"></i>
                      </button>
                     
                    </div>
                    </div>
                    <div class="missiontime">
        <p>Süre: <span class="time"> <span>${Math.floor(
          consttotal / 60
        )}</span>.<span>${
        consttotal % 60
      }</span>.<span>00</span></span><span class="tour"><span>/</span><span>${finishtour} </p>
        <p>Mola Süresi: <span class="breakingtime">${
          waitingmin.value
        } dk</span></p>
        <span style="display: none;">${totaltotalmin}</span>
      </div>
     </div>
     
      
     `;
      finishmission.appendChild(addmissionli);
      sayac = 1;
    }
  }
}
