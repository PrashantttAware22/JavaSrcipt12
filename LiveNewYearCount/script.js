let days = document.getElementById("day");
let hours = document.getElementById("hour");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let year = 2027;

updateCountdown();

function updateCountdown() {

  const newYearTime = new Date(`Jan 1,${year} 00:00:00`).getTime();

  // Current time in our computer / System
  // javaScript automatically get this time using Date()
  const now = new Date().getTime();

  const gap = newYearTime - now;

  if (gap <= 0) {
    year++;
    h2.innerText = year ; 
    return ; 
  }

  // Conversion
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days,hours,minutes,seconds
  const RemainingDays = Math.floor(gap / day);
  const Remaininghours = Math.floor((gap % day) / hour);
  const Remainingminutes = Math.floor((gap % hour) / minute);
  const Remainingseconds = Math.floor((gap % minute) / second);

  days.innerText = RemainingDays;
  hours.innerText = Remaininghours;
  minutes.innerText = Remainingminutes;
  seconds.innerText = Remainingseconds;

  
}

setInterval(updateCountdown,1000) ; 
