import { dayName } from "./dayname.js";
import {dayName as nomDeJour} from "./dayname.js";
import seasonNames from "./seasonname.js";

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);

console.log(nomDeJour(3));
// → Wednesday