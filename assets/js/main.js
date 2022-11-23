let count = document.getElementById("count");
let counter = 11;

function timer() {
    counter -= 1;  
    if (counter >= 0) {
        count.innerHTML = counter;
    } else {
        clearInterval(timerFunction);
        document.querySelector("p").innerHTML = "";
        count.innerHTML = "";
    }
};
let timerFunction = setInterval(timer, 1000);
window.onload = timer();