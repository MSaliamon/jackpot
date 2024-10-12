// // let seconds = document.querySelector('#seconds');
// // let minuts = document.querySelector('#minuts');
// const loaderImg = document.querySelector('.header-cont__loader-img');
// const loaderImg2 = document.querySelector('.header-cont__loader-img2');
// const loaderTextbox = document.querySelector('.header-cont__loader-textbox');
// const loaderText = document.querySelector('.header-cont__loader-textbox-text');
// const loaderPercent = document.querySelector('.header-cont__loader-textbox-persent');

document.addEventListener("DOMContentLoaded", function() {
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let totalSeconds = 9 * 60 + 48; 

    function updateTimer() {
        if (totalSeconds >= 0) {
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;

            minutesElement.textContent = minutes < 10 ? `${minutes}` : minutes;
            secondsElement.textContent = seconds < 10 ? `${seconds}` : seconds;

            totalSeconds--;
        } else {
            clearInterval(timerInterval);
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
});


// let isDragging = false;
// let startX = 0;
// let percent = 0;

// loaderImg2.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   startX = e.clientX;
// });

// document.addEventListener('mousemove', (e) => {
//   if (isDragging) {
//     const rect = loaderImg.getBoundingClientRect();
//     const rect2 = loaderImg2.getBoundingClientRect();
//     const width = rect.width;
//     const x = e.clientX - rect.left;
//     const x2 = e.clientX - rect2.left;
//     const newX2 = Math.max(0, Math.min(x2, width - rect2.width));
//     loaderImg2.style.left = `${newX2}px`;
//     percent = Math.floor((newX2 / width) * 100);
//     loaderPercent.textContent = `${percent}%`;
//   }
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// // Optional: add touch event listeners for mobile devices
// loaderImg2.addEventListener('touchstart', (e) => {
//   isDragging = true;
//   startX = e.touches[0].clientX;
// });

// document.addEventListener('touchmove', (e) => {
//   if (isDragging) {
//     const rect = loaderImg.getBoundingClientRect();
//     const rect2 = loaderImg2.getBoundingClientRect();
//     const width = rect.width;
//     const x = e.touches[0].clientX - rect.left;
//     const x2 = e.touches[0].clientX - rect2.left;
//     const newX2 = Math.max(0, Math.min(x2, width - rect2.width));
//     loaderImg2.style.left = `${newX2}px`;
//     percent = Math.floor((newX2 / width) * 100);
//     loaderPercent.textContent = `${percent}%`;
//   }
// });

// document.addEventListener('touchend', () => {
//   isDragging = false;
// });