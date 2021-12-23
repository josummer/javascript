const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeisplay = document.querySelector("#time");
const messageDisplay = document.querySelector("#message");

let words = ["banana", "key", "javascript","scalper", "car"]
let score = 0;


wordInput.addEventListener("input", e=>{
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if(typedText.toUpperCase() === currentText.toUpperCase()){
        addScore();
        setNewWord();
    }
    //console.log(typedText == currentText, typedText, currentText);

})

function setNewWord(){
    wordInput.value = "";
    messageDisplay.innerText = "Now Playing!!!";
    // 소수점 버리기 : floor
    const randomIndex = Math.floor(Math.random()*words.length);
    currentWord.innerText = words[randomIndex];
}

function addScore(){
    score = score + 1;
    console.log(score);
    scoreDisplay.innerText = score;
}