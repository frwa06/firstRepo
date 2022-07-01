const listaUsuarios = document.getElementById("body-usuarios");
const boton = document.getElementById("boton");
const limpiar = document.getElementById("limpiar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const pais = document.getElementById("pais");
const indice = document.getElementById("indice");
let usuarios = [];
let botonesEliminar = null;

function render() {
  const usuariosRender = usuarios
    .map(
      (usuario, indice) =>
        `<tr><td>${usuario.nombre ? usuario.nombre : "vacío"}</td><td>${
          usuario.apellido ? usuario.apellido : "vacío"
        }</td><td>${usuario.pais ? usuario.pais : "vacío"}</td>
        <td><button class="eliminar" data-indice=${indice}>Eliminar</button></td>
        <td><button class="editar" data-indice=${indice}>Editar</button> </td>
        <td><button calss="ver"><a class="ver" href="/ajax/index2.html?usuario=${indice}">Ver</a></button></td></tr>`
    )
    .join("");
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
  botonesEliminar = document.getElementsByClassName("eliminar");
  botonesEditar = document.getElementsByClassName("editar");
  Array.from(botonesEliminar).forEach((botonesEliminar) => {
    botonesEliminar.onclick = deleteUser;
  });
  Array.from(botonesEditar).forEach((botonesEditar) => {
    botonesEditar.onclick = editUser;
})};
function enviarDatos(e) {
  e.preventDefault();
  let accion = e.target.innerText;
  console.log('accion', accion)
  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    pais: pais.value,
  };
  let url = null;
  let method = null;
  if(accion === 'Crear'){
    url = "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios";
    method = 'POST';
  }else if(accion === 'Editar'){
    if(indice.value){
      url = `https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice.value}`,
      method = 'PUT';
    }else{
      return;
    }
  }  else{
      return;
    }
  fetch(url, {
    method, // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((response) => response.json())
    .then((respuestaJson) => {
      console.log("respuestaJson", respuestaJson);
      refresh();
      restaurarTextoBoton();
    }).catch((razon)=>{console.log(razon);
      restaurarTextoBoton();}
    );
  }

function deleteUser(e) {
  e.preventDefault();
  console.log("delete user", e);

  fetch(
    `https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${e.target.dataset.indice}`,
    {
      method: "DELETE", // or 'PUT'
    }
  )
    .then((response) => response.json())
    .then((respuestaJson) => {
      console.log("respuestaJson", respuestaJson);
      refresh();
    });
}
function editUser(e) {
  e.preventDefault();
  console.log('editar usuario', e)
  if(e.target.dataset.indice){
    const usuario = usuarios[e.target.dataset.indice];
  nombre.value = usuario.nombre ? usuario.nombre : '';
  apellido.value = usuario.apellido ? usuario.apellido : '';
  pais.value = usuario.pais ? usuario.pais : '';
  indice.value = e.target.dataset.indice;
  boton.innerText='Editar'
  }else{
    boton.innerText = 'Crear'
  }
  
 
}


function refresh() {
  fetch("https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios")
    .then((response) => response.json())
    .then((respuestaUsuarios) => {
      console.log("respuestaUsuarios", respuestaUsuarios);
      usuarios = respuestaUsuarios;
      render();
    });
}
function restaurarTextoBoton(){
  boton.innerText = 'Crear';
  indice.value= '';
  nombre.value = '';
  apellido.value = '';
  pais.value = ''
}

refresh();
boton.onclick = enviarDatos;
limpiar.onclick = restaurarTextoBoton;
