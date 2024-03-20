// Before importing the modules - include thew type = "module" in the HTML. 
import {PI, getCircumference, getArea, getVolume} from "./mathUtils.js";

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(circumference.toFixed(2));
console.log(area.toFixed(2));
console.log(volume.toFixed(2));
