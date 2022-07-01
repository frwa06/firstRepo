const lodash=require('lodash')

let miObjeto = {a:1, b:2, c:'hola', d:function(){console.log('soy una funcion')}, e:true, f:{f1:'soy f1', f2:'soy f2', f3:()=>{}}}

let miObjeto2 = lodash.cloneDeep(miObjeto)

miObjeto.f.f1

miObjeto2.f.f2='Hablame Papi Juancho'

console.log(miObjeto)
console.log(miObjeto2)

let miObjeto3 = JSON.parse(JSON.stringify(miObjeto))
miObjeto3
