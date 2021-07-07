const empleados = [
  {
    id: 1,
    nombre: 'David',
  },
  {
    id: 2,
    nombre: 'Favi',
  },
  {
    id: 3,
    nombre: 'Made',
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

// Funcion que trae la informacion de un empleado
const getEmpleado = (id) => {
  const empleado = empleados.find((empleados) => empleados.id === id);

  return new Promise((resolve, reject) => {
    //   Cuerpo de la promesa
    if (empleado) {
      resolve(empleado);
    } else {
      reject(`No existe empleado con id ${id}`);
    }
  });
};

// Obteniendo la promesa
let id = 4;
getEmpleado(id)
  .then((respuesta) => console.log(respuesta)) // resolve
  .catch((err) => console.log(err)); // reject

//  Resolviendo el salario
const getSalario = (id) => {
  // Buscando un salario a traves de el id de usuaario
  const salario = salarios.find((salarios) => salarios.id === id);

  // Promesa
  return new Promise((resolve, reject) => {
    if (salario) {
      resolve(salario);
    } else {
      reject(`El salario para el empleado con id: ${id} no existe`);
    }
  });
};

id = 2;
getSalario(id)
  .then((respuesta) => console.log(respuesta)) //resolve
  .catch((err) => console.log(err)); // reject

// Realacion del empleado con el salario
getEmpleado(id)
  .then((empleado) => {
    getSalario(id)
      .then((salario) => {
        console.log(
          `El empleado ${empleado.nombre} tiene un salario de: ${salario.salario}`,
        );
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
