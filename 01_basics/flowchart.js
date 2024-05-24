/* Question no 1: Write a program to take three variables to store your date,
birth month, and birth year respectively, and then print them 
one by one in a specified order. */

// const PromptSync = require("prompt-sync");

// const PromptSync = require("prompt-sync")

// const input=require('prompt-sync')();
// let Date=input("Enter the Date:");
// let Month= input ("enter the month:");
// let Year= input ("enter the year:");

// console.table([Date,Month,Year]);

//  note:- let name = "ravi kumar"
// console.log(name[3]);

 /*Question no 2: Write a program to take input from the 
 user, and then print it to the output.*/

//  const input=require('prompt-sync')();
//  let number=input("Enter the number:");

//  console.log(number);

/*Question no 3: Imagine you and your friend bought difference snacks for lunch. however , you want to exchange your snacks with 
each other. To this , you decide to enlist the help of a friend who can hold one snack box while you exchange with your other friend. 
Similarly, in programing , we can use a third variable to help us values of two variables. 

write a program to take two values from the user and swap them . */

// const input = require ('prompt-sync')();

// let ravi = input("enter the item:");
// let rahul =input ("enter the item:");

// let temp = ravi;
// ravi =rahul;
// rahul=temp;

// console.log([ravi,rahul]);


/* Question no 4: Write a program to take two numbers from the user and perform six 
basic operations (addition, subtraction, multiply ,division, integer division , and modulus) on those two numbers. 

Note: Print the output in the order as mentioned in the question. */

// const input = require ('prompt-sync')();

// let num1 = parseInt( input ("enter the value of num1:"));
// let num2 = parseInt(input ("enter the number of num2:"));


// let addition = num1+num2;
// let subtraction = num1-num2;
// let multiply= num1*num2;
// let divide = num1/num2;
// let modulus = num1%num2;
// let intDivision =Math.floor(num1/num2);

// console.log([addition,subtraction,multiply,divide,modulus,intDivision]);



// let a= 10;
// let b=5;

// console.log("Pay ",(a+b) ,"rupees for tea");
// console.log(`pay ${a+b}rupees for tea`);


// const input = require ('prompt-sync')();

// let color = input ("traffic light color is:");

// if (color === "red") {
//     console.log("Stop! light color is red.");
// }
// if (color=== "green") {
//     console.log("Go. light color is green ");
// }
// if (color==="yellow") {
//     console.log("Slow down. light color is yellow.");
// }


/* Question no 5: Write a program to take two numbers A and B from the user 
and calculate the quotient and remainder when number A is dividend by number B. n*/

// const input = require ("prompt-sync")();

// let number1 = parseInt (input ("enter the value of number1:"));
// let number2 = parseInt (input ("enter the value of number2:"));

// let quotient = Math.floor(number1/number2);
// let remainder = number1%number2;

// console.log(quotient,remainder);

/* question no 6: write a program to take a positive  from the user and then 
display the last digit of that number. */

// const input = require ("prompt-sync")();

// let number = parseInt(input ("enter the value of number:"));

// let lastDigit =number%10;

// console.log(`last digit: ${lastDigit}`);

/* Question no 7: Write a program to convert a temperature from Celsius  to fehrenheit using the formula C/5=(F-32)/9 */

// const input = require ("prompt-sync")();

// let Celsius = parseInt (input ("enter the value of celsius:"));
// let fehrenheit=9*Celsius/5+32;

// console.log(fehrenheit);

/* Question no 8: Write a program to take two inputs from the user  and swap them without using a temporary  
or third variable. */

// const input = require ("prompt-sync")();
// let number1 = parseInt (input ("enter the value of number:"));
// let number2 = parseInt (input("enter the value of number:"));

// // by swap method without using variable :
//  number1=number1+number2;
//  number2=number1-number2;
//  number1=number1-number2;

//  console.log(number1,number2);

/* Question no 9: Write a program to take two numbers from the user and determine 
the greater of those two given numbers. */

