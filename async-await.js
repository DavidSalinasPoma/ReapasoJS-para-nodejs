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

// Resolviendo las promesas con el async y el await
const getInfoEmpleado = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado.nombre} es: ${salario.salario}`;
  } catch (error) {
    throw error; // Devuelve el reject
  }
};

const id = 3;

getInfoEmpleado(id)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
