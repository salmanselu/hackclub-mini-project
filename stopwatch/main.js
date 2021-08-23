const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0; // milli second
var stoptime = true;

function startTimer() {
    if (stoptime === true) {
    stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {

        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        msec = parseInt(msec);

        msec = msec + 10;

        //
        if (msec == 1000) {
            sec = sec + 1;
            msec = 0;
        }
        //
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }
        // some formatting
        // milli secs
        if (msec < 10 || msec == 0) {cms = '0' + String(msec);}
        if(msec < 100 && msec > 10) {cms = msec;}
        else {cms = msec / 10;}


        
        
        timer.innerHTML = hr + ':' + min + ':' + sec + ':' + cms;
        
        setTimeout("timerCycle()", 10);
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00:00';
}

function resetTimer() {
    timer.innerHTML = "00:00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
    msec = 0;
}