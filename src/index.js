import lodash from 'lodash';
import MyMath from './MyMath';
import foo, * as utils from './utils';
import './style.css';

console.log(lodash.random(150,370));
console.log(MyMath.sum(84,45));
console.log(MyMath.sub(8,7));
console.log(utils)
foo();
console.log(utils.sum(1,2,3))
