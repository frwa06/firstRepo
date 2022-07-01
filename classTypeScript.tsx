/*Typescritp contiene a JS mas otras funcionalidades que le dan mas potencialidad.
Progamación orientada a objetos
javascript basic

Los tipos en typescript son fuertes... compuestos y primitivos los primeros basados en los segundos

*/

import { UsingJoinColumnOnlyOnOneSideAllowedError } from "typeorm";

//JS tres tipos de variables var, let, const... var la forma vieja y los otros la novedad
//this is parte del constesto de las funciones... y se diferencian de las arrow function
//Los objetos dentro tiene unos atributos que cambian segun sus atributos pero sin dejar de ser referenciado como dicho objeto
//Typescript: el tipado es muy importante. Validaciones en build time, valida el codigo mientras está en construcción

let iAmNumber: number=5;
const arr: Array<number>=[1,2,3,4]

//funciones
function iAmFunction():void{}
const variableTSFunction = function(): number
{
    return 0;
}

const arrowTSFunction = (): string =>{
    return""
}

//LAS INTERFACE

export interface ICar{
    model: number;
    brand: string;
    price:number;
    type?: string;

}

export const car1:ICar{
    model
}

//Clases...
export class User{

    private name: string;
    private lastname: string;

    constructor(name, lastname){
        this.name = name;
        this.lastname= lastname;
       }

       public printUser():void{
           console.log(`user${this.name}${this.lastname}`)
       }
//Importación & exportación -CommonJS??


}
//combineType
//any in typescript

function identityAny(arg:any): any{
    return arg;
}

function identity<Type>(arg:Type):Type{
    return arg;
}


//parcialType- require type-- Record Type -- pick Type 
//WHAT IS IT: *set up compiler * decorators * conditional types * indexed acces types * mapped Types
