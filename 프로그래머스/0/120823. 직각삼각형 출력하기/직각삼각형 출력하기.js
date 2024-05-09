const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const n = parseInt(line);
    for(let i=1; i<= n; i++){
        let stars = '';
        for(let j=1; j<=i; j++)
            {
                stars += '*';
            }
        console.log(stars);
    }
    rl.close()
}).on('close', function () {
    process.exit()
});