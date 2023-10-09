const testing = require('../checkFive.js');

describe("checkFive", function(){
    test("should return less than 5 if input is < 5", function (){
        let output = testing.checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });

    test("should return greater than 5 if input > 5", function (){
        let output = testing.checkFive(8);
        expect(output).toBe("8 is greater than 5.");
    });

    test("should return equal to 5 if input is 5", function () {
        let output = testing.checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });
});