const fabricaPromise = (indice) =>
  new Promise((resolve, reject) => {
    const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
    const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
      resolve(`La promesa ${indice} se cumplió`);
    }, tiempoResolved);
    setTimeout(() => {
      reject(`La promesa ${indice} falló`);
    }, tiempoReject);
  });

/*let miPromise = [];
for (let i = 0; i < 10; i++) {
  miPromise = [...miPromise, fabricaPromise(i)];
  fabricaPromise(i);
}

miPromise.forEach((promesaActual) =>
  promesaActual
    .then((respuesta) => console.log(respuesta))
    .catch((razon) => console.log(razon))
);

Promise.allSettled(miPromise).then((respuesta) =>
  console.log(respuesta)).catch((razon) => console.log(razon))
;*/

async function miAsyncFuncion() {
  try {
    const miPromesa1 = await fabricaPromise(1);
    //console.log("este es el valor de miPromesa1", { miPromesa1 });
    return miPromesa1;
} catch (error) {
    //console.log("hubo un error");
    throw error;
}
}
function miFuncionNormal() {
  const miPromesa2 = fabricaPromise(1)
    .then((resultado) => console.log(resultado))
    .catch((razon) => console.log(razon));
}
