let miArray=[];
let miArray2=[];
let control=0;

while (control<10 ){
    miArray.push(control);
    if(control % 2 ===0){
        control= control+2
    }
    else{
    control=control+1}
}

console.log(miArray)

for(let c=0;c<10;c=c+2){
    miArray2.push(c)
}
console.log(miArray2);

const otherArray=['hola', 'soy ingeniero', 'y quiero ser tu presidente'];

function convertiMayusculas(actual, indice, arrayCompleto){
    const respuesta=actual.toUpperCase()
    console.log(respuesta);
    console.log(indice);
    console.log(arrayCompleto)
}

otherArray.forEach(convertiMayusculas)


array1=['Franswa','Jose','Auramaría']

const map1= array1.map(x=>x + ` Cardona Gamas`)

console.log(map1)


const arrayN=[1,2,3,4,5,6,7,8,9]

function soloPares(numeroActual){
    return numeroActual % 2 === 0;
}

let resultado = arrayN.filter(soloPares)
console.log(resultado)




