const testing = require('../RPS.js');

describe("whoWonRPS", function() {
    test("returns tie if P1 = paper & P2 = paper", function (){
        let output = testing.whoWon('paper', 'paper');
        expect(output).toBe("TIE!");
    });

    test("returns P1 wins if P1 = paper & P2 = rock", function() {
        let output = testing.whoWon('paper', 'rock');
        expect(output).toBe("Player 1 wins!");
    });

    test("returns P2 wins if P1 = paper & P2 = scissors", function() {
        let output = testing.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });
});