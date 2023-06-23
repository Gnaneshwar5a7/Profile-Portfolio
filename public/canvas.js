var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var colorArray = ['#66ff66', '#88B04B', '#6B5B95', '#FF6F61', '#34568B', '#ffaa33', '#0076af', '#98aebb', '#ff1100', '#4411aa', 'green', 'blue', 'red', 'white', 'gray', 'pink'];


window.addEventListener('resize', function () {
    init();
})
window.addEventListener('load', function () {

    console.log("hello");

    init();
});

function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function () {
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}




var circleArray = [];

for (var i = 0; i < 4000; i++) {
    var x = Math.random() * (innerWidth - r * 2) + r;
    var y = Math.random() * (innerHeight - r * 2) + r;
    var dx = (Math.random() - 0.1);
    var dy = (Math.random() - 0.1);
    var r = Math.random() * 1 + 0.5;
    circleArray.push(new Circle(x, y, dx, dy, r));
}
function init() {
    var menu = document.getElementById('menu');
    var div1 = document.getElementById('div1');
    var b = document.getElementsByClassName('b');
    var footer = document.getElementById('footer1');
    var r=document.querySelector(":root");
    if (document.body.clientWidth <= 900) {
        // canvas.width = document.body.clientWidth;
        // canvas.height = document.body.clientHeight;
        var theme=this.document.getElementsByName('theme')[1];
        console.log(theme.value)
    changeTheme(theme.value);
        for (i = 0; i < 4; i++) {
            b[i].style.width = '23vw';
        }
        menu.style.display = 'none';
        div1.style.display = 'flex';
        footer.style.flexDirection = 'column';
        r.style.setProperty('--fontsize','10px');
    }
    else {
        for (i = 0; i < 4; i++) {
            b[i].style.width = '100px';
        }
        menu.style.display = 'flex';
        div1.style.display = 'none';
        footer.style.flexDirection = 'row';
        r.style.setProperty('--fontsize','20px');
        var theme=this.document.getElementsByName('theme')[0];
        changeTheme(theme.value);
    }
    footer.style.width = document.body.clientWidth;
    circleArray = [];

    for (var i = 0; i < 4000; i++) {
        var x = Math.random() * (innerWidth - r * 2) + r;
        var y = Math.random() * (innerHeight - r * 2) + r;
        var dx = (Math.random() - 0.25);
        var dy = (Math.random() - 0.25);
        var r = Math.random() * 1 + 0.5;
        circleArray.push(new Circle(x, y, dx, dy, r));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
