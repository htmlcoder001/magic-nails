$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
    });
});

const hours = document.querySelectorAll('.hours');
const minutes = document.querySelectorAll('.minutes');
const seconds = document.querySelectorAll('.seconds');
const timeSlider = document.querySelectorAll('.time-now');

timeSlider.forEach(item => {
    item.innerText = new Date().toLocaleDateString();
})

let time = new Date().setMinutes(new Date().getMinutes() + 10);

function couts() {
    let now = new Date();
    let gap = time - now;

    let hour = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minute = Math.floor(gap / 1000 / 60) % 60;
    let second = Math.floor(gap / 1000) % 60;

    if (hour < 10) {
        hours.forEach(item => {
            item.innerText = `0${hour}`
        })
    } else {
        hours.forEach(item => {
            item.innerText = hour
        })
    }

    if (minute < 10) {
        minutes.forEach(item => {
            item.innerText = `0${minute}`
        })
    } else {
        minutes.forEach(item => {
            item.innerText = minute
        })
    }

    if (second < 10) {
        seconds.forEach(item => {
            item.innerText = `0${second}`
        })
    } else {
        seconds.forEach(item => {
            item.innerText = second
        })
    }
}

setInterval(couts, 1000);