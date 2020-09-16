//TASK TIME
timeNow = function() {
    const today = new Date();
    let hour = today.getUTCHours();
    let min = today.getUTCMinutes();
    let sec = today.getUTCSeconds();
    const clock = document.getElementById('clock');
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    clock.textContent = `${hour} : ${min} : ${sec}`;
};

setInterval(timeNow, 1000);