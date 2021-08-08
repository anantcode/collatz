const printer = require("./printer");

//process.stdout.write("Hi ");

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

start(3);
