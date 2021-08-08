class Printer {
    constructor() {
        this.name = "Hello";
        this.page = {};
    }

    updateSeq(n) {
        if (this.page[n]) {
            this.page[n] = this.page[n] + 1;
        } else {
            this.page[n] = 1;
        }
    }

    print() {
        console.clear();
        for (const property in this.page) {
            console.log(`${property}: ${this.page[property]}`);
        }
    }
}

module.exports = new Printer();
