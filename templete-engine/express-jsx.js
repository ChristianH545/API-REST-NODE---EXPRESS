//FILE-SYSTEM ES UNA LIBRERIA NATIVA DE NOTE (asíncrono)
const fs = require("fs");

//FUNCTION "getKeysfromOption()" va a recibir las opciones usando desestructuracion vamos a sacar los {settings, _locals spread operator (...) UNA VARIBLE LLAMADA "objectKeys"} y realizamos un return con el metodo de javascript Object vamos a retornar esas keys. En la siguiente funcion nos permite iterarlos y trabajar con ellos
function getKeysfromOption(options) {
  const { settings, _locals, ...objectKeys } = options;
  return Object.keys(objectKeys);
}

function getRenderedContent(content, options) {
  const keys = getKeysfromOption();
  let contentString = content.toString();

  //CLICLO "FOR OF" ITERAMOS (recorro los keys y buscame el contenido de mi template string de ("") esos keys y remplazame el contenido)
  for (let key of keys) {
    contentString = contentString.replace(
      new RegExp(`\{${key}\}`, "gi"),
      options[key]
    );
  }
  return contentString;
}

function expressJsx(filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(err);
    }
    const rendered = getRenderedContent(content, options);
    return callback(null, rendered);
  });
}

module.exports = expressJsx;
