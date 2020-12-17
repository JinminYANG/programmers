const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    let output = "";
    for (let i = 0; i < input[0]; i++) {
        console.log(output += "*");
    }

});