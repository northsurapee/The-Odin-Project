/*
We learned above that we can get a nodelist of all of the items matching 
a specific selector with querySelectorAll('selector'). In order to add 
a listener to each of them we simply need to iterate through the whole list like so:
*/

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button in "buttons" node lists
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

/*
Some useful events include:
- click
- dblclick
- keydown
- keyup
*/