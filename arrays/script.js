// // const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// // shopping[2] = 'tahini';
// // console.log(shopping);
// // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
// // ja es ielieku citu index pie tahini, vai mainīsies secība? jap mainīsies, tātad es pielieku index kurā vietā aes gribu un tajā ieliekas


// // const random = ['tree', 795, [0, 1, 2]];
// // console.log(random[2][2]); // sitā es dabūju ārā array 2 elementa, kas ir array, 2 elementu, kas ir 2nieks
// // console.log(random[2]); // dabūju ārā visas array vērtības

// //const cities = ['Manchester', 'Liverpool'];
// //cities.push('Cardiff');
// //const newLength = cities.push('Bristol');
// //console.log(cities);     // [ "Manchester", "Liverpool", "Bristol" ]
// //console.log(newLength);  // 3
// //console.log(cities.length); 
// // //cities.pop();
// // //console.log(cities);
// // //const removedCity = cities.pop();
// // //console.log(removedCity);

// // //ja zinu idexu, tad varu izņemt ārā konkrēto item, varu arī izņemt ārā vairākus item
// // const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle' , 'riga', 'ogne', 'cesis'];
// // const index = cities.indexOf('riga');
// // console.log(index);
// // if (index !== -1) { //ar kuru sākot ņemt nost ko nozīmē !==?
// //   cities.splice(index, 2); //cik ņemt nost
// // }
// // console.log(cities);  

// // const birds = ['Parrot', 'Falcon', 'Owl'];

// // for (const bird of birds) { //dabūju visus ārā no array
// //   console.log(bird);
// // }

// // function pieskaita2(number) {
// //     return number + 2;
// //   }
// //   const numbers = [5, 2, 7, 6];
// //   const doubled = numbers.map(pieskaita2);
// //   for (const lastNumber of doubled)
// //   console.log(lastNumber);  // [ 10, 4, 14, 12 ]


//   function isLong(city) {
//     return city.length > 8;
//   }
//   const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
//   const longer = cities.filter(isLong);
//   for (const pilseta of longer){
//     console.log(pilseta);  // [ "Liverpool", "Edinburgh" ]
//   }

// const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';




/* let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
const search = '\\+';
const searchRegExp = new RegExp(search, 'g'); 
const replaceWith = ',';
const result = myString.replace(searchRegExp, replaceWith);
console.log(result);
const myArray = result.split(",");
console.log(myArray);
const arrayLengt = myArray.length;
console.log(arrayLengt);
const lastItem = myArray[myArray.length -1];
console.log(lastItem);*/


// let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
// for (let i=0; i<myArray.length; i++){
//     const arr = myArray[i]+"("+i+")";
//     console.log(arr);
// }


const string = prompt("Add Palindrome"); //palūdzu ievadīt palindrome
const myArray = string.toLowerCase().split('');
let isPalindrome;
for (let i=0; i<myArray.length; i++){ // norāda, ka nevajag iet cauri visam,bet tikai pusei, jo nav jēgas iet cauri visam, dubults darbs
    if(i<myArray.length-1-i){
        if(myArray[i] === myArray[myArray.length-1-i]){
            isPalindrome=true;
            alert("name " + string +" is a palindrome"); //kāpēc alert ir 3x?
        }
        else{
            isPalindrome=false;
            alert("name " + string +" is not a palindrome");
            break; 
        }
    }
}


//const shuffled = string.split('').sort(function(){return 0.5-Math.random()}).join('')
const shuffled = string.split('').sort((a,b) => 0.5 - Math.random()).join('')
console.log(shuffled);

alert("Alergorie of name " + string +" is " +shuffled); //bet var izvadīt arī to pašu vārdu, kā to novērst?

/*String.prototype.shuffle = function () { //bet es nesaprotu īsti kā strādā
    let a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
console.log(string.shuffle());*/

function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  
  console.log(countWords(string));
 

// function countWords(string) {
//     str = string.replace(/(^\s*)|(\s*$)/gi,"");
//     str = string.replace(/[ ]{2,}/gi," ");
//     str = string.replace(/\n /,"\n");
//     return string.split(' ').length;
//  }
// console.log(countWords.string);


