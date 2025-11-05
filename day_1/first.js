// Time Complexity O(n)
// print number from 100 to 1 without changing the loop
// const num = 100;

// for (let i = 1; i <= num; i++) {
//   console.log(num-i+1);
// }

//Print All Even Numbers from 1 to N
// const num = 100;

// for (let i = 1; i <= num; i++) {
//   console.log(i%2==0 && i);
  
// }

//Sum of First N Natural Numbers
// const num = 5;
// let sum=0;
// for (let i = 1; i <= num; i++) {
//   sum+=i;
//   console.log(sum);
  
// }
// console.log(sum);

//Print Squares of Numbers from 1 to N
// const num = 5;

// for (let i = 1; i <= num; i++) {
//   console.log(i*i);
  
// }
// console.log(sum);


//Print only the numbers that are both even and perfect squares
const num = 100;

for (let i = 1; i <= num; i++) {
   if(i%2==0 && (i ** 2)<=num) console.log("number is "+ i + " and his perfect square is " + i**2);
   
  
}