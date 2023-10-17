var hitrn = 0;
var timer = 60;
var score = 0; // Set the initial score to 0

function makeBubbble(){
    var clutter = "";

    for(var i = 1; i <= 64; i++){
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#btmcontainer").innerHTML = clutter;
}

function runTime(){
    var timeint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }else{
            clearInterval(timeint); // Corrected the typo here, changed "|" to "||"
            document.querySelector("#btmcontainer").innerHTML = `<h1>Game Over Press F5</h1>`;
        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function upscore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#btmcontainer").addEventListener("click", function(arpit){
    var click = Number(arpit.target.textContent);
    if(click === hitrn){
        upscore();
        makeBubbble();
        getNewHit();
    }
})

getNewHit();
makeBubbble();
runTime();
score = 0; // Set the score to 0 initially
