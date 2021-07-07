// Un collback trabaja como parametro de otra función.
// Los callbacks son una funcion que se mandan como argumento a otra función
setTimeout(() => {
  console.log('Hola David');
}, 1000);

const getUsuarioById = (id, callback) => {
  const usuario = {
    id: id,
    nombre: 'David',
  };

  setTimeout(() => {
    callback(usuario);
  }, 1000);
};

// Usar la función
getUsuarioById(10, (usuario) => {
  console.log('Hola Mundo');
  console.log(usuario);
});
