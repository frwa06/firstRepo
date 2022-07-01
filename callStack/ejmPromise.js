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

let miPromise = [];
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
;
/*
miPromise.then(
  (respueta) => console.log(respueta),
  (razon) => console.log(razon)
);*/
