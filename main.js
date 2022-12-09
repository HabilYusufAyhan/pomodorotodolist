// görev 27 satır
const cross = document.querySelectorAll(".cross");
const finishmission = document.querySelector(".finishmission");
const timebutton = document.querySelectorAll('.waitingbuttondiv .minfiveteen');

timebutton[0].onclick = function(){
  timebutton[0].style.transform = 'rotate(10deg)';
  timebutton[1].style.transform = 'rotate(0deg)';
  timebutton[2].style.transform = 'rotate(0deg)';
  timebutton[3].style.transform = 'rotate(0deg)';
}
timebutton[1].onclick = function(){
  timebutton[0].style.transform = 'rotate(0deg)';
  timebutton[1].style.transform = 'rotate(10deg)';
  timebutton[2].style.transform = 'rotate(0deg)';
  timebutton[3].style.transform = 'rotate(0deg)';
}
timebutton[2].onclick = function(){
  timebutton[0].style.transform = 'rotate(0deg)';
  timebutton[1].style.transform = 'rotate(0deg)';
  timebutton[2].style.transform = 'rotate(10deg)';
  timebutton[3].style.transform = 'rotate(0deg)';
}
timebutton[3].onclick = function(){
  timebutton[0].style.transform = 'rotate(0deg)';
  timebutton[1].style.transform = 'rotate(0deg)';
  timebutton[2].style.transform = 'rotate(0deg)';
  timebutton[3].style.transform = 'rotate(10deg)';
}
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



