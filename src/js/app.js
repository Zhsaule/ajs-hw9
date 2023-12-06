// TODO: write your code here
import ArrayBufferConverter from "./arraybufferconverter";
import getBuffer from "./arraybufer";
import Magician from "./magician";
import Daemon from "./daemon";

console.log('worked');

//HW9 ArrayBuffer
const converter = new ArrayBufferConverter();
const buffer = getBuffer();
if (!converter.load(buffer)) {
    const jsonString = converter.toString();
    const dataObject = JSON.parse(converter.toString());
    console.log(jsonString);
    console.log(dataObject);
}

//HW9 Math (log/trig)
const magician = new Magician();
magician.stoned = true; //наслали дурман
magician.distance = 2; //на 2 клетки
magician.attack = 100;

console.log(magician); // Урон: 85% с дурманом и 90% без дурмана

const daemon = new Daemon();
daemon.stoned = true; //наслали дурман
daemon.distance = 5;
daemon.attack = 100;
console.log(daemon); 
console.log(daemon.attack); // Урон: 60 без дурмана и 48 с дурманом
  