/*const miBoton = document.getElementById("miboton")
const ejecucionCuanClick = evento=>{console.log(evento);alert('diste click en boton')}
miBoton.addEventListener('click', ejecucionCuanClick)*/

setTimeout(() => {
  console.log("ejecion1");
  setTimeout(() => {
    console.log("ejecucion2");
    setTimeout(() => {
      console.log("ejecucion3");
      setTimeout(() => {
        console.log("ejecucion4");
      }, 4000);
    }, 1000);
  }, 2000);
}, 3000);
