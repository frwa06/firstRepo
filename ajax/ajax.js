const listaUsuarios= document.getElementById('lista-usuarios');
const boton=document.getElementById('boton');

function regListener(){
   const usuarios = JSON.parse(this.responseText);
   console.log(usuarios)
   const usuariosRender = usuarios.map((usuario)=>`<li>${usuario.name}</li>`).join("");
   console.log(usuariosRender);
   listaUsuarios.innerHTML=usuariosRender;
}



let oReq=new XMLHttpRequest();
oReq.addEventListener("load",regListener);



function enviarDatos(){
    oReq.open("POST","https://jsonplaceholder.typicode.com/users", true);
    oReq.setRequestHeader("Content.type","application/x-www-form-urlencoded");
    oReq.send("name=Franswa");
    setTimeout(refresh,3000)
}
function refresh(){
    oReq.open("GET","https://jsonplaceholder.typicode.com/users");
    oReq.send();

}
boton.onclick = enviarDatos;