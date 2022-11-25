const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//1. a <p> with red text that says “Hey I’m red!”
const myParagraph = document.createElement('p');
myParagraph.classList.add("myParagraph");
myParagraph.textContent = "Hey I'm red!";
myParagraph.style.color = "red";

container.appendChild(myParagraph);

//2. an <h3> with blue text that says “I’m a blue h3!”
const myHeading = document.createElement('h3');
myHeading.classList.add("myHeading");
myHeading.textContent = "I'm a blue h3!";
myHeading.style.color = "blue";

container.appendChild(myHeading);

// 3. a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> 
// and <p> to it before adding it to the container.

//divContainer
const myDiv = document.createElement("div");
myDiv.classList.add("divContainer");
myDiv.style.border = "Thick Solid #000000";
myDiv.style.backgroundColor = "pink";

container.appendChild(myDiv);

//Header1 in my pink div
const headingInADiv = document.createElement('h1');
headingInADiv.classList.add("headingInADiv");
headingInADiv.textContent = "I'm in a div";

myDiv.appendChild(headingInADiv);

//Paragraph in my pink div
const paragraphInADiv = document.createElement("p");
paragraphInADiv.classList.add("paragraphInADiv");
paragraphInADiv.textContent = "ME TOO!";

myDiv.appendChild(paragraphInADiv);