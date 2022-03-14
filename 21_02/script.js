//Conditionals: if, esle if, else switch
//loops: for , while, do while

let a = Number.parseInt(prompt("Enter The Value"));

if(a < 10 ) {
    console.log("The value is less than 10");
} else if ( a >= 10 &&  a <= 20) {
   console.log("the value is between 10 and 20");
} else {
    console.log("the value is greater than 20");
}
    

//switch

let userLever = prompt("Enter your user level");

switch(userLever) {
    case "Admin":
        console.log("The user ir administrator");
        break;
    case "Moderator":
        console.log("The user ir Moderator");
        break;
    case "Regular":
        console.log("The user ir regular user");
        break;
    default:
        console.log("User is not recognizesr");
}

// brake izņemot ārā parāda consolē to soli, līdz nākamajam brake
// piemēram, ja es izņemu brake ārā pie admin, tad parādīs, ka user ir administrator un user is moderator

let grade = parseInt(prompt("Please, enter the grade"));

switch (grade) {
    case 1:
    case 2:
    case 3:
        console.log("Nav nokārtots");
        break;
    case 4:
    case 5:
        console.log("Vāji");
        break;
    case 6:
    case 7:
        console.log("labi");
        break;
    case 8:
    case 9:
        console.log("teicami");
        break;
    case 10:
        console.log("Izcili");
}

let sum = 0;
for (let i = 0; i < 500; i ++) //i++ pievieno vienu vienību i+=5 palielina i par 5 vienībām
    sum += i;
console.log("Summa visiem skaitļiem līdz 500" + sum);

let noInterations = parseInt(prompt("Enter the number of onterations"));
let startElement = parseInt(prompt("Enter the starting element"));

for (let i = startElement; i < noInterations; i++) { //kad es rakstu looop, es nezinu ko ievadīs, tāpēc piešķir value let
    console.log("Interation" + i);
}
