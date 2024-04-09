function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) { // Optimized loop for efficiency
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  const filterPrimes = (arr) => {
    return arr.filter(isPrime); // Use arrow function and filter method
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Find prime numbers in the array 
  const primeNumbers = filterPrimes(numbers);
  console.log("Prime numbers in the array:", primeNumbers);