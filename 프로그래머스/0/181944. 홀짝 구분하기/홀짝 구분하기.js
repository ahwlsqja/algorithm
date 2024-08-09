const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]); // 입력된 자연수 n

    // n이 짝수인지 홀수인지 판단
    if (n % 2 === 0) {
        console.log(`${n} is even`); // 짝수인 경우
    } else {
        console.log(`${n} is odd`); // 홀수인 경우
    }
});
