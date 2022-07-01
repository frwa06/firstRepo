const listaUsuarios=document.getElementById("body-usuarios")
let usuario = {};

function tomarIndiceUsuario(){
    return location.search.replace('?','').split('=')[1]
}

function obtenerUsuario() {
    fetch(`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${tomarIndiceUsuario()}`)
      .then((response) => response.json())
      .then((respuestaUsuario) => {
        console.log("respuestaUsuario", respuestaUsuario);
        usuario = respuestaUsuario;
        render();
      });
  }
  function render(){
    const usuarioRender = `<tr><td class="title">Nombre</td><td>${usuario.nombre ? usuario.nombre : "vacío"}</td></tr><tr><td class="title">Apellido</td><td>${
        usuario.apellido ? usuario.apellido : "vacío"
      }</td></tr><tr><td class="title">País</td><td>${usuario.pais ? usuario.pais : "vacío"}</td>
     </tr>`;
      console.log(usuarioRender);
      listaUsuarios.innerHTML= usuarioRender
  }
  obtenerUsuario();