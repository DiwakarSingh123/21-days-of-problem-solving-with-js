// 1. Find the Maximum of Three Numbers
const firstNumber=prompt("Enter the first number");
const secondNumber=prompt("Enter the first second");
const thirdNumber=prompt("Enter the first third");


if(firstNumber>=secondNumber && firstNumber>=thirdNumber){
    console.log(firstNumber+" first is grater");
}
else if(firstNumber>=secondNumber && firstNumber<=thirdNumber){
    console.log(thirdNumber+ "third is grater");
    
}
else if(secondNumber<=thirdNumber) console.log("third number is grater");
else console.log("second number is grater");

// 2. Check if a Number is Positive, Negative, or Zero
const num=prompt("Enter the  number");
if(num>0) console.log("Positive number");
else if(num<0) console.log("Negative number");
else console.log("Zero hai");


// 3. Calculate Electricity Bill
const bill=parseInt(prompt("Enter the  number"));
if(bill>0 && bill<100) console.log(bill*5);
else if(bill>=101 && bill<=200) console.log(bill*7);
else if(bill>=201 && bill<=300) console.log(bill*10);
else if(bill>300) console.log(bill*12);
else console.log("Nothing you needs to pays as for now");

// 4. Check if a Character is a Vowel or Consonant..
function checkCharacter(value){
    if(value=='e' || value=='a' ||value=='i'||value=='o'||value=='u' ){
        console.log("Yes it is vowel");
        
    }else{
        console.log("It is consonent");
        
    }
}

checkCharacter('f')

// 5 Check if a Character is Uppercase, Lowercase, Digit, or Special Character
function checkCharacter(ch){
   if(ch>='A' && ch<='Z') console.log("UpperCase");
   else if(ch>='a' && ch<='z') console.log("Lowercase");
   else if(ch>='0' && ch<='9') console.log("Digites");
   else if(/[^a-zA-Z0-9]/.test(ch)) console.log("Spacial");
   
}

checkCharacter(',')









