// listelerin tanımlanması
const startmission = document.querySelector('.startmission');
const finishmission = document.querySelector('.finishmission');
// görev özelliklerinin alınması
const missionaddsuccess = document.querySelector('.success');
const waitingmin = document.querySelector('.waitingmin');
const missiontimeinput = document.querySelector('.missiontimeinput');
const missiontourinput = document.querySelector('.missionnumberinput');
const missiontextinput = document.querySelector('.missiontextinput');
/*countdown barın tanımlanması*/ 
const countdowntimer = document.querySelector('.timer');
const countdowntour = document.querySelector('.choicetour');
const countdowntext = document.querySelector('.choicemission');
//başlat durdur butonunun tanımlanması
const startbutton = document.querySelector('.startbut');
const stopbutton = document.querySelector('.stopbut');
missionaddsuccess.onclick = function(){
  var timeconverterhour = 0 + '0';
  var timeconvertermin = 0 + '0';
  var timeconvertersec = 0 + '0';
  var totaltimemain = missiontimeinput.value;
  if (totaltimemain < 60) {
    if (totaltimemain < 10) {
      timeconvertermin = '0' + totaltimemain;
    }
    else{
      timeconvertermin = totaltimemain;
    }
  }
  else{
    
    
    timeconvertermin = totaltimemain%60;
    if (timeconverterhour<10) {
      timeconverterhour = '0'+Math.floor(totaltimemain/60);
    }
    else{
      timeconverterhour = Math.floor(totaltimemain / 60);
    }
    if (timeconvertermin < 10) {
      timeconvertermin = '0'+ timeconvertermin;
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
    <p>Süre: <span class="time"> <span>${timeconverterhour}</span>.<span>${timeconvertermin}</span>.<span>${timeconvertersec}</span></span><span class="tour"><span>/</span><span>${missiontourinput.value} tur</p>
    <p>Mola Süresi: <span class="breakingtime">${waitingmin.value} dk</span></p>
    <span style="display: none;">${totaltimemain}</span>
  </div>
 </div>
 
  
 `;
 startmission.appendChild(addmissionli);

}
// listedeki elemanı silme ekleme
var totaltotalmin;
var successbutton;
var finishwrite;
var finishtour;
var finishwaiting;
startmission.addEventListener("click", startaddorremove);
finishmission.addEventListener("click", finishaddorremove);
function finishaddorremove(e){
  crossbutton = e.target;
  if (crossbutton.classList.contains("cross2")) {
    crossbutton.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
}
function startaddorremove(e){
  successbutton = e.target;
  if (successbutton.classList.contains("check")) {
    finishwrite = successbutton.parentElement.parentElement.previousElementSibling.textContent;
    countdowntext.textContent = finishwrite;
    //var writetotaltime = successbutton.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.textContent;
    //var writetotalhour = Math.floor(writetotaltime/60);
    //var writetotalmin = Math.floor(writetotaltime%60);
    countdowntimer.textContent = successbutton.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent;
    finishtour = successbutton.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent;
    countdowntour.textContent = finishtour;
    finishwaiting = successbutton.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.textContent;
    totaltotalmin = successbutton.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.textContent;
  
  }
  else if(successbutton.classList.contains("cross2")){
    successbutton.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
}
// countdown
var stopstart

var consttotal;
startbutton.onclick = function(){
  consttotal = totaltotalmin;
  setInterval(kontrol , 100);
  stopstart = setInterval(countdown,1000);
  second = 0;
  sayac = 0;
}
stopbutton.onclick = function(){
  clearInterval(stopstart);
}
var second;
function countdown(){
  
  
 
  if (second == 0 && totaltotalmin != 0) {
    totaltotalmin = Math.floor((totaltotalmin)-1);
    second = 59;
  }
  countdowntimer.textContent = Math.floor(totaltotalmin/60) + '.' + Math.floor(totaltotalmin%60) + '.' + second;
  second--;
  
  
  
}
var sayac = 0;
function kontrol(){
  if (totaltotalmin == 0 && second == -1) {
    clearInterval(stopstart);
    successbutton.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
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
        <p>Süre: <span class="time"> <span>${Math.floor(consttotal/60)}</span>.<span>${consttotal%60}</span>.<span>00</span></span><span class="tour"><span>/</span><span>${finishtour} </p>
        <p>Mola Süresi: <span class="breakingtime">${waitingmin.value} dk</span></p>
        <span style="display: none;">${totaltotalmin}</span>
      </div>
     </div>
     
      
     `;
     finishmission.appendChild(addmissionli);
     sayac = 1;
    }
    }
   
}
