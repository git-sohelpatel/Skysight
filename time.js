var hrs = document.getElementById("hour");
var min = document.getElementById("minute");
var sec = document.getElementById("second");
var session = document.getElementById("session");


var clock = setInterval(
    function time(){
        var date_now = new Date();
        var hrs = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();
if(hrs>=12){
            session.innerText = "PM"
        }else{
            session.inneText = "AM"
        } if(hrs>12){
            hrs = hrs-12;
        }
        
        if(hrs < 10){
            hrs = "0" + hrs;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }

        hour.innerText = hrs;
        minute.innerText = min;
        second.innerText = sec;

    }
)