// const input = require ("prompt-sync")();

// let A = parseInt(input ("enter the value of A:"));
// let B = parseInt(input("enter the value of B:"));

// let quotient = Math.floor(A/B);
// let perfectDivide=quotient*B;

// console.log(`Number: ${perfectDivide}`);

/* Question no 10: Write a program to take two numbers from the user and determine the greater 
of those two given numbers. */

// const input = require ("prompt-sync")();
// let number1 = parseInt(input("enter the value of number1:"));
// let number2 = parseInt (input("enter the value of number2:"));

// if (number1>number2) {
//     console.log(`greatest number is ${number1}`);
// }
// else {
//     console.log(`greatest number is ${number2}`);
// }

/* Question no 11: Write a program to take a number from the user and 
print that number as Odd or Even . */

// const input = require ("prompt-sync")();
// let number = parseInt(input("enter the value of number:"));

// if (number%2===0) {
//     console.log("Even number");
// }

// else {
//     console.log("Odd number");
// }

/* Question no 12: Write a program to take a number from the user and output 
whether that number is negative ,positive or zero. */

// const input = require ("prompt-sync")();
// let number = parseInt(input("enter the value of number:"));

// if (number ===0) {
//     console.log("zero");
// }
 
//  else if (number >0) {
//     console.log("positive");
// } 
// else {
//     console.log("negative");
// }

/* Question no 13: Write a program to take a integer as input and print the smallest positive 
integer that is a multiple of both 2 and n. */

// const input = require ("prompt-sync")();
// let n = parseInt(input("enter the value of number:"));

// if(n%2===0) {
//     console.log(n);
// }
// else {
//     console.log(n*2);
//

/* Question no 14: Write a program to take three numbers from the user and 
print the greater number of the three numbers.(Assume all three numbers are distinct) */

// const input = require ("prompt-sync") ();

// let number1 =parseInt(input("enter the value of number1:"));
// let number2=parseInt(input("enter the value of number2:"));
// let number3 =parseInt(input("enter the value of number3:"));

// if (number1>number2) {
//     if (number1>number3) {
//         console.log(`greatest number is ${number1}`);
//     }
//     else {
//         console,log(`greatest number is ${number3}`);
//     } 
// }
//     else if (number2>number3) {
//         console.log(`greatest number is ${number2}`);
//     }
//     else {
//         console.log(`greatest number is ${number3}`);
//     }

/* Question no 15: Write a program to take four numbers from the user 
and print the greater number of the four number. (Assume all the numbers are distinct) */

// const input =require("prompt-sync")();
// let number1 =parseInt(input("enter the value of number1:"));
// let number2=parseInt(input("enter the value of number2:"));
// let number3 =parseInt(input("enter the value of number3:"));
// let number4 =parseInt(input("enter the value of number4:"));

// if (number1>number2) {
//     if (number1>number3) {
//         if (number1>number4) {
//             console.log(number1);
//         }
//         else {
//             console.log(number4);
//         }
//     }
//     else if (number3>number4) {
//         console.log(number3);
//     }
//     else {
//         console.log(number4);
//     }
//     }
//     else if (number2>number3) {
//         if (number2>number4) {
//             console.log(number2);
//         }
//         else {
//             console.log(number4);
//         }
//     }
//     else if (number3>number4) {
//             console.log(number3);
//         }
//         else {
//             console.log(number4);
//         }


/* Question no 16: Imagine you and your friends are exploring the concept of leap years. A leap year is a year that is evenly divisible by 4, except for years that are divisible by 100 but not divisible by 400. In simpler terms, it's a special year with an extra day in February (February 29th). You're curious to know whether a particular year is a leap year or not.

Write a program to take a year from the user and output whether a given year is a leap year or not.

Note: A year is said to be a leap year if it is either divisible by 400 or it should be divisible by 4 and not by 100.

Tips:

1. Remember, a leap year occurs every 4 years, except for years that are divisible by 100 but not by 400.
2. Pay attention to the conditions for determining a leap year.
3. Understand the significance of leap years in adjusting the calendar. */

