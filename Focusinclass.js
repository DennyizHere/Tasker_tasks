function dayCheck() {
    var day = new Date();
    var x = day.getDay();
    if (x == "2" || x == "4")
        return "1";
    else if (x == "1")
        return "2";
    else if (x == "3")
        return "3";
    else
        return "0";
}

function timeCheck() {
    var day = new Date();
    var returnString = new String();
    returnString = day.getHours() + ":" + day.getMinutes();
    return returnString;
}

function classCheck() {
    var dayCheck = d;
    var timeCheck = t;
    if (d == "1" && t == "12:30")
        return true;
    else if (d == "2" && t == "10:00")
        return true;
    else if ((d == "2" || d == "3") && t == "17:30")
        return true;
}

function focusMode() {
    silentMode('vibrate');
    silentMode('on');
    displayAutoBright(true);
    setBT(false);
    mediaVol(0, false, false);
}

var bright;
var airplane;

if (classCheck()) {
    focusMode();
    airplane = true;
    bright = 10;
}
vibrate(1000);