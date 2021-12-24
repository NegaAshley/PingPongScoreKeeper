describe("When the pingPongGame constructor is called", function () {
    it("should create a ping pong game with given arguments.", function () {
        let newPingPongGame = new PingPongGame(10);
        expect(newPingPongGame._winningPoints).toBe(10);
    });
    it("should set the value of playerOneScore to zero.", function () {
        let newPingPongGame = new PingPongGame(10);
        expect(newPingPongGame._playerOneScore).toBe(0);
    });
    it("should set the value of playerTwoScore to zero.", function () {
        let newPingPongGame = new PingPongGame(10);
        expect(newPingPongGame._playerTwoScore).toBe(0);
    });
});

describe("When the getter method for playerOneScore is called", function () {
    it("should return the value of playerOneScore.", function () {
        let newPingPongGame = new PingPongGame(10);
        let testValue = newPingPongGame._playerOneScore;
        expect(testValue).toBe(0);
    });
})

describe("When the setter method for playerOneScore is called", function () {
    it("should set the value of playerOneScore.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerOneScore = 1;
        expect(newPingPongGame._playerOneScore).toBe(1);
    });
});

describe("When the getter method for playerTwoScore is called", function () {
    it("should return the value of playerTwoScore.", function () {
        let newPingPongGame = new PingPongGame(10);
        let testValue = newPingPongGame._playerTwoScore;
        expect(testValue).toBe(0);
    });
})

describe("When the setter method for playerTwoScore is called", function () {
    it("should set the value of playerTwoScore.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerTwoScore = 1;
        expect(newPingPongGame._playerTwoScore).toBe(1);
    });
});

describe("When the getter method for winningPoints is called", function () {
    it("should return the value of winningPoints.", function () {
        let newPingPongGame = new PingPongGame(11);
        let testValue = newPingPongGame._winningPoints;
        expect(testValue).toBe(11);
    });
})

describe("When the setter method for winningPoints is called", function () {
    it("should set the value of winningPoints.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._winningPoints = 5;
        expect(newPingPongGame._winningPoints).toBe(5);
    });
});

describe("When incrementPlayerOneScore is called", function () {
    it("should increment playerOneScore by one.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame.incrementPlayerOneScore();
        expect(newPingPongGame.playerOneScore).toBe(1);
    });
    it("should not increment if isGameWon is true.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._isGameWon = true;
        newPingPongGame._playerOneScore = 10;
        newPingPongGame.incrementPlayerOneScore();
        expect(newPingPongGame.playerOneScore).toBe(10);
    });
});

describe("When incrementPlayerTwoScore is called", function () {
    it("should increment playerTwoScore by one.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame.incrementPlayerTwoScore();
        expect(newPingPongGame.playerTwoScore).toBe(1);
    });
    it("should not increment if isGameWon is true.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._isGameWon = true;
        newPingPongGame._playerTwoScore = 10;
        newPingPongGame.incrementPlayerOneScore();
        expect(newPingPongGame.playerTwoScore).toBe(10);
    });
});

describe("When resetGame is called", function () {
    it("should set the value of playerOneScore to zero.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame.incrementPlayerOneScore();
        newPingPongGame.resetGame();
        expect(newPingPongGame.playerOneScore).toBe(0);
    });
    it("should set the value of playerTwoScore to zero.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame.incrementPlayerTwoScore();
        newPingPongGame.resetGame();
        expect(newPingPongGame.playerTwoScore).toBe(0);
    });
    it("should create set winning points to ten.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._winningPoints = 12;
        newPingPongGame.resetGame();
        expect(newPingPongGame._winningPoints).toBe(10);
    });
    it("should set isGameWon to false", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._isGameWon = true;
        newPingPongGame.resetGame();
        expect(newPingPongGame._isGameWon).toBe(false);
    });
});

describe("When calculateIsGameWon is called", function () {
    it("should return true if the game is won by player one.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerOneScore = 10;
        let isGameWon = newPingPongGame.calculateIsGameWon();
        expect(isGameWon).toBe(true);
    });
    it("should return true if the game is won by player two.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerTwoScore = 10;
        let isGameWon = newPingPongGame.calculateIsGameWon();
        expect(isGameWon).toBe(true);
    });
    it("should return false if the game is not won by player one.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerOneScore = 8;
        let isGameWon = newPingPongGame.calculateIsGameWon();
        expect(isGameWon).toBe(false);
    });
    it("should return false if the game is not won by player two.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerTwoScore = 8;
        let isGameWon = newPingPongGame.calculateIsGameWon();
        expect(isGameWon).toBe(false);
    });
    it("should set the isGameWon value to true if the game is won.", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerOneScore = 10;
        newPingPongGame.calculateIsGameWon();
        let isGameWon = newPingPongGame._isGameWon;
        expect(isGameWon).toBe(true);
    });
});

