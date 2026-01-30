let topleft = document.querySelector(".top-left-pannel");
let topRight = document.querySelector(".top-right-pannel");
let bottomleft = document.querySelector(".bottom-left-pannel");
let bottomRight = document.querySelector(".bottom-right-pannel");
let spanLevel = document.getElementById("level"); 
let result = document.querySelector("#result") ; 
let startBtnMob = document.querySelector("#start") ;

let highestScore = 0 ; 

let buttons = ["yellow","blue","green", "red"] ; 
let gameSeq = [] ;
let userSeq = [] ;
let gameStart = false ;

let level = 0 ;

startBtnMob.addEventListener("click" , (event)=> {
        if(gameStart == false) {
            console.log("game is start") ;
            gameStart = true ; 

            levelUp() ;
    }
}) ;

document.addEventListener("keypress" , (event)=> {
    if(event.key === "Enter") {
        if(gameStart == false) {
            console.log("game is start") ;
            gameStart = true ; 

            levelUp() ;
        }
    }
}) ;

function gameflash(btn) {
    btn.classList.add("gameflash") ;
    setTimeout(()=> {
        btn.classList.remove("gameflash") ; 
    },250); 
}

function userflash(btn) {
    btn.classList.add("userflash") ;
    setTimeout(() => {
        btn.classList.remove("userflash") ; 
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    spanLevel.innerText = level ;


    let randomIdx = Math.floor(Math.random() * 3+1) ;
    let randColor = buttons[randomIdx]; 

    /* Colors add within gameSeq[] */
    gameSeq.push(randColor) ; 

    let randBtn = document.querySelector(`.${randColor}`) ; 
    gameflash(randBtn) ;
}

function btnPressed() {
    let btn = this ;
    userflash(this) ; 

    /* usercolor when user pressed a button */
    userColor = btn.getAttribute("id") ; 
    userSeq.push(userColor) ; 

    checkAns(userSeq.length - 1) ; 
}

let allBtns = document.querySelectorAll(".btn") ;
for(btn of allBtns) {
    btn.addEventListener("click" , btnPressed) ; 
}


function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp,1000) ; 
        }
    } else {
        
        alert(`Game Over your Score was: ${level}! Press Enter to Restart`);
        resetGame();
    }
}

function resetGame() {
     if(level > highestScore) {
        highestScore = level ; 
        result.innerText = `HighestScore : ${highestScore}` ; 
    }
    gameSeq = [];
    userSeq = [];
    level = 0;
    gameStart = false;
    spanLevel.innerText = 0;
}
