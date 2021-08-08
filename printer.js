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
        console.log("Page Rendered!");
    }
}

// function updatePage(n) {
//     console.log(`Page Updated! with ${n}`);
//     //TODO update page object
// }

// function renderPage() {
//     console.log("Page Rendered!");
// }

module.exports = new Printer();
