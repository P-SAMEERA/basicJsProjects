const delay = setInterval(showTime,1000);
function showTime(){
        var date = new Date();
        var hrs = date.getHours();
        var mints = date.getMinutes();
        var secs = date.getSeconds();
        var session = "AM";
        if (hrs==0){
            hrs = 12; //12 hrs format
        }
        if(hrs==12){
            session = "PM"
        }
        if(hrs>12){
            hrs =hrs-12  // 12 hrs format
            session = "PM"
        }
    //   Ternary operator reduces the code length. cauz simple if will be a bit lengthy.
        hrs = (hrs<10)?"0"+hrs:hrs
        mints = (mints<10)?"0"+mints:mints
        secs = (secs<10)?"0"+secs:secs
        document.getElementById("clock").innerHTML = hrs+":"+mints+":"+secs+" "+session
    }