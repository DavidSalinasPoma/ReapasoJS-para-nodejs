const deadpol = {
  nombre: 'wade',
  apellido: 'winston',
  poder: 'regeneracion',
  nameComplete() {
    return `${this.nombre} ${this.apellido}`;
  },
};

// Mostrar datos del objeto
console.log(deadpol.nameComplete());

const { nombre, apellido, poder, edad = 38 } = deadpol;

console.log(nombre, apellido, poder, edad);

// Destructuracion de arreglos
const heroes = ['Deadpol', 'Superman', 'Batman'];

const [, , h3] = heroes;

// Imprimiendo Elementos de un arreglo
console.log(h3);
