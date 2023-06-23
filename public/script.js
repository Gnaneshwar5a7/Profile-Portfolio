{
    var menu1 = document.getElementById('menulist');

    var button = document.getElementById('menu1');
    var div1 = document.getElementById('div1');
    var lines1 = document.getElementById('lines1');


    var fg = document.getElementsByClassName("foreground")[0];
    var bg = document.getElementsByClassName("background")[0];
    var Ab = document.getElementsByClassName("info")[0];
    var main = document.getElementsByTagName('main')[0];
    var projects = document.getElementsByClassName('projects')[0];
    var cert = document.getElementsByClassName('certifications')[0];
}


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
            theme: 'blue',
            bgc2: '#00539C',
            bgc1: '#030230',
            navc: '#080B3C',
            tc: 'white',
            tc2: 'aqua'
        }
    ]
    var r=document.querySelector(":root");
    themeDocs.forEach(t => {
        // console.log(theme,t.theme);
        if(t.theme===theme){
            r.style.setProperty('--bgc1',t.bgc1);
            r.style.setProperty('--bgc2',t.bgc2);
            r.style.setProperty('--navc',t.navc);
            r.style.setProperty('--tc',t.tc);
            r.style.setProperty('--tc2',t.tc2);
        }
    });
}