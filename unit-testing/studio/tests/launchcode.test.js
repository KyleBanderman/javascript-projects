// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
    test("should return nonprofit when key is organizaion", function() {
      expect(launchcode.organization).toBe("nonprofit");
    });

    test("should return Jeff when key is executiveDirector", function() {
      expect(launchcode.executiveDirector).toBe("Jeff");
    });

    test("should return 100 when key is percentageCoolEmployees", function() {
      expect(launchcode.percentageCoolEmployees).toBe(100);
    });

    test("should return Web Development, Data Analysis, Liftoff and size 3 when key is programsOffered", function() {
      expect(launchcode.programsOffered[0]).toBe("Web Development");
      expect(launchcode.programsOffered[1]).toBe("Data Analysis");
      expect(launchcode.programsOffered[2]).toBe("Liftoff");
      expect(launchcode.programsOffered.length).toBe(3);
    });

    test("should return the correct phrases when passed numbers divisible by 2, 3 and 5", function () {
      expect(launchcode.launchOutput(2)).toBe("Launch!");
      expect(launchcode.launchOutput(3)).toBe("Code!");
      expect(launchcode.launchOutput(5)).toBe(" Rocks!");
      expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
      expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
      expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
      expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
      expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
    });
});