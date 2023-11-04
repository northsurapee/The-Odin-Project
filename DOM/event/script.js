// Method 2 : set properties of DOM nodes in JS, still have same problem (one property per DOM node)
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World 2!");

// Method 3 : attach event listeners to the DOM nodes in JS, allow multiple event listeners -> recommend!
const btn = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World 3!");
});