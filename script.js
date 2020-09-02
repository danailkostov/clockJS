const hoursArr = document.querySelector('.hours-arrow');
const minArr = document.querySelector('.minutes-arrow');
const secArr = document.querySelector('.seconds-arrow');

function setTime() {
  let date = new Date();
  let hours = date.getHours() % 12 || 12;
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hoursDeg = hours * 30;
  let minDeg = minutes * 6;
  let secDeg = seconds * 6;

  hoursArr.style.transform = `rotate(${hoursDeg}deg)`;
  minArr.style.transform = `rotate(${minDeg}deg)`;
  secArr.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(setTime, 1000);

setTime();

//transform: rotate(), transform-origin, setInterval, Date object