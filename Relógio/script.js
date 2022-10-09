function updateClock(){
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    var secondsDeg = ((360 / 60) * seconds) - 90;
    var minutesDeg = ((360 / 60) * minutes) - 90;
    var hoursDeg = ((360 / 12) * hours) - 90;

    document.querySelector('.p_s').style.transform = `rotate(${secondsDeg}deg)`;
    document.querySelector('.p_m').style.transform = `rotate(${minutesDeg}deg)`;
    document.querySelector('.p_h').style.transform = `rotate(${hoursDeg}deg)`;

    document.querySelector('.digital').innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`
}

function fixZero(interval){
    return interval < 10 ? `0${interval}` : interval;
}

setInterval(updateClock, 1000);
updateClock();