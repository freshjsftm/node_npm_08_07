import MyMath from './MyMath';
import def, {pow} from './utils';
import './style.css';

console.log(MyMath.sub(8,2))

console.time();
console.log(pow(555,88))
console.timeEnd();
console.time();
console.log(pow(555,88))
console.timeEnd();
