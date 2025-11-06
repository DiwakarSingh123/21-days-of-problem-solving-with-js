// 1 Print Right-Angled Star Triangle
function Pattern(num){
    for (let i = 0; i <=5; i++) {
        let str=' ';
       for (let j = 1; j <=i; j++) {
        str+="*"
       }
        console.log(str);
        
    }
}

Pattern(5);


// 2 .Print Pyramid Pattern
function Pyramid(num){
    for (let i = 0; i <=num; i++) {
       let str=' ';
       // add left space
       for (let j = i; j <num; j++) {
        str+=" "
       }
       // add start....
       for (let j = 1; j <=i*2-1; j++) {
        str+="*"
       }
       // add right space
       for (let j = i; j <num; j++) {
        str+=" "
       }
       
       console.log(str);
        
    }
}

Pyramid(5);

// 3. Print Inverted Pyramid Pattern
function ReversePyramid(num){
    for (let i = 1; i <=num; i++) {
       let str=' ';
       // add left space
       for (let j = 1; j <i; j++) {
        str+=" "
       }
       // add start....
       for (let j = i; j <=num*2-i; j++) {
        str+="*"
       }
       // add right space
      for (let j = 1; j <i; j++) {
        str+=" "
       }
       
       console.log(str);
        
    }
}


ReversePyramid(5);
console.log('\n');

// 4 Print Hollow Square Pattern
function Square(num){
    for (let i = 1; i <=num; i++) {
       let str=' ';
       for (let j = 1; j <=num; j++) {
           if(i==1 || i==num || j==1 || j==num){
            str+="*";
           }
          else str+=" "
       }
       console.log(str);
        
    }
}

Square(5);

// 5 Print Hollow Pyramid Pattern
function Hollow(num){
    for (let i = 1; i <=num; i++) {
       let str=' ';
       // add left space
       for (let j = i; j <=num; j++) {
        str+=" "
       }
       // add start and space ....
       for (let j = 1; j <=i*2-1; j++) {
        if(j==1 || j==i*2-1 || i==num) str+="*";
        else str+=" ";
       }
       // add right space
       for (let j = i; j <=num; j++) {
        str+=" "
       }
       
       console.log(str);
        
    }
}

Hollow(5);

// 6 Print Inverted Hollow Pyramid Pattern
function InvertedHollow(num){
    for (let i = 1; i <=num; i++) {
       let str=' ';
       // add left space
       for (let j = 1; j <=i; j++) {
        str+=" "
       }
       // add start and space ....
       for (let j = i; j <=num*2-i; j++) {
        if(j==i || j==(num*2)-i || i==1) str+="*";
        else str+=" ";
       }
       // add right space
       for (let j = 1; j <=i; j++) {
        str+=" "
       }
       
       console.log(str);
        
    }
}

InvertedHollow(5);


