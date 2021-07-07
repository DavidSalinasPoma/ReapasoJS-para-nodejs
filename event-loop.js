console.log('Inicio de programa'); // 1

setTimeout(() => {
  console.log('Primer timeout'); // 5
}, 3000);

setTimeout(() => {
  console.log('Segundo timeout'); // 3
}, 0);

const saludo = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hola desde una promesa');
    } else {
      reject('Hay un error');
    }
  });
};

saludo().then(
  (resp) => {
    console.log(resp);
  },
  (error) => {
    console.log(error);
  },
);

setTimeout(() => {
  console.log('Tercer timeout'); // 4
}, 0);

console.log('Fin de programa'); // 2
