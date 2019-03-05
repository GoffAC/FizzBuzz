let takenNames = ["Jizz"];
const numberOfBadNames = parseInt(takenNames.length);
const givenNumber = process.argv;
const topNumber = parseInt(process.argv[2]) +1;


//Check if the name is already reserved
const nameOk = name => {
  if (takenNames.includes(name) === true) {
    return false;
  } else {
    return true;
  }
};

//Generate a random number
const randNum = () => {
  return Math.floor(Math.random() * Math.floor(26));
};

//Generate a random name
const generateName = () => {
  const notAllowed = [0, 4, 8, 14, 20]; //These all correspond to vowels. Checking for this stops Aizz or Uuzz. 
  let randomNumber = randNum();

  //Check it isn't a vowel
  while (notAllowed.includes(randomNumber) === true) {
    randomNumber = randNum();
  }

  name = String.fromCharCode(randomNumber + 97).toUpperCase();

  // the rest
  if (randomNumber % 2) {
    name = name + "izz";
  } else {
    name = name + "uzz";
  }
  return name;
};

//Add the name to the takenNames list
for (j = 3; givenNumber[j]; j++) {
  let name = generateName();
  if (j === 3) {
    name = "Fizz";
  } else if (j === 4) {
    name = "Buzz";
  } else {
    while (nameOk(name) === false) {
      let count = 0;
      if (count < 440) {
        name = generateName();
      } else {
        console.error(
          "Sorry you have given me too many arguments. I have run out of ideas for names."
        );
        break;
      }
    }
  }
  //Add name to list
  takenNames.push(name);

  console.log(
    `
  Number ` +
      process.argv[j] +
      ` will now be known as ` +
      name +
      "\n"
  );
}

//Play FizzBuzz
for (i = 1; i < topNumber; i++) {
  let output = "";
  for (j = 3; j < process.argv.length; j++) {
    if (i % givenNumber[j] === 0) {
      let k = j - 3 + numberOfBadNames;
    //   console.log(`j is `+j+` k is ` + k + `; taken is ` + takenNames[k]+`taken also `+takenNames);
      output = output + takenNames[k];
    }
  }
  //check if blank
  if (typeof output === "undefined" || output === "") {
    output = i;
    console.log(output);
  } else if (typeof output === "string") {
    console.log("\x1b[33m%s\x1b[0m", output);
  }
}