// const input = require ("prompt-sync")();
//  let year = parseInt(input("enter the year:"));

//  if (year%400===0) {
//     console.log("Leap year");
//  }
//  else if (year%100===0) {
//          if (year%4===0) {
//     console.log("Leap year");
//  }
// }
//  else {
//     console.log("It's nota a leap year")
//  }

/* Question no 17: Write a program to take 3 numbers from the user and output 
the second max of 3 numbers. (First, do it in the normal waay then do it by using 3 
    comparisons )  */

//     const input = require("prompt-sync")();
// let number1=parseInt(input("enter the value of number1:"));
// let number2=parseInt(input("enter the value of number2:"));
// let number3 =parseInt(input("enter the value of number3:"));

// let max=0;
// let smax=0;

// if (number1>number2) {
//     if (number1>number3) {
//         if (number2>number3) {
//             smax=number2;
//         }
//         else {
//             smax=number3;
//         }
// }
// else if (number1>number2) {
//     smax=number1;
// }
// else {
//     smax=number2;
// }
// }
// else if (number2>number3) {
//     if (number1>number3) {
//         smax=number1;
//     }
//     else {
//     smax=number3;
//     } 
// }

//     else {
//         smax=number2;
//     }



// console.log(smax);

/* Question no 18:Imagine you're working as a payroll manager in a company, and your job is to calculate the gross salary of employees based on their basic salary and certain allowances. The gross salary includes the basic salary along with House Rent Allowance (HRA) and Dearness Allowance (DA), which vary based on the employee's basic salary range.

Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%  */

//     const input = require("prompt-sync")();
// let basicSalary=parseInt(input("enter the value of basic Salary:"));

// let HRA;
// let DA;
// let grossSallery=basicSalary+HRA+DA

// if (basicSalary<=10000) {
//     HRA=basicSalary*20/100;
//     DA=basicSalary*80/100;
//     grossSallery=basicSalary+HRA+DA;
// }
// else if (basicSalary<=20000) {
//     HRA=basicSalary*25/100;
//     DA=basicSalary*90/100;
//     grossSallery=basicSalary+HRA+DA;
// }
// else {
//     HRA=basicSalary*30/100;
//     DA=basicSalary*95/100;
//     grossSallery=basicSalary+HRA+DA;
// }

// console.log(grossSallery);


/* Question no 19: Imagine you're responsible for calculating electricity bills for households. Each household consumes electricity, and the bill varies based on the number of units consumed. The bill calculation involves different rates for different ranges of units consumed, along with an additional surcharge.
Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill

Tips:

1. Understand how the bill amount varies for different ranges of units consumed.
2. Pay attention to adding the surcharge correctly to the total bill amount.
3. Ensure accuracy in calculations and handle different scenarios effectively. */

// const input = require ("prompt-sync")();
// let unit = parseInt(input("enter the electricity unit:"))
// let addchage;
// let bill;
// let electricityBill=bill+addchage;

// if (unit<=50) {
//     bill = (unit*0.50);
//     addchage=bill*20/100;
//     electricityBill=bill+addchage;

// }

// else if (unit<=150) {
//     bill = (50*0.50)+(unit-50)*0.75;
//     addchage=bill*20/100;
//     electricityBill=bill+addchage;

// }

// else if (unit<=250) {
//     bill = (50*0.50)+(100*0.75)+(unit-150)*1.20;
//     addchage=bill*20/100;
//     electricityBill=bill+addchage;

// }

// else if (unit>250) {
//     bill = (50*0.50)+(100*0.75)+(100*1.20)+(unit -250)*1.50;
//     addchage=bill*20/100;
//     electricityBill=bill+addchage;

// }

// console.log(electricityBill);


/* Question no 20: Write a program to take 4 numbers from the user and output 
the third max of these 4 numbers. */


