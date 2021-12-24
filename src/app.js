const newPingPongGame = new PingPongGame(10);
const resetButton = document.querySelector('#resetButton');
const playerOnePointButton = document.querySelector('#playerOnePointButton');
const playerTwoPointButton = document.querySelector('#playerTwoPointButton');
const playerOneScoreSpan = document.querySelector('#playerOneScoreSpan');
const playerTwoScoreSpan = document.querySelector('#playerTwoScoreSpan');

resetButton.addEventListener('click', function () {
    newPingPongGame.resetGame();
    updateScoreSpans();
});

playerOnePointButton.addEventListener('click', function () {
    newPingPongGame.incrementPlayerOneScore();
    updateScoreSpans();
});

playerTwoPointButton.addEventListener('click', function () {
    newPingPongGame.incrementPlayerTwoScore();
    updateScoreSpans();
});

function updateScoreSpans() {
    playerOneScoreSpan.innerText = newPingPongGame.playerOneScore;
    playerTwoScoreSpan.innerText = newPingPongGame.playerTwoScore;
}