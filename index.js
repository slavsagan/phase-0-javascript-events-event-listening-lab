const input = document.getElementById('button')

const addingEventListener = function() {
  input.addEventListener('click', function() {
    alert ('I was clicked')
  })
}

/** OPTIONAL */
// const addingEventListener = function() {
//   const input = document.getElementById('button')
//   input.addEventListener('click', function() {
//     alert ('I was clicked')
//   })
// }