// const input =require("prompt-sync")();
// let number1 =parseInt(input("enter the value of number1:"));
// let number2=parseInt(input("enter the value of number2:"));
// let number3 =parseInt(input("enter the value of number3:"));
// let number4 =parseInt(input("enter the value of number4:"));

// let max=0;
// let smax=0;
// let tmax=0;


// if (number1>number2) {
//     max=number1;
//     smax=number2;
// }
// else {
//     max=number2;
//     smax=number1;
// }

// if (max>number3) {
//      if (smax>number3) {
//         if (tmax<number3) {
//             tmax=number3;
//         }
//      }
//         else {
//             tmax=smax;
//             smax=number3
//         } 
//     }
//         else {
//             tmax=smax;
//             smax=max;
//             max=number3;
//         }

//         if  (max>number4) {
//             if (smax>number4) {
//                if (tmax<number4) {
//                    tmax=number4;
//                }
//             }
//                else {
//                    tmax=smax;
//                    smax=number4;
//                } 
//            }
//                else {
//                    tmax=smax;
//                    smax=max;
//                    max=number4;
//                }

//                console.table([max,smax,tmax]);
           


/* Question no 22: Write a program to take 5 numbers from the user and
 print the frequency of every number. */

 /* Question no 23: Take the number N and the name from the user as inputs, and  
 print the name N times. */

// const input =require ("prompt-sync")();

// let n = parseInt(input("enter the value of n:"));
// let name =input("enter the value of name:");

// for (let i=1; i<=n; i++ ) {
//     console.log(name);
// }


/*Question no 24: agine you're on a fun journey of exploring numbers! You're interested in finding out all the even numbers up to a certain value. Even numbers are those that are divisible by 2 without leaving a remainder. Your task is to print all the even numbers from 1 up to the number you choose.

Take a number N from the user as input, and print even numbers up to N.

Tips:

1. Remember, even numbers are those that are divisible by 2 without leaving a remainder.
2. Pay attention to printing the numbers in the correct format.
3. Ensure accuracy in the range of numbers displayed.  */



// const input =require ("prompt-sync")();

// let n = parseInt(input("enter the value of n:"));

// for (let i=1; i<=n; i++) {
//     if (i%2===0) {
//         console.log(i);
//     }
// }


/* Question no 25:  
 	
Imagine you're on an adventurous quest to unravel the mysteries of numbers! Today, your quest involves exploring the realm of odd numbers. Odd numbers are those that are not divisible by 2, leaving a remainder of 1. Your task is to calculate the sum of all the odd numbers up to a certain value chosen by you.

Write a program to print the sum of odd numbers up to N.

Tips:

1. Remember, odd numbers are those that are not divisible by 2, leaving a remainder of 1.
2. Pay attention to calculating the sum accurately.
3. Ensure the correctness of the range of numbers included in the sum. */


// const input =require ("prompt-sync")();

// let n = parseInt(input("enter the value of n:"));
// let sum =0;
// for (let i=1; i<=n; i++) {
//     if (i%2!=0) {
//         sum=sum+i
       
//     }

// }

// console.log(sum);


/* Question no 26: Write a program to take two integer M, and n and print 
the sum of number in the range M to N. */


// const input =require("prompt-sync")();
// let m =parseInt(input("enter the value of m:"));
// let n=parseInt(input("enter the value of n:"));

// let sum =0;

// for (let i=m; i<=n; i++) {
//     sum=sum+i;
// }

// console.log(sum);


/* Question no 27: Write a program to calculate the sum of the following series 
where N is input from the user.(1+1/2+1/3+1/4+1/5+........1/N) */

// const input = require ("prompt-sync")();
// let n= parseInt(input("enter the value of term :"))

// let sum =0;

// for (let i=1; i<=n; i++) {
//     sum=sum+1/i;
// }

// console.log(sum);

/* Question no 28: Write a program to take a number from the user and 
print the number of digit in the given number.(can you do it without loop O(1)) */


