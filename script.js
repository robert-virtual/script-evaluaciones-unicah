let inputs = document.querySelectorAll('input[type="radio"')
// 0 exelente
// 1 muy bueno
// 2 bueno
// 3 regular
// 4 malo

// cambia el valor de esta variable segun la calificacion que quieres dar
let calificacion = 4 // malo

inputs.forEach((_e, i) => {
  if ((i + 1) % 5 == 0) {
    inputs[i - calificacion].checked = true
  }
})
