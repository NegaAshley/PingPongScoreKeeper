xdescribe("When the +1 Player 1 button is pressed", function () {
    it("should trigger a click event", function () {
        document.querySelector("#playerOnePointButton").click();
        expect("click").toHaveBeenTriggeredOn("#playerOnePointButton");
    });
    it("should call incrementPlayerOneScore", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerOneScore = 1;
        document.querySelector("#playerOnePointButton").click();
        let result = newPingPongGame._playerOneScore;
        expect(result).toBe(2);
    });
});

xdescribe("When the +1 Player 2 button is pressed", function () {
    it("should trigger a click event", function () {
        document.querySelector("#playerTwoPointButton").click();
        expect("click").toHaveBeenTriggeredOn("#playerOnePointButton");
    });
    it("should call incrementPlayerTwoScore", function () {
        let newPingPongGame = new PingPongGame(10);
        newPingPongGame._playerTwoScore = 1;
        document.querySelector("#playerTwoPointButton").click();
        let result = newPingPongGame._playerTwoScore;
        expect(result).toBe(2);
    });
});

xdescribe("When the reset button is pressed", function () {
    it("should trigger a click event", function () {
        document.querySelector("#resetButton").click();
        expect("click").toHaveBeenTriggeredOn("#resetButton");
    });
    it("should call resetGame", function () {
        let newPingPongGame = new PingPongGame(10);
        document.querySelector("#resetButton").click();
        expect(PingPongGame.resetGame()).toHaveBeenCalled();
    });
});