// const input = require ("prompt-sync")();
// let n= parseInt(input("enter the value of n:"))

// let count=0;

// while (n>0) {
//     count++;
//     n=Math.floor(n/10);
// }

// console.log(count);

/* Question no 29: Write a program to take a number from the user 
and print the sum of the digits of the given number. */

// const input = require ("prompt-sync")();
// let n= parseInt(input("enter the value of n:"))

// let sum=0;

// while (n>0) {
//    let remainder= n%10;
//    sum+=remainder;
//     n=Math.floor(n/10);
// }

// console.log(sum);


/* Question no 31: Write a program that takes a number from the user
and prints the number that is formed by reversing the digits of the number. */


// const input = require ("prompt-sync")();
// let n= parseInt(input("enter the value of n :"))

// let reverse=0;

// while (n>0) {
//    let remain= n%10;
//    reverse=reverse*10+remain;
//     n=Math.floor(n/10);
// }

// console.log(reverse);

/* Question no 34; factor Question */


// const input =require ("prompt-sync")();

// let n = parseInt(input("enter the value of n:"));

// let factor=1;

// for (let i=1; i<=n; i++) {
//     if (n%i===0) {
//         console.log(i);
//     }
  
// }


 /* Question 35: Write a program to check if a number is a special type of number called a 'prime number'.
 A prime number is a number that is only divisible by 1 and itself, and it doesn't have
  any other factors. 
For example, the number 7 is a prime number because it can only be divided by 1 and 7 without 
leaving a remainder. However, the number 12 is not a prime number because it has other factors, 
such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)? Learn sieve algorithm */

// const input =require ("prompt-sync")();

// let n = parseInt(input("enter the value of n:"));

// let count=0;

// for (let i=2; i<=n/2; i++) {
//     if (n%i===0) {
//         count++;
//     }
// }
//   if (count===0) {
//     console.log("prime number");
//   }
//   else {
//     console.log(" Not prime number");
//   }


/* Question no 37: Write a program to take a number from the user and then determine 
if that number is a special type of number called a 'perfect number'.
 A perfect number is a number where the sum of all its factors (excluding the number itself) 
 is equal to the number itself. Print Yes if the number is a perfect number else print No.  */

//  const input =require ("prompt-sync")();

// let n = parseInt(input("enter the value of n:"));

// let sum=0;

// for (let i=1; i<=n/2; i++) {
//     if (n%i===0) {
//         sum+=i;
//     }
// }
//   if (sum===n) {
//     console.log("perfect number");
//   }
//   else {
//     console.log("Not perfect number");


/* Question no 52: Write a program to print all the numbers from the given array using a looop. */

//  let N=8;
//   let l= [23,45,32,25,46,33,71,90];

//  for (let i=0; i<N; i++) {
//   console.log(l[i]);
//  }

/* Question no 53: Write a program to create an array of natural numbers till 
20 and print it. */


// let array = [];
// let n=20;
// let k=1;

// for (let i=0; i<n; i++) {
//   array[i]=k;
//   console.log(array[i]);
//   k++;
// }


/*Question no 54: Write a  program to reverse that array and print the reversed arrray. */

// let array = [];

// const input = require("prompt-sync")();

//  let n =(input ("number of n terms:"));

//  for(let i=0; i<n; i++) {
//   let Element = parseInt(input ("No of terms:"));
//   array [i]= Element;
//  }

//  for(let i=n-1; i>0; i--) {
//   console.log(array[i]);
//  }

/* Question no 55: Write a program to take size of array , array and target as 
input from the user and check whether the target exist in the array or not. */

// let array =[];


// const input = require("prompt-sync")();
// let n= parseInt (input("number of terms:"));
// // let p=0;
// for (let i=0; i<n; i++) {
//   let element = input("number:");
//   array[i]=element;
// }
// let target =input("target number:");

