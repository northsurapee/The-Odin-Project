/* Using named functions can clean up your code considerably
   use a named function as a callback for another function.
   callbacks are functions that are passed into another function as an argument.
*/

// Named Function
function alertFunction(e) {
    alert(e.target);
  }

// Method 2 : set properties of DOM nodes
const btn2 = document.querySelector('#btn2');
btn2.onclick = alertFunction

// Method 3 : addEventListener
const btn = document.querySelector('#btn3');
btn3.addEventListener('click', alertFunction);

// parameter "e" is refer to HTML element of btn4
btn4.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
