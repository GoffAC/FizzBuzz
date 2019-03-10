let fizz = 3;
let buzz = 5;
const topNumber = 100;

function FizzBuzz() {
  for (i = 1; i < topNumber; i++) {
    let output = "";
     if (i % fizz === 0) {
      output = output + "Fizz";
    } 
    
    if (i % buzz === 0) {
      output = output + "Buzz";
    } 
    
    if (output === ""){
        output = i;
    }
    console.log(output);
  }
}

FizzBuzz();