// for(let i=0; i<n; i++) {
//   if (array[i]===target) {
//     console.log("Yes");
//     // process.exit(); // exits the Node.js process
//     return;
//     // p++;
//   }
// }
// // if(p==0){
//     console.log("No");
// // } 

/* Question no 56:Write a program to print all the odd numbers and even numbers in the given array.
Note: in the output, you should print odd numbers sum and even numbers sum in this order only. */

// let array = [];

// let sumEven =0;
// let sumOdd =0;

// const input = require('prompt-sync')();
// let n= parseInt(input("enter number of terms:")); 

// for (let i=0; i<n; i++) {
//   let element= parseInt(input("enter the value:"));
//   array[i]=element;
// }

// for (let i=0; i<n; i++) {
//   if (array[i]%2==0) {
//      sumEven+=array[i];
//   } 
//   else {
//   sumOdd+=array[i];
//       }
// }

// console.log(sumEven);
// console.log(sumOdd);


/* Question no 59: Write a progrm to take N numbers from a user as input 
and then print the duplicates in those N numbers.Also take N as an input from the user . */

// let arr =[];

// let s=0;

// const input = require("prompt-sync")();
// let n = input ("number of terms:");

// for (let i=0; i<n; i++) {
//   let element = Number(input("enter the value of number:"));
//   arr[i] =element;

// }
// for (let i=0; i<n-1; i++) {
// for (let j=i+1; j<n; j++) {
//   if (arr[i]===arr[j]) {
//     console.log(arr[i]);
//     s++
  
//   }

// }
// }

// if (s===0) {
//     console.log("No");
//    

/* Question no 61: Write a program to take N numbers from the user
and print the frequency of every numbers.  */

// let arr =[];
// let count=1;

// const input = require("prompt-sync")();
// let n = Number(input("enter the number of terms:"));

// for (let i=0; i<n; i++) {
//   let element = Number(input("enter the value of term:"));
//    arr[i]=element;
// }

// for(let i=0; i<n; i++) {
//   if (arr[i] !=0) {
//   for (let j=i+1; j<n; j++) {
//      if (arr[i]==arr[j]) {
//      count++;
//      arr[j]=0;
//      }
     
//   }
  
//   console.log(arr[i],count);
//   count=1;

//   }
 
// }

/* Question no 64: Write a program to take two sorted arrays of size M,N from the user as input 
and merge them into a single sorted array of size M+N(Do not use sorting) */

// let arr1=[];
// let arr2=[];
// let arr3=[];

// const input = require("prompt-sync")();
// let M= (Number(input ("enter the number of terns:")));
// let N= (Number(input ("enter the number of terms:")));

// for (let i=0; i<M; i++) {
//   let element= Number(input("enter the number:"));
//   arr1[i]=element;
// }

// for (let j=0; j<N; j++) {
//   let element= Number(input("enter the number:"));
//   arr2[j]=element;
// }
//   i=0; j=0;
// for (let k=0; k<M+N; k++) {
//   if (arr1[i]<arr2[j]) {
//     arr3[k]=arr1[i];
//     i++;
//        }
//   else {
//     arr3[k]=arr2[j];
//     j++;
//     }

//     if (j>N) {
     
//       arr3[k]=arr1[i];
//       i++;
//     }
//     else if (i>M){
//       arr3[k]=arr2[j];
//       j++;
//     }
    
// }

// for (let k=0; k<M+N; k++) {
// console.log(arr3[k]);
// }

/* Question no 71: Write a program to take value N from the user and print 
the following pattern based on the user input. */

// let arr =[];


// const input = require ("prompt-sync")();
// let N=Number(input("enter the value of number:"));

// for (let i=0; i<N; i++) {
//    let element=Number(input("enter the number:"));
//    arr[i]=element;
//  }

// for (let i=0; i<N; i++) {
//   let str='';
//   // for(let j=0; j<arr[i]; j++){
//     let k=0;
//     while (k<arr[i]) {
//     str=str+">";
//     k++;
//   }
//   console.log(str);
// }



  












    









    