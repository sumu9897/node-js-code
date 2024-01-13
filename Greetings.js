function main (input) {
    /**
     * Write JavaScript code from here
     */
    const userName = input.trim();
    console.log(`Hello, ${userName}! Nice to meet you.`);
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});