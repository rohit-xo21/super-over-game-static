let team1Balls = document.querySelectorAll("#over-team1>.ball");
let team2Balls = document.querySelectorAll("#over-team2>.ball");
let strikeButton = document.getElementById("strike");
let resetButton = document.getElementById("reset");
let team1Score = document.getElementById("score-team1");
let team2Score = document.getElementById("score-team2");
let team1Wicket = document.getElementById("wickets-team1");
let team2Wicket = document.getElementById("wickets-team2");

let winAudio= new Audio("http://bit.ly/so-crowd-cheer");
let strikeAudio=new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3");


let t1w = 0;
let t1s = 0;
let t2w = 0;
let t2s = 0;
let b1 = 0;
let b2 = 0;
let over = 1;

var possibleOutcomes = [0,1,2,3,4,6,"W"];

function play(){
    strikeAudio.pause();
    strikeAudio.currentTime=0;
    strikeAudio.play();

    
    let randomIdx = Math.floor(Math.random()*possibleOutcomes.length);
    let randomEle = possibleOutcomes[randomIdx];

    if(over==1){
        let targetEle = team1Balls[b1];
        b1++;
        targetEle.innerHTML=randomEle;
        if(randomEle=='W'){
            t1w++;
        } else{
            t1s+=randomEle;
        }

        if(t1w==2 || b1==6){
            over=2;
        }

    }else{
        let targetEle=team2Balls[b2];
        b2++;
        targetEle.innerText=randomEle;
        if(randomEle=='W'){
            t2w++;
        }else{
            t2s+=randomEle;
        }
        if(t2w==2 || b2==6 || t2s>t1s){
            gameOver();
        }
    }
    updateScoreBoard();
}

function gameOver() {
    if(t1s>t2s){
        setTimeout(function(){alert("IND WINS");},1000)
    }else if(t2s>t1s){
        setTimeout(function(){alert("PAK WINS")},1000)
    }else{
        setTimeout(function(){alert("DRAW")},1000)
    }
    winAudio.play()
}

function updateScoreBoard(){
    team1Score.innerText=t1s;
    team2Score.innerText=t2s;
    team2Wicket.innerText=t2w;
    team1Wicket.innerText=t1w;
}

function resetGame(){
    window.location.href="index.html"
}