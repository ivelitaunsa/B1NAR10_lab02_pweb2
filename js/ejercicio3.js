const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const aqp = '15 Aug 2022';

function countTimer(){
  const aqpDate = new Date(aqp);
  const ahora = new Date();

  const totalSeconds = (aqpDte - ahora) / 1000;

  const daysT = Math.floor(totalSeconds / 3600 / 24);
  const hoursT = Math.floor(totalSeconds / 3600) % 24; 
  const minsT = Math.floor(totalSeconds / 60) % 60;
  const secondsT = Math.floor(totalSeconds % 60);

}

