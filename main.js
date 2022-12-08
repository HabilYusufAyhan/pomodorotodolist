// görev 27 satır
const time = document.querySelectorAll('.time');
const missiontext = document.querySelectorAll(".missiontext");
const cross = document.querySelectorAll(".cross");
const mission = document.querySelectorAll(".mission");
const missiontime = document.querySelectorAll(".missiontime");
const controlbutton = document.querySelectorAll(".controlbutton");
const startmission = document.querySelectorAll(".startmission");
const finishmission = document.querySelector(".finishmission");
cross.forEach(function (tick) {
  tick.onclick = function () {
    if (tick.classList.contains("fa-x")) {
      console.log("tıklandı");
      tick.parentElement.parentElement.parentElement.parentElement.remove();
      const addmissionli = document.createElement("li");
      addmissionli.classList.add("mission");
      newtext = tick.parentElement.parentElement.parentElement.textContent;
      totaltime =
        tick.parentElement.parentElement.parentElement.parentElement
          .lastElementChild.firstElementChild.firstElementChild.textContent;
        
          newtour =
        tick.parentElement.parentElement.parentElement.parentElement
          .lastElementChild.firstElementChild.lastElementChild.textContent;
      newbreaking =
        tick.parentElement.parentElement.parentElement.parentElement
          .lastElementChild.lastElementChild.lastElementChild.textContent;
       
      addmissionli.innerHTML = `
 <div class="textcontrol">
 <span class="missiontext" style="text-align: left; max-width: 320px;"
   >${newtext}</span
 >
</div>
 <div class="missiontime">
   <p>Süre: <span class="time">${totaltime}</span><span class="tour">${newtour}</span></p>
   <p>Mola Süresi: <span class="breakingtime">${newbreaking}</span></p>
 </div>
`;
      finishmission.appendChild(addmissionli);
    }
  };
  
});



