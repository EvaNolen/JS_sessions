document.title = "The New Title"; //pieklūst elementa title un nomaina to
console.log(this.document.getElementById("MyParag"));

this.document.getElementById("MyParag").style.color = "red";
this.document.getElementById("MyParag").style.fontSize = "x-large";

let paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    let element = paragraphs [i];
    element.style.color = "green";
}

let myClassElements = this.document.getElementsByClassName("myClass");

for (let i = 0;  i<myClassElements.length; i++) {
    let element = myClassElements[i];
    element.style.color = "red"; //nestrādā, jo DIV iekšā ir P, kas ir iepriekš nodefinēts green, tāpēc no sākuma izpildās div, nomaina krāsu sarkanu un pēc tam izpildās p, atpakaļ uz zaļu
    element.style.fontSize = "large";
    //let childs = element.childNodes;
    for (let j = 0; j < element.childNodes.length; j++)
    if (element.childNodes.tagName[j] === "P")
        element.childNodes[0].style.color = "red";
}