// görev 27 satır
const missiontext = document.querySelectorAll(".missiontext");
const cross = document.querySelector(".cross");
const mission = document.querySelector('.mission');
const missiontime = document.querySelectorAll('.missiontime')
mission.addEventListener('click',silme)
missiontext.forEach(function(text) {
    console.log(text.textContent.length);
    if (text.textContent.length > 28) {
        text.style.fontSize = '20px'
    }
    if (text.textContent.length > 33) {
        text.style.fontSize = '15px'
    }
    if (text.textContent.length>42) {
        text.style.fontSize = '13px'
    }
    if (text.textContent.length>48) {
        text.style.fontSize = '10px'
    }
  
});
function silme(e) {
   
        const tiklanilan = e.target;
        if (tiklanilan.classList.contains('cross')) {
            console.log('tiklandi');
        }
      
}


