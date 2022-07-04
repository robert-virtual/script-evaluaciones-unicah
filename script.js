let inputs = document.querySelectorAll('input[type="radio"')
// 0 exelente
// 1 muy bueno
// 2 bueno
// 3 regular
// 4 malo

// cambia el valor de esta variable segun la calificacion que quieres dar
let calificacion = 4 // malo

for (let i = 4; i < inputs.length; i += 5) {
  inputs[i - calificacion].checked = true
}
