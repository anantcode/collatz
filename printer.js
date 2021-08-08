class Printer {
    constructor() {
        this.name = "Hellp";
    }

    print(n) {
        updatePage(n);
        renderPage();
    }
}

function updatePage(n) {
    console.log(`Page Updated! with ${n}`);
    //TODO update page object
}

function renderPage() {
    console.log("Page Rendered!");
}

module.exports = new Printer();
