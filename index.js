let fizz = 3;
let buzz = 5;
const topNumber = 100;

function FizzBuzz() {
  for (i = 1; i < topNumber; i++) {
    let output = "";
    if ((i % fizz === 0) &&(i % buzz === 0)){
        output = "Fizz Buzz"
    } else if (i % fizz === 0) {
      output = output + "Fizz";
    } else if (i % buzz === 0) {
      output = output + "Buzz";
    } else {
        output = i;
    }
    console.log(output);
  }
}

FizzBuzz();
