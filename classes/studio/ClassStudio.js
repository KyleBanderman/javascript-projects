//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores) {
        this.name = name; //string
        this.mass = mass; //number
        this.scores = scores; //array of numbers
    }
    addScores(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let output = 0;
        for (let i = 0; i < this.scores.length; i++) {
            output += this.scores[i];
        }   
        output = output / this.scores.length;
        output = Math.trunc(Math.round(output*10))/10
        return output;
    }
    status() {
        let average = this.average();
        let string = "";
        if (average >= 90) {
            string = "Accepted";
        } else if (average >= 80 && average < 90) {
            string = "Reserve";
        } else if (average >= 70 && average < 80) {
            string = "Probationary";
        } else {
            string = "Rejected";
        }
        return `${this.name} earned an average test score of ${average}% and has the status of ${string}`
    }
}
let bubbaBear = new CrewCandidate ("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate ("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate ("Glad Gator", 225, [75, 78, 62]);
console.log(bubbaBear, merryMaltese, gladGator);
bubbaBear.addScores(83);
console.log(bubbaBear.scores);
console.log(merryMaltese.average());
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(bubbaBear.status());
console.log(merryMaltese.status());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
gladGator.addScores(100);
gladGator.addScores(100);
console.log(gladGator.status());