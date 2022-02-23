// const number = parseInt(prompt("Add number"));
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//console.log(arr[number]); // izdod to skaitli kuru palūdza

//array pārveido par parastu rindu ar skaitļiem un izpirntē elements
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for(let i = 1; i < arr.length; i+=2){ //izprintē katru otro elementus vairs nav array
//     console.log(arr[i]);
//   }

//uztaisa rindu ar 100 elementiem const arr = Array.from(Array(100).keys());

// const number = parseInt(prompt("Add number"));

// const arr = Array.from(Array(number+1).keys());
// console.log(arr)

//FizzBUZZ mājas darbs

// const number = parseInt(prompt("Add number"));

// const arr = Array.from(Array(number*15+1).keys()); //uztaisa array ar tik daudz elementiem, cik ievada lietotājs, plus vēl piereizina klāt 15
// for(let i = 0; i <= arr.length; i++){             // pārveido visus par skaitlīšiem
//     console.log(arr[i]);
// }



// const arr = Array.from(Array(number*15+1).keys()); 
// for(let i = 0; i <= arr.length; i+=15){ // kāpēc viņš izdod arī 0? tā jau strādātu jo, ja ievadu 3, tad izdod 0, 15, 30 un 45
//     console.log(arr[i]);
// };


const number = parseInt(prompt("Add number"));
const arr = [];
for( let i = 1; i <= number; i++){
    const fizzbuz = i*15;
    arr.push(fizzbuz);
}
console.log(`fizz buzz numbers ` +  arr.join());