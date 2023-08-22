// import Character from "./js/Character";
import Magician from './js/Magician';
// import Daemon from "./js/Daemon";
console.log('started!');

const magician = new Magician('Tanya', 100, 2);

console.log(magician.attack); // 90
magician.stoned = true;
console.log(magician.attack); // 85
magician.setDistance(4);
magician.stoned = false;
console.log(magician.attack); // 70

