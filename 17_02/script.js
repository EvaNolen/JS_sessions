/* this; // we are in the window  shows where we are

let myObject = {
    myFunction: Function() {
        this // we are srill in window, but in deeper size
    }
} */

// /*alert("Here is the alert");
// this.alert("Here is the alert");

// //this.prompt("Are you sure you want to leace this page");
// let answer = this.confirm("Are you sure you want to leace this page"); // te es lieku izvēlēties starp true and false jeb ok un cancel
// console.log(answer);

// answer = this.prompt("How are you")//te es sagaidu, ka lietotājs uzrakstīs atildi
// console.log(answer);/

// answer = this.prompt("How are you", "Good!")//te es sagaidu, ka lietotājs uzrakstīs atbildi
// console.log(answer);*/
// //answer = this.prompt("kUru lapu gribi apmeklēt?!").replace("http://", "").replace //te es sagaidu, ka lietotājs uzrakstīs atbildi
// //console.log(answer)

// //let d = new Date();
// //.this.open("https://" + answer);

// const todos = [
//     {
//         id: 1,
//         text: "take out trash",
//         isCompleated: true
//     },
//     {
//         id: 2,
//         text: "meeting Boss",
//         isCompleated: true
//     },
//     {
//         id: 3,
//         text: "dentist",
//         isCompleated: false
//     }
// ];

// //console.log(todos);

// //console.log(todos[1]);
// //console.log(todos[1].text);

// todos.forEach(function(todo){
//     console.log(todo.text);
// });


// const todoCompleated = todos.filter(function(todo){
//     return todo.isCompleated === true;
// }).map(function(todo){
//     return todo.text;
// });
// console.log(todoCompleated);


// const nr1 = parseInt(prompt("Ievadi skaiti")); //parseInt sting pārveido uz number, ja es neielieku to, tad man sanāk 2+2 = 22 pievieno vienkārši blakus
// const nr2 = parseInt(prompt("Ievadi vēl vienu skaitli"));
// const operation = prompt("Izvēlies darbību - saskaitīšana, atņemšana, reizināšana vai dalīšana");

// const answer1 = nr1 + nr2;
// const answer2 = nr1 - nr2;
// const answer3 = nr1 * nr2;
// const answer4 = nr1 / nr2;

// if(operation === "+"){
//     console.log(`Skaitļu ${nr1} un ${nr2} summa ir  ${answer1}`);
// } else if(operation === "-"){
//     console.log(`Skaitļu ${nr1} un ${nr2} starpība ir  ${answer2}`);
// } else if(operation === "*"){
//     console.log(`Skaitļu ${nr1} un ${nr2} reizinājums ir  ${answer3}`);
// } else if(operation === "/"){
//     console.log(`Skaitļu ${nr1} un ${nr2} dalījums ir  ${answer4}`);
//}


const nr1 = parseInt(prompt("Ievadi skaiti")); //parseInt sting pārveido uz number, ja es neielieku to, tad man sanāk 2+2 = 22 pievieno vienkārši blakus
const nr2 = parseInt(prompt("Ievadi vēl vienu skaitli"));
const operation = prompt("Izvēlies darbību - saskaitīšana, atņemšana, reizināšana vai dalīšana");

const answer1 = nr1 + nr2;
const answer2 = nr1 - nr2;
const answer3 = nr1 * nr2;
const answer4 = nr1 / nr2;

switch (operation) { //te jabut kkamm aiz switch, nevar atstāt tukšu, neiet
    case ("+"): //pie case ievada tās vērtības, kuras ievadīs lietotājs un pēc kurām es parādīšu atbildi
        console.log(`Skaitļu ${nr1} un ${nr2} summa ir  ${answer1}`);
        break;
    case ("-"):
        console.log(`Skaitļu ${nr1} un ${nr2} starpība ir  ${answer2}`);
        break;
    case ("*"): 
         console.log(`Skaitļu ${nr1} un ${nr2} reizinājums ir  ${answer3}`);
        break;
    case ("/"): 
        console.log(`Skaitļu ${nr1} un ${nr2} dalījums ir  ${answer4}`);
        break;
    default:
        console.log("Pārbaudi vai ievadīji pareizi vēlamo darbību(+, -, *, /) un skaitļus (izmanto ciparus)")
}
