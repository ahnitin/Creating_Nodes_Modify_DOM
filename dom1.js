// Traversing the Dom

var itemList = document.querySelector("#items");
//parent node

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor ="#f4f4f4"
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ="#f4f4f4"
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);

// Child Nodes

console.log(itemList.childNodes);
// not suggested to use childnode it given text as white line or space use childern
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor ="yellow";

//First Child
console.log(itemList.firstChild);
//first element child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ="Hello 1"

// last child
console.log(itemList.lastChild);
//last element child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent ="Hello ho";

// next sibling
console.log(itemList.nextSibling);
// mext element sibling
console.log(itemList.nextElementSibling);

// previous sibling
console.log(itemList.previousSibling);
//previous element sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color ="green";

// create elements

var newdiv = document.createElement('div');
newdiv.className ="Hello";
newdiv.id ="hello1";
newdiv.setAttribute('title','hello 1you');
console.log(newdiv);

// crete text node 
var newdivtext = document.createTextNode("hello world");

// add text to div
newdiv.appendChild(newdivtext);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newdiv,h1);

newdiv.style.fontSize = "30px";




