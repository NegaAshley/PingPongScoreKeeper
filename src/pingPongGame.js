class PingPongGame {
    constructor(newWinningPoints) {
        this._playerOneScore = 0;
        this._playerTwoScore = 0;
        this._isGameWon = false;
        this._winningPoints = newWinningPoints;
    }

    get playerOneScore() {
        return this._playerOneScore;
    }

    set playerOneScore(newPlayerOneScore) {
        this._playerOneScore = newPlayerOneScore;
    }

    get playerTwoScore() {
        return this._playerTwoScore;
    }

    set playerTwoScore(newPlayerTwoScore) {
        this._playerTwoScore = newPlayerTwoScore;
    }

    get winningPoints() {
        return this._winningPoints;
    }

    set winningPoints(newWinningPoints) {
        this._winningPoints = newWinningPoints;
    }

    get isGameWon() {
        return this._isGameWon;
    }

    set isGameWon(newIsGameWon) {
        this._isGameWon = newIsGameWon;
    }

    incrementPlayerOneScore() {
        this.calculateIsGameWon();
        if (this._isGameWon == false) {
            this._playerOneScore++;
        }
    }

    incrementPlayerTwoScore() {
        this.calculateIsGameWon();
        if (this._isGameWon == false) {
            this._playerTwoScore++;
        }
    }

    resetGame() {
        this._playerOneScore = 0;
        this._playerTwoScore = 0;
        this._winningPoints = 10;
        this._isGameWon = false;
    }

    calculateIsGameWon() {
        if (this._playerOneScore >= this._winningPoints || this._playerTwoScore >= this._winningPoints) {
            this._isGameWon = true;
        } else {
            this._isGameWon = false;
        }
        return this._isGameWon;
    }
}