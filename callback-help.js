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
const getEmpleado = (id, callback) => {
  const empleado = empleados.find((empleados) => empleados.id === id);
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

// Ejecutando la funcion getEmpleado
getEmpleado(1, (err, empleado) => {
  if (err) {
    console.log('Error!');
    return console.log(err);
  }
  console.log('Empleado existe');
  console.log(empleado);
});

// Funcion que trae la información del empleado con su salario
const getSalario = (id, callback) => {
  // Buscando un elemento con un id
  const empleado = empleados.find((empleados) => empleados.id === id);
  // Buscando un Salario con un id
  const salario = salarios.find((salarios) => salarios.id === id);
  if (empleado) {
    callback(null, empleado, salario);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

getSalario(4, (err, empleado, salario) => {
  if (err) {
    console.log('Error!');
    return console.log(err);
  }
  console.log('Empleado existe');

  if (salario != undefined) {
    const resp = `El empleado con id: ${empleado.id} tiene un salario de: ${salario.salario}`;
    console.log(resp);
  } else {
    const resp = `El empleado con id: ${empleado.id} no tiene Salario`;
    console.log(resp);
  }
});
