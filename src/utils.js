export const pow = (base, power) => base**power;
export const sum = (...args) => args.reduce((acc, cur)=>acc+cur, 0);
export const log = (arg) => {console.log(arg)} 
const secret = 44;
const secretFunc = ()=>{console.log('secret', secret)}

export default secretFunc;