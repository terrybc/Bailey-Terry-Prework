const myFunction = function(event) {
  console.log('Hooray!!')
  document.querySelector('#display').innerText = "Text has been changed"
}

// Use `document.querySelector()` to obtain a reference to the `#test` element.

// Add an event listener that triggers `myFunction` when the mouse enters the `#test` element.
document.querySelector('#test').addEventListener('mouseenter', myFunction);