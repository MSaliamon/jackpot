let seconds = document.querySelector('#seconds');

let startTime = 60;
let intervalId = setInterval(() => {
  seconds.innerHTML = (startTime < 10) ? '0' + startTime : startTime;

  startTime--;

  if (startTime <= 0) {
    clearInterval(intervalId);
  }
}, 1000)