
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(input) {
    let output = "";
    if (input % 2 === 0) {
        output += "Launch!";
    }
    if (input % 3 === 0) {
        output = output.substring(0, output.length-1)
        output += "Code!";
    }
    if (input % 5 === 0) {
        output = output.substring(0, output.length-1);
        output += " Rocks!";
    }
    if (output.length === 0) {
        output += "Rutabagas! That doesn't work.";
    }
    if (output == "Launch Rocks!") {
        output += " (CRASH!!!!)"
    }
    return output;
  }
}

module.exports = launchcode;

