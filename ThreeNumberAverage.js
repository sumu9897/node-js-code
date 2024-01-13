function main(input) {
  /**
   * Write JavaScript code from here
   */
  const numbers = input.trim().split(" ").map(Number);

  const average = (
    numbers.reduce((sum, num) => sum + num, 0) / numbers.length
  ).toFixed(2);

  console.log(`Average: ${average}`);
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});
