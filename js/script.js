class Snowflake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = 0;
        this.alpha = 0;
        this.reset()
    }
    reset() {
        this.x = this.randBetween(0, window.innerWidth);
        this.y = this.randBetween(0, -window.innerHeight);
        this.vx = this.randBetween(-3, 3);
        this.vy = this.randBetween(2, 5);
        this.radius = this.randBetween(1, 4);
        this.alpha = this.randBetween(0.1, 0.9)
    }
    randBetween(min, max) {
        return min + Math.random() * (max - min)
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y + this.radius > window.innerHeight) {
            this.reset()
        }
    }
}

class Snow {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        window.addEventListener("resize", () => this.onResize());
        this.onResize();
        this.updateBound = this.update.bind(this);
        requestAnimationFrame(this.updateBound);
        this.createSnowflakes()
    }
    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height
    }
    createSnowflakes() {
        const flakes = window.innerWidth / 4;
        this.snowflakes = [];
        for (let s = 0; s < flakes; s++) {
            this.snowflakes.push(new Snowflake())
        }
    }
    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let flake of this.snowflakes) {
            flake.update();
            this.ctx.save();
            this.ctx.fillStyle = "#FFF";
            this.ctx.beginPath();
            this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.globalAlpha = flake.alpha;
            this.ctx.fill();
            this.ctx.restore()
        }
        requestAnimationFrame(this.updateBound)
    }
}
new Snow();

var stop = false;

function show_runtime() {
    var newDay = '2023/1/22 00:00:00';
    var countDate = new Date(newDay);
    var now = new Date().getTime();
    gap = countDate - now;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var d = Math.floor(gap / day);
    var h = Math.floor((gap % day) / hour);
    var m = Math.floor((gap % hour) / minute);
    var s = Math.floor((gap % minute) / second);
    if (d, h, m, s < 0) {
        stop = true
    } else {
        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s
    }
}

function newyear() {
    document.getElementById('title').innerText = "Happy Spring Festival";
    document.getElementById('day').innerText = "春";
    document.getElementById('hour').innerText = "节";
    document.getElementById('minute').innerText = "快";
    document.getElementById('second').innerText = "乐"
}
var time = setInterval(() => {
        show_runtime();
        if (stop === true) {
            newyear();
            clearInterval(time)
        }
    },
    1000)