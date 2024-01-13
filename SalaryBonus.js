function main (input) {
    /**
     * Write JavaScript code from here
     */
    const salary = parseFloat(input.trim());
    const bonus = Math.floor(salary * 0.10);

     console.log(bonus);
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});