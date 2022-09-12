const timeElement = document.getElementById("time");

const start= document.getElementById("start") ;

const stop = document.getElementById("stop") ;

const reset = document.getElementById("reset") ;

let elapsed = 0;

let intervalID = null ;

function updateTime() {
    const ms = elapsed % 1000;
    const s = Math.floor(elapsed / 1000);
    const m =Math.floor(elapsed / (1000 * 60));
    const h =Math.floor(elapsed / (1000*60*60));
    
    const msStr = ms.toString().padStart(2,'0');
    const sStr = s.toString().padStart(2,'0');
    const mStr = m.toString().padStart(2,'0');
    const hStr = h.toString().padStart(2,'0');
    
    timeElement.innerHTML = `${hStr} : ${mStr} : ${sStr}.${msStr} `;
   
}

document.getElementById("stop").disabled = true;
document.getElementById("reset").disabled = true;

start.addEventListener("click", function(e) {
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = true;
    if (intervalID !== null){ return;}
  let pre = new Date();
  intervalID = setInterval(function() {
      const now = new Date();
      elapsed += now - pre;
      pre = now ;
      updateTime()
  },10);
});


stop.addEventListener("click", function(e) {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
  clearInterval(intervalID) ; 
  intervalID = null;
});


reset.addEventListener("click", function(e) {
    document.getElementById("stop").disabled = false;
   elapsed = 0 ; 
   updateTime();
});