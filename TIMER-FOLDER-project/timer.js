function clock(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ft = document.getElementById('format');

    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
   
    if (h >= 12){
        ft.innerHTML = 'PM'
    }

    else{
        ft.innerHTML = 'AM'
    };

    if(h >= 12) {
        h = h - 12;
    }
};

setInterval(clock, 1000)