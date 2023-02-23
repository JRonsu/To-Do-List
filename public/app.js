// Get references to the form, input, and list HTML elements
const form = document.querySelector('form');
const input = document.querySelector('#item');
const list = document.querySelector('#list');

// Handle form submit events
form.addEventListener('submit', e => {
  e.preventDefault();  // Prevent the form from being submitted in the default way
  const value = input.value.trim();  // Get the trimmed value of the input
  if (value !== '') {  // If the value is not empty
    addItem(value);  // Add a new item to the list
    input.value = '';  // Clear the input field
    input.focus();  // Set the focus to the input field
  }
});

// Handle list item click events
list.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {  // If the clicked element is a list item
    e.target.classList.toggle('checked');  // Toggle the 'checked' class on the list item
  }
});

// Add a new item to the list
function addItem(text) {
  const li = document.createElement('li');  // Create a new list item element
  li.textContent = text;  // Set the text content of the list item
  list.appendChild(li);  // Add the list item to the list
}