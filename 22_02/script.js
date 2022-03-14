// arrays 
// const arr = new Array();

// arr[0] = "Pirmais elements";
// arr[1] = "Otrais eleents";

// console.log(arr[0]);
// console.log(arr[1]);

// //arr = []; // this should trigger error

// //let arrL = [5,23,98];
// // arrL[0] == 5;
 

// console.log("Array has " + arr.length + " elements");
// arr[arr.length] = "The last element";
// console.log(arr[arr.length - 1]);
// arr.push("cits pedejais ee=lements");
// console.log(arr[arr.length - 1]);

//user to enter the array

// const arr = [];
// while (true) {
//     let element = prompt("Enter the array element");
//     arr.push(element);
//     if (prompt("Enter X to stop").toLowerCase() === "x")
//         break;
// } 

// for (let i =0; i < arr.length; i++)
//     console.log(arr[i]);

//const arr = [212, "str", true];

// fizz buzz

const number = parseInt(prompt("Add number")); // palūdzu ievadīt skaitli, kur norāda cik skaitļus būs jāizvada
const array = [];
for( let i=0; i<=number*15+1; i+=15);{
    console.log(i);
}
