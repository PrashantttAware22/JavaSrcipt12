let hourArrow = document.querySelector(".hour");
let minuteArrow = document.querySelector(".minute");
let secondArrow = document.querySelector(".second");

function updateClock() {
  const now = new Date() ;

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = (hour / 12) * 360 ; 
  hourArrow.style.transform = `rotate(${hourDeg}deg)` ;
  const minuteDeg = (minute / 60) * 360 ; 
  minuteArrow.style.transform = `rotate(${minuteDeg}deg)` ;
  const secondDeg = (second / 60) * 360 ; 
  secondArrow.style.transform = `rotate(${secondDeg}deg)` ;
}

updateClock(); //updated current position not thier original position (within a HMTL AND CSS) ; 

setInterval(updateClock,1000) ;
