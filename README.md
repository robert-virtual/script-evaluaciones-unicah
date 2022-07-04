# script para evaluaciones unicah

## solo copia el siguiente codigo y pegalo en la consola de desarrollador de tu navegador

```js
let inputs = document.querySelectorAll('input[type="radio"')
let calificacion = 4 // malo
for (let i = 4; i < inputs.length; i += 5) {
  inputs[i - calificacion].checked = true
}
```
> cambia el valor de "calificacion" segun la calificacion que gustas dar:
* 0 exelente
* 1 muy bueno
* 2 bueno
* 3 regular
* 4 malo

### para abrir la consola da click derecho en la pagina de evaluaciones y selecciona inspeccionar
