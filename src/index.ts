import { MyLibrary, Car } from './MyLibrary';
const myLibrary = new MyLibrary();
const result = myLibrary.executeDependency();
console.log(`A random number ${result}`);

const myCar = new Car();
myCar.wheel();