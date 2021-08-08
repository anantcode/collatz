class Printer {
    constructor() {
        this.name = "Hello";
        this.page = {};
    }

    print(n) {
        this.updatePage(n);
        this.renderPage();
    }

    updatePage(n) {
        if (this.page[n]) {
            this.page[n] = this.page[n] + 1;
        } else {
            this.page[n] = 1;
        }

        console.log(`Page Updated! with ${n}`);
    }

    renderPage() {
        console.clear();
        for (const property in this.page) {
            console.log(`${property}: ${this.page[property]}`);
        }
        console.log("Page Rendered!");
    }
}

module.exports = new Printer();
