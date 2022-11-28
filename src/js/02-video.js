import myVmeo from "@vimeo/player";
import myTrot from "lodash.throttle";
const myfrAME = document.querySelector('iframe');
const pleerV = new myVmeo(myfrAME);
let neccTime;

checkNecctime(localStorage.getItem("videoplayer-current-time"));

pleerV.on('timeupdate', myTrot((data) => {
   localStorage.setItem("videoplayer-current-time", data.seconds)
}, 1000))

pleerV.setCurrentTime(neccTime);


function checkNecctime(tseconds) {
    if (tseconds) {
        neccTime = localStorage.getItem("videoplayer-current-time");
    } else {
        neccTime = 0;
            }
}
