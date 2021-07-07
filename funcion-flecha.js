// Es una funcion de flecha
const saludar = (nombre) => {
  return `Saludos ${nombre}`; // Saludos + nombre
};

console.log(saludar('David'));

// Funcion normal
function sumar(a, b = 10) {
  return a + b;
}
console.log(sumar(2, 5));

// Funcion flecha con argumento por defecto
const add = (a, b = 10) => {
  return a + b;
};

console.log(add(3));

// Funcion de flecha en una linea
const operacion = (a, b) => a + b;

console.log(operacion(2, 2));

// Funcion de flecha saludar
const saludo = () => 'Saludar';
console.log(saludo());

// Funcion flecha que no devuelve nada
const saludarVoid = () => console.log('Saludar David');

saludarVoid();
