const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const rockBtn = document.querySelector('.rbtn');
const paperBtn = document.querySelector('.pbtn');
const scissorBtn = document.querySelector('.sbtn');
const result = document.querySelector('.result');
const rock = '1.png';
const paper = '2.png';
const scissors = '3.png';

const computerTurn = function() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    computer.src = `${randomNum}.png`;
}

const displayResult = function(playerChoice) {
    const playerSrc = player.src.split('/').pop(); // Get the file name
    const computerSrc = computer.src.split('/').pop();
    if (playerSrc === computerSrc) {
        result.textContent = "It's a tie!";
    } else if (
        (playerChoice === rock && computerSrc === scissors) ||
        (playerChoice === scissors && computerSrc === paper) ||
        (playerChoice === paper && computerSrc === rock)
    ) {
        result.textContent = 'You win!';
    } else {
        result.textContent = 'You lose!';
    }
};



rockBtn.addEventListener('click', function () {
    computer.src = 'loading.png'
    result.textContent = '';
    player.src ='1.png';
    const choice = rock;

    setTimeout(() => {
        computerTurn();
        displayResult(choice);
        },400);
});

paperBtn.addEventListener('click', function () {
    computer.src = 'loading.png'
    result.textContent = '';
    player.src ='2.png';
    const choice = paper;

    setTimeout(() => {
        computerTurn();
        displayResult(choice);
    },400);
});

scissorBtn.addEventListener('click', function () {
    computer.src = 'loading.png'
    result.textContent = '';
    player.src ='3.png';
    const choice = scissors;

    setTimeout(() => {
        computerTurn();
        displayResult(choice);
    },400);
});