# script para evaluaciones unicah

## solo copia el siguiente codigo y pegalo en la consola de desarrollador de tu navegador
### para abrir la consola da click derecho en la pagina de evaluaciones y selecciona inspeccionar
> cambia el valor de "calificacion" segun la calificacion que gustas dar:
* 0 exelente
* 1 muy bueno
* 2 bueno
* 3 regular
* 4 malo

```js
let inputs = document.querySelectorAll('input[type="radio"')
let calificacion = 4 // malo
inputs.forEach((_e, i) => {
  if ((i + 1) % 5 == 0) {
    inputs[i - calificacion].checked = true
  }
})
```

