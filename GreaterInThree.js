function main (input) {
    /**
     * Write JavaScript code from here
     */

    const numbers = input.trim().split(' ').map(Number);
    const maximum = Math.max(...numbers);
    console.log(maximum);
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});