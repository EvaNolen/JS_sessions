// Examni the document object
//console.dir(document);
//show us all the different properties and methods attached to the document

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = "DOM piemēri"; //kā nomainīt dokumentā kaut ko
// console.log(document.doctype);
// console.log(document.head); // atveras <head>...</head> man atveras miljons garš saraksts? kāpēc?
// console.log(document.body); // tas pats
// console.log(document.all); //vajadzētu uztaisīt array un tur iekšā ir viss, kas ir DOM ielikts
// console.log(document.all[14]);
    
// console.log(document.forms); //šādi var atrast visas form DOM, ieliek array iekšā, bet tā nav īsti array, bet kā html collection, ir nelielas atšķirības, - piemēram, nevar izdarīt kaut kādas array metodes un tāpēc jāpārvērš no sākuma ir par array yn tad to var izdarīt. 

// console.log(document.links);

//selectors
//GETEMELEMTNTBYID//

//console.log(document.getElementById('header-title')); //es šo varu ieliekt variable
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle); 

// tagad var ar šo header izdarīt dažādas lietas, kā piemēram:

// headerTitle.textContent = 'hello'; //nomainu virsrakstu
// headerTitle.innerText = 'Goodbay'; // būtībā innerText pārrakstīja TextContent, atšķirība ir tajā, ka viens no viņiem ir svarīgs styling
//piemēram es pielieku h1 klāt <span style="display-none">123</span>, tad uztaisot console.log ar:
// text.Contet tas parādīsies konsolē, bet nebūs lapā
//InnerText neparādīsies arī kosolē

//headerTitle.innerHTML = '<h3>oppa</h3>'; // nepārraksta h1 par h3, ieliek iekšā h1. 
//let header = document.getElementById('main-header');
//header.style.borderBottom = "solid 3px #000";

// GETELEMENTSBYCLASSNAME// 
// Piemēram: grib dabūt visus list item

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent = 'Hello 2'; //nomainu list nosaukumu 2.pēc kārtas
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'grey';
 
// //grūtības ir, kad visiem kopā grib kko izdarīt - piemēram nomainīt visiem uz pelēku fonu
// //items.style.backgroundColor = 'f4f4f4'; šis nestrādā, jo ir jātaisa loop

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//getelementsbytagname //

/* let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

li[1].textContent = 'Hello 2'; //nomainu list nosaukumu 2.
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'grey';
 
//grūtības ir, kad visiem kopā grib kko izdarīt - piemēram nomainīt visiem uz pelēku fonu
//items.style.backgroundColor = 'f4f4f4'; šis nestrādā, jo ir jātaisa loop

for (let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
*/

//    QUERYSELECTOR //
// strādā kā jquery, bet paņem tikai 1 item, piemēram, ja es gribu kaut ko izdarīt ar title, bet ir daudz title lapā, tad paņems tikai pirmo. 


/* 
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Hello World'; 

let submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

let item = document.querySelector('.list-group-item');
item.style.color = 'red'; //paņēma tikai pirmo no list item un iekrāsoja sarkanu

//Ja es gribu pēdējo list item izmanto :last-child
let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

//ja grib otro List Item - izmanto :nth-child(iekavās ciparu, kuru gribi izmainīt)
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

//    QUERYSELECTOR ALL //

let titles = document.querySelectorAll('.title');
console.log(titles);

 
 let odd = document.querySelectorAll('li:nth-child(odd)');
 let even = document.querySelectorAll('li:nth-child(even)');
  
for (let i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = "#f4f4f4";
    even[i].style.backgroundColor = "#ccc";
}
*/

// TRAVERSING THE DOM //









