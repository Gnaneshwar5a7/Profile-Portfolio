{
    var menu1 = document.getElementById('menulist');

    var button = document.getElementById('menu1');
    var div1 = document.getElementById('div1');
    var lines1 = document.getElementById('lines1');

    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');
    var b4 = document.getElementById('b4');
    var b5 = document.getElementById('b5');
    var b6 = document.getElementById('b6');
    var b7 = document.getElementById('b7');
    var b8 = document.getElementById('b8');
    var b9 = document.getElementById('b9');


    var fg = document.getElementsByClassName("foreground")[0];
    var bg = document.getElementsByClassName("background")[0];
    var Ab = document.getElementsByClassName("info")[0];
    var main = document.getElementsByTagName('main')[0];
    var projects = document.getElementsByClassName('projects')[0];
    var cert = document.getElementsByClassName('certifications')[0];
}


// window.addEventListener('load', function () {
    
// });
// function init1() {
//     var menu = document.getElementById('menu');
//     var div1 = document.getElementById('div1');
//     var b = document.getElementsByClassName('b');
//     var footer = document.getElementById('footer1');
//     if (document.body.clientWidth <= 800) {
//         for (i = 0; i < 4; i++) {
//             b[i].style.width = '23vw';
//         }
//         menu.style.display = 'none';
//         div1.style.display = 'flex';
//         footer.style.flexDirection = 'column';
//     }
//     else {
//         for (i = 0; i < 4; i++) {
//             b[i].style.width = '100px';
//         }
//         menu.style.display = 'flex';
//         div1.style.display = 'none';
//         footer.style.flexDirection = 'row';
//     }
// }

var a = 0;
function menuList() {
    if (a == 0) {
        menu1.style.display = 'flex';
        a = 1;
    }
    else {
        menu1.style.display = 'none';
        a = 0;
    }
}
var b = 0;
button.addEventListener('mouseover', function () {
    getfocus();
});

button.addEventListener('mouseout', function () {
    getfocus();
});


function getfocus() {
    if (b == 0) {
        button.style.color = 'blue';
        b = 1;
    }
    else {
        button.style.color = 'white';
        b = 0;
    }
}


b1.addEventListener('click', function () {
    f11();
})

function f11() {
    fg.style.display = "flex";
    bg.style.display = "flex";
    Ab.style.display = "none";
    main.style.paddingTop = '0vh';
    projects.style.display = 'none';
    menu1.style.display = 'none';
    cert.style.display = 'none';

}
b2.addEventListener('click', function () {
    f22();
})
function f22() {
    fg.style.display = "none";
    bg.style.display = "none";
    Ab.style.display = "block";
    projects.style.display = 'none';
    main.style.paddingTop = '9vh';
    menu1.style.display = 'none';
    cert.style.display = 'none';
}
b3.addEventListener('click', function () {
    f33();
})

function f33() {
    fg.style.display = "none";
    bg.style.display = "none";
    Ab.style.display = "none";
    projects.style.display = 'block';
    main.style.paddingTop = '9vh';
    menu1.style.display = 'none';
    cert.style.display = 'none';
}
b4.addEventListener('click', function () {
    f44();
})

function f44() {
    fg.style.display = "none";
    bg.style.display = "none";
    Ab.style.display = "none";
    projects.style.display = 'none';
    main.style.paddingTop = '9vh';
    menu1.style.display = 'none';
    cert.style.display = 'block';
}



b6.addEventListener('click', function () {
    f11();
})

b7.addEventListener('click', function () {
    f22();
})

b8.addEventListener('click', function () {
    f33();
})
b9.addEventListener('click', function () {
    f44();
})


function changeTheme(theme) {
    let themeDocs = [
        {
            theme: 'dark',
            bgc1: 'black',
            bgc2: 'rgb(15, 15, 15)',
            navc: 'rgb(41, 41, 41)',
            tc: 'white',
            tc2: 'gray'
        },
        {
            theme: 'bright',
            bgc1: 'white',
            bgc2: 'gray',
            navc: '#474747',
            tc: 'black',
            tc2: 'rgb(41, 41, 41)'
        },
        {
            theme: 'blue/pink',
            bgc2: '#00539C',
            bgc1: '#030230',
            navc: '#080B3C',
            tc: 'white',
            tc2: 'aqua'
        }
    ]
    var r=document.querySelector(":root");
    themeDocs.forEach(t => {
        console.log(theme,t.theme);
        if(t.theme===theme){
            r.style.setProperty('--bgc1',t.bgc1);
            r.style.setProperty('--bgc2',t.bgc2);
            r.style.setProperty('--navc',t.navc);
            r.style.setProperty('--tc',t.tc);
            r.style.setProperty('--tc2',t.tc2);
        }
    });
}