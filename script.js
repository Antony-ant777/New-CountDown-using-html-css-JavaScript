const countdownContainer = document.querySelector('.countdown-container');
const daysSpan = document.querySelector('#days');
const hoursSpan = document.querySelector('#hours');
const minutesSpan = document.querySelector('#minutes');
const secondsSpan = document.querySelector('#seconds');

const newYearDate = new Date('January 1, 2025 00:00:00');

function updateCountdown() {
  const now = new Date();
  const difference = newYearDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysSpan.textContent = days < 10 ? '0' + days : days;
  hoursSpan.textContent = hours < 10 ? '0' + hours : hours;
  minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
