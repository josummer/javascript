const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const messageDisplay = document.querySelector("#message");
// 변하지 않는 변수를 사용할 때 대문자_를 많이 씀
const GAME_TIME = 5;

const API_URL = "https://random-word-api.herokuapp.com/word?number=500";

let words;
//let words = ["banana", "key", "javascript","scalper", "car"]
let score = 0;
let time = 0;
let timeInterval;
let isPlaying = false;
let isReady = false;

init()

//function init(){
//    const res = fetch(API_URL).then(res=>res.json()).then(data=>words = data);
//   console.log(res);
//}

//async await 
async function init(){
    const res = await fetch(API_URL);
    const data = await res.json();
    words = data.filter(item=>item.length < 7);
    isReady = true;
    console.log(words);
    //words = data;
}


wordInput.addEventListener("input", e=>{
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if(typedText.toUpperCase() === currentText.toUpperCase() && isReady){
        addScore();
        setNewWord();
    }
    //console.log(typedText == currentText, typedText, currentText);
})

//게임 종료
function gameover(){
    console.log("game over");
    isPlaying = false;
    clearInterval(timeInterval);
    timeInterval = null;
    messageDisplay.innerText = "GAME OVER";
    score = 0;
}

// 시간 카운트다운
function countDown(){
    //console.log(time);
    time = time - 1;
    timeDisplay.innerText = time;
    if(time === 0){
        gameover();
    }
}

function setNewWord(){
    time = GAME_TIME;
    wordInput.value = "";
    messageDisplay.innerText = "Now Playing!!!";
    // 소수점 버리기 : floor
    const randomIndex = Math.floor(Math.random()*words.length);
    currentWord.innerText = words[randomIndex];

    if(!isPlaying){
        //1000ms = 1초
        timeInterval = setInterval(countDown, 1000);
        isPlaying = true;    
    }
}

function addScore(){
    score = score + 1;
    console.log(score);
    scoreDisplay.innerText = score;
}