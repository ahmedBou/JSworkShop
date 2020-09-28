let testButtonEle = document.getElementById('test-button');
// console.log(testButtonEle);
let guessInputEle = document.getElementById('number-guessed');
let resultMsgEle = document.getElementById('results-msg');
let matchMsgEle = document.getElementById('match-msg');
let noMatchMsgEle = document.getElementById('no-match-msg');
let numberToGuessEle = document.getElementById('number-to-guess');

testButtonEle.addEventListener("click", testMatch);

function testMatch(e){
    // console.log("clicked!");
    matchMsgEle.style.display = 'none';
    noMatchMsgEle.style.display = 'none';
    resultMsgEle.style.display ='none';
    let numberGuessed = parseInt(guessInputEle.value);
    if(!isNaN(numberGuessed) && numberGuessed> 0 && numberGuessed<= 10){
        resultMsgEle.style.display = 'block';
        let numberToGuess = Math.floor(Math.random()*10+1);
        if(numberGuessed == numberToGuess){
            // console.log("Matched!");
            matchMsgEle.style.display = 'inline';
        }
        else{
            // console.log("Not Matched");
            noMatchMsgEle.style.display = 'inline';
        }
        numberToGuessEle.innerText = numberToGuess;
        // console.log("Number guessed:", numberGuessed);
        // console.log("Number to match:", numberToGuess);
    }
}

