const loader = document.getElementById("loader");
const progress = document.getElementById("progress");
var count = 0;

const timeID = setInterval(function () {
  count++;

  if (count > 99) {
    clearInterval(timeID);
  }


  loader.style.backdropFilter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
  progress.style.opacity = `${scale(count, 0, 100, 1, 0)}`;
  progress.innerHTML = `${scale(count, 0, 100, 0, 100)}%`;

}, 30);

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}