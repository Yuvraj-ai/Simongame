let gameseq = [];
let userseq = [];
let btns = ["red","yellow","green" ,"purple"];
let started = false;
let lvl = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started == false){
    console.log ("game started");
    started = true;

    lvlUp();
    }

    

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },500)
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250)
}


function lvlUp() {
    userseq = [];
    lvl++;

    h3.innerText = `Level ${lvl}`;

    let randidx = Math.floor(Math.random() * 3);
    let randColor = btns[randidx];
    let randbtn = document.querySelector(`.${randColor}`);
    /* The code `console.log(randidx); console.log(randColor); console.log(randbtn);` is logging the
    randomly generated index, color, and button element for the next step in the game sequence. */
    /* `console.log(randidx);` is logging the randomly generated index that determines which color
    button will be flashed in the game sequence. This helps in tracking and debugging the game logic
    to ensure that the correct color is selected for the player to follow. 
    this is written by an ai documenter , goddam this is so cool*/
    gameseq.push(randColor);
    console.log(gameseq);

    gameFlash(randbtn);
}

function chkAns(idx){
    console.log("current lvl:", lvl);
    // let idx = lvl  -1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(lvlUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${lvl}</b> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = 'white';
        },150);
        reset();
    }

}

function btnPress() {
    console.log(("btn was pressed"),this);
    let btn  = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    chkAns(userseq.length -  1);
}

let allBtns  =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    lvl = 0;

}