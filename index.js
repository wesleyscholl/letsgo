function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

// This function calculates the factorial of a number. The factorial of a number is the product of all the positive integers less than or equal to that number. For example, the factorial of 5 is 120, because 120 is equal to 1 * 2 * 3 * 4 * 5.

// This function works by using recursion. Recursion is a programming technique where a function calls itself. In this case, the factorial function calls itself recursively to calculate the factorial of the number minus 1. The base case of the recursion is when the number is 0, in which case the function returns 1.

// Here is an example of how to use this function:

  const factorialOf5 = factorial(5);
  console.log(factorialOf5); // 120

// This code will print the factorial of 5, which is 120.