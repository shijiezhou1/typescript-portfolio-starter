import 'bootstrap'
import 'jquery';

interface JQuery {
    parallax: any;
}

const here = $('.holyshit').text();
console.log('jquery work', here)

import { MyLibrary, Car } from './MyLibrary';
const myLibrary = new MyLibrary();
const result = myLibrary.executeDependency();
console.log(`A random number ${result}`);

const myCar = new Car();
myCar.wheel();