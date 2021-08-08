const printer = require("./printer");
setInterval(function () {
    console.clear();
    printer.print();
}, 1000); //renders every second.

var args = process.argv.slice(2);
let num = args;
// //process.stdout.write("Hi ");

start(num);

function start(n) {
    setInterval(function () {
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        printer.updateSeq(n);
    }, 10); //calculates next no. in sequence every 10ms
}
