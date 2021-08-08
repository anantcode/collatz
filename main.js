const printer = require("./printer");

var args = process.argv.slice(2);
let num = args;
//process.stdout.write("Hi ");

start(num);

function start(n) {
    while (1) {
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        printer.print(n);
    }
}
