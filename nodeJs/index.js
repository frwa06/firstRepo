const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

const requestP = (req, res) => {
  //1)obtener la url desde el objeto rquest
  const urlCurrent = req.url;
  const urlParse = url.parse(urlCurrent, true);
  //2)obtener la ruta
  const ruta = urlParse.pathname;
  //3) 3.0 Quitar Slash
  const cleanRout = ruta.replace(/^\/+|\/+$/g, "");
  //3.1 obtener  el método http
  const metodo = req.method;
  //3.2 obtener variables del query url con destructuring
  const { query } = urlParse;

  //3.3 obtener headers
  const { headers } = req;
  console.log({ headers });
  //3.4 obtener payload, en el caso de haberlo
  const decoder = new StringDecoder("utf-8");
  let buffer = "";
  //3.4.1 ir acomodando la data cuando el request reciba un payload
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });
  //3.4.1 terminar de acumular la data y decirle al decoder que fonal
  req.on("end", () => {
    buffer += decoder.end();

//3.5 ordenar la data del request
const data = {
    ruta: cleanRout,
    query,
    metodo,
    headers,
    payload: buffer
};

console.log({data});
//3.6 elegir el manejador dependiendo de la ruta y asignar la funcion que el enrutador la respuesta// handler

let handler;
if(cleanRout && enrutador[cleanRout]){
    handler = enrutador[cleanRout]
}else{
    handler = enrutador.noFound;
}

//4. ejecutar handler (manejador) para enviar respuesta
if(typeof handler === 'function'){
    handler(data, (statusCode= 200, mensaje)=>{
        const respuesta =JSON.stringify(mensaje);
        res.setHeader("Content-Type", "application/json");
        res.writeHead(statusCode);
        //linea done realmente estamos respuondiendo a la aplicación cliente
        res.end(respuesta);
    })
}
  });
};

const enrutador = {
    ruta: (data, callback)=> 
    callback(200,{mensaje: 'this is /ruta'}),
    users: (data, callback)=> 
    callback(200,[{name: 'user 1'},{name: 'user 3'},{name: 'user 2'}]),
    noFound: (data,callback)=>{callback(404, {mensaje: 'no found'})}
}
 
//3)enviar respuesta dependiendo de la rut

const server = http.createServer(requestP);

server.listen(5000, () => {
  console.log("Hi Again from terminal");
});
