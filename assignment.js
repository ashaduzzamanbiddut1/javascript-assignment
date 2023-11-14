// 1. Solve the problem with Javascript to find the maximum between two numbe rs.(Hint:take 2 variables and find the maximum number between them)

let numberOne='30';
let numberTwo='40';

maxN = numberOne > numberTwo ?  numberOne : numberTwo ;

console.log('Maximum Number:',maxN );



// 2. Solve the problem with Javascript to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)

let number= 0;

if (number > 0 ) {
  console.log('Positive');
} else if (number < 0 ) {
  console.log('Negative')
} else {
  console.log('Zero')
}


// 3. Solve the problem with Javascript to check whether a number is divisible by 10 or not.(take single variable and check using if esle condition)

let num = 30;

if (num % 10===0 ) {
  console.log(num,`is divisible by 10.`);
} else {
  console.log(num,` is not divisible by 10.`);
}


// 4. Solve the problem with Javascript to check whether a number is even or odd.

// Don't understand 

// 6. Solve the problem with Javascript to check whether the temperature is hot, cold or normal. (30 <= is hot, 25 >= is cold , anyother value is normal)


let temperature = 26;

if (temperature >= 30 ) {
  console.log('temperature is hot');
} else if (temperature <= 25) {
  console.log('temperature is cold')
} else {
  console.log('normal temperature')
}



// 7. Solve the problem with Javascript to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let num1 = 50;
let num2 = 75;
let num3 = 48;

maxNumber = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 ? num2 : num3);

console.log('Maximum Number:', maxNumber);



// 8. Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let x = 30;

x % 2 ? console.log('even number') : console.log('odd number');



// 9. Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 4;
let numTwo = 40;

if (numOne > 30 && numTwo > 30) {
  console.log('Both are greater than 30');
} else {
  console.log('Both Are Not Greater Than')
}


// 10.Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age = 28;

if (age >= 13 && age <=19 ) {
  console.log('Teenager:', age);
} else {
  console.log('Not A Teenager:', age);
}