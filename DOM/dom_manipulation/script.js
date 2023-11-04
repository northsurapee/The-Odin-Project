/*
The DOM (or Document Object Model) is a tree-like representation of the contents of a HTML 
- a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.

After browser renders HTML we will called it DOM, and can alter it using JavaScripts without any change on real HTML file.
*/

// Add elements to the "container" using JavaScript and DOM manipulation methods

// add a <div class="content">This is the glorious text-content!</div> to the #container tag
const container = document.querySelector('#container');
const content1 = document.createElement('div');
content1.classList.add('content');
content1.textContent = 'This is the glorious text-content!';
container.appendChild(content1);

// add <p> with read text that says "Hey I'm red!"
const content2 = document.createElement("p")
content2.style.color = "red"
content2.textContent = "Hey I'm red!"
container.appendChild(content2)

// add <h3> with blue text that says “I’m a blue h3!”
const content3 = document.createElement("h3")
content3.style.color = "blue"
content3.textContent = "I’m a blue h3!"
container.appendChild(content3)

/*
a <div> with a black border and pink background color with the following elements inside of it:
- another <h1> that says “I’m in a div”
- a <p> that says “ME TOO!”
** Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

// create child of <div>
const content4_1 = document.createElement("h1")
content4_1.textContent = "I’m in a div"
const content4_2 = document.createElement("p")
content4_2.textContent = "ME TOO!"

// create <div> and add child to it
const content4 = document.createElement("div")
content4.style.cssText = "border: 2px solid black; background-color: pink;"
content4.append(content4_1, content4_2)
// content4.appendChild(content4_1)
// content4.appendChild(content4_2)

// add <div> to container
container.appendChild(content4)