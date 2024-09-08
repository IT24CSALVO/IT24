//Data Types

let num = 11;
let string = "hello antiii";
let isActive = true;

console.log("Data Types;");
console.log("Number:",num);
console.log("String;",string);
console.log("Booleana:",isActive);

//Arithmetic and Logical operators

let a = 10;
let s = 5;

console.log("\nArithmetic Operators:");
console.log("Addition:",a+s);
console.log("Subtraction:",a-s);
console.log("Multiplication:",a*s);
console.log("Division:",a/b);
console.log("Modulos:",a%b);

console.log("----------------------------");

//Logical Operators

console.log("\nLogical Operators:");
console.log("a>s && a !=s;",a>s & a!= s);
console.log("a>s || a==b:",a>s || a == s);
console.log("!(a>s):",!(a>s));

console.log("----------------------------");
//Conditional statement

console.log("\nConditional Statement:");
//if else
let age =20;
if(age >=18){
    console.log("you are an Adult");
}else{
    console.log("You are an Minor");
}
console.log("----------------------------");
//Switch

let rating = 5;

switch(rating){
    case 1:
        console.log("Very poor");
        break;
    case 2:
        console.log("Poor");
        break;
    case 3:
        console.log("Average");
        break;
    case 4:
        console.log("Good");
        break;
    case 5:
        console.log("Excellent") ;
        break;
    default:
        console.log("Invalid rating kapoy nag rate");                   
}
console.log("---------------------------");
//loops
//for Loops

for(let i = 0; i<5; i++){
    console.log(i);
}
console.log("---------------------------");
//functioning programing 

function isOddorEven(number){
return number %2 === 0? "Even" : "Odd";    
}

console.log("\nOddorEven:");
console.log("Number 20 is", isOddorEven(20));
console.log("Number 10 is", isOddorEven(10));

console.log("---------------------------");
//Determine is a number is a Prime number

function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false;
    }
    return true;
}
console.log("\nPrime Check:");
console.log("Number 13 is", isPrime(13)? "Prime" : "Not Prime");
console.log("Number 9 is", isPrime(9)? "Prime" : "Not Prime");

console.log("---------------------------");
//Determine if a string is a palindrome

function isPalindrome(str){
    let cleanendStr = str.replace(/[^a-zA-z0-9]/g, "").toLowerCase();
    //Check if the cleaned string is equal to its reverse
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
 console.log("---------------------------");

 console.log("\nPalindrome Check");
 console.log('"a man, a plan, a canal:Panama! " is', isPalindrome("a man, a plan, canal:Panama!")? "A Palindrome" : "Not a Palindrome");
 console.log('"Hello" is', isPalinrome("Hello")? "A Palindrome" : "Not a Palindrome");


