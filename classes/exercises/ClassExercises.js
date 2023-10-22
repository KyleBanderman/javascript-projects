// Define your Book class here:
class Book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, numOfCheckouts, bookDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate =copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.numOfCheckouts = numOfCheckouts;
        this.bookDiscarded = bookDiscarded;
    }
    checkout(uses=1) {
        this.numOfCheckouts += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, numOfCheckouts, bookDiscarded) {
        super (title, author, copyrightDate, isbn, numberOfPages, numOfCheckouts, bookDiscarded);
    }
    disposal(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.bookDiscarded = "yes";
        }
    }
}

class Novel extends Book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, numOfCheckouts, bookDiscarded) {
        super (title, author, copyrightDate, isbn, numberOfPages, numOfCheckouts, bookDiscarded);
    }
    disposal() {
        if (this.numOfCheckouts > 100) {
            this.bookDiscarded = "yes";
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel ("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "no");
let topSecretShuttleBuildingManual = new Manual ("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "no");
// Code exercises 4 & 5 here:
topSecretShuttleBuildingManual.disposal(2023);
prideAndPrejudice.checkout(5);
console.log(prideAndPrejudice.numOfCheckouts)