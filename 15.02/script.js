let a = 1;
let b = 2121.3232;
let bigIn = 5454545455454545454545454545
let specialNumber = 5E-1;
console.log(specialNumber); // kosolē ar šo izsauc konkrēto special nr

a = 2;
b = 1;
console.log(a + b); // consolē atveras summa

a = 0.2;
b = 0.1;
console.log(a + b); // consolē atveras summa bet umma ir ar daudz nullēmu galā 4

a = 0.2;
b = 0.1;
console.log(a + b == 0.3); // konsolē parādās booleans value  true or false šajā gadījumā false

a = 2;
b = 1;
console.log(a + b == 3); // consolē atveras true

a = 0.2;
b = 0.1;
console.log((a + b) - 0.3 < Number.EPSILON); //šis ir svarīgi, bet kāpēc? nesapratu!

let myNumber = Number("6452829374648");
myNumber = parseInt("75757575757") //pārsaukt no tring uz nr

myNumber = Number("434343,32323".replace(",","."));
console.log(myNumber);

a = 0;
b = 0;
let result = a / b;
console.log(result);

//34323 = 3 * 10^0 + 2 * 10^1 + 3 * 10^3 + 4 10^ 4 + 3 10^5


let answer = true;
console.log(typeof(answer));