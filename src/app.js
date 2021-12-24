const defaultWinPoints = 10;
const newPingPongGame = new PingPongGame(defaultWinPoints);
const resetButton = document.querySelector('#resetButton');
const playerOnePointButton = document.querySelector('#playerOnePointButton');
const playerTwoPointButton = document.querySelector('#playerTwoPointButton');
const playerOneScoreSpan = document.querySelector('#playerOneScoreSpan');
const playerTwoScoreSpan = document.querySelector('#playerTwoScoreSpan');
const winningPointsSelect = document.querySelector('#winningPointsSelect');

resetButton.addEventListener('click', function () {
    newPingPongGame.resetGame();
    updateScoreSpans();
    winningPointsSelect.value = newPingPongGame.winningPoints;
});

playerOnePointButton.addEventListener('click', function () {
    newPingPongGame.incrementPlayerOneScore();
    updateScoreSpans();
});

playerTwoPointButton.addEventListener('click', function () {
    newPingPongGame.incrementPlayerTwoScore();
    updateScoreSpans();
});

winningPointsSelect.addEventListener('input', function () {
    newPingPongGame.winningPoints = winningPointsSelect.value;
});

function updateScoreSpans() {
    playerOneScoreSpan.innerText = newPingPongGame.playerOneScore;
    playerTwoScoreSpan.innerText = newPingPongGame.playerTwoScore;
}