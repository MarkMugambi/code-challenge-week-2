const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
    // Handle non-positive and 1 cases efficiently
    if (num <= 1) return false;
  
    // Special cases for 2 and 3 (prime)
    if (num <= 3) return true;
  
    // Check for divisibility by 2 and 3 first for optimization
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    // Optimized loop for efficiency, starting from 5 and checking only potential divisors
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    // If no divisors found, it's prime
    return true;
}

function promptUserForNumber() {
    return new Promise((resolve, reject) => {
        rl.question("Enter a positive integer to check if it's prime: ", (answer) => {
            const num = parseInt(answer);
            if (!isNaN(num) && num > 0) {
                resolve(num);
            } else {
                console.log("Invalid input. Please enter a positive integer.");
                promptUserForNumber().then(resolve);
            }
        });
    });
}

const main = async () => {
    const number = await promptUserForNumber();
    const isTheNumberPrime = isPrime(number);
  
    console.log(isTheNumberPrime ? `${number} is a prime number` : `${number} is not a prime number`);
  
    rl.close();
};

main();