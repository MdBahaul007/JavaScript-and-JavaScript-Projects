const newYears="1 Jan 2023";

const day1=document.getElementById("day")
const hour1=document.getElementById("hour")
const minute1=document.getElementById("minute")
const second1=document.getElementById("second")

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const tot_seconds = (newYearsDate-currentDate)/1000;

    const days = Math.floor(tot_seconds/3600/24);
    const hours = Math.floor(tot_seconds/3600)%24;
    const minutes = Math.floor(tot_seconds/60)%60;
    const seconds = Math.floor(tot_seconds)%60;

    // console.log(days,hours,minutes,seconds);


    day1.innerHTML=formatTime(days);
    hour1.innerHTML=formatTime(hours);
    minute1.innerHTML=formatTime(minutes);
    second1.innerHTML=formatTime(seconds);



}
function formatTime(time){
    return time<10 ?(`0${time}`): time;
}
countDown();
setInterval(countDown,1000);