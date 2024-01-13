function main (input) {
    /**
     * Write JavaScript code from here
     */
    const celcius = Number(input);
    const fahrenheit = ((celcius * 9) / 5) +32 ;

    console.log("The temperature in Fahrenheit is: "+fahrenheit.toFixed(2));

    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});