import { calendar } from "./calendar.js";

function GetNewYearTime(y) {
    var c = calendar.lunar2solar(y,'01','01');
    var d = `${c.cYear}/${c.cMonth}/${c.cDay}`;
    return d;
}

function GetDate(y) {
    document.getElementById('year').innerHTML = `<span id="title">春节倒计时</span>${y}`;
    var newYear = GetNewYearTime(y)
    var newDay = `${newYear} 00:00:00`;
    return new Date(newDay);
}

var year = new Date().getFullYear();
var countDate = GetDate(year);
var stop = false;

function ShowRuntime() {
    var now = new Date().getTime();
    var gap = countDate - now;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var d = Math.floor(gap / day);
    var h = Math.floor((gap % day) / hour);
    var m = Math.floor((gap % hour) / minute);
    var s = Math.floor((gap % minute) / second);
    if (d, h, m, s < 0) {
        if (d < -7) {
            year += 1;
            countDate = GetDate(year);
            return;
        }
        stop = true;
    } else {
        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;
    }
}

function NewYear() {
    document.getElementById('title').innerText = "Happy Spring Festival";
    document.getElementById('day').innerText = "春";
    document.getElementById('hour').innerText = "节";
    document.getElementById('minute').innerText = "快";
    document.getElementById('second').innerText = "乐"
}
var time = setInterval(() => {
        ShowRuntime();
        if (stop === true) {
            NewYear();
            clearInterval(time);
        }
    },
    1000);