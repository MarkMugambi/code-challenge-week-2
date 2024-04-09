const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function generateArray(start, end) {
    var arr = [];
    if (start <= end) {
      for (var i = start; i <= end; i++) {
        arr.push(i);
      }
    } else {
      for (var j = start; j >= end; j--) {
        arr.push(j);
      }
    }
    return arr;
  }
  
  function getUserInput(prompt) {
    return new Promise((resolve) => {
      readline.question(prompt, (answer) => {
        resolve(parseInt(answer));
      });
    });
  }
  
  async function main() {
    try {
      const start = await getUserInput("Enter the starting value: ");
      const end = await getUserInput("Enter the ending value: ");
      const generatedArray = generateArray(start, end);
      console.log("Generated Array:", generatedArray);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      readline.close();
    }
  }
  
  main();
  