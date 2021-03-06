const cash = new Map();
export const pow = (base, power) => {
  const key = `${base}^${power}`;
  if (!cash.has(key)) {
    cash.set(key, base ** power);
  }
  return cash.get(key);
};

export const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);
export const log = (arg) => {
  console.log(arg);
};
const secret = 44;
const secretFunc = () => {
  console.log("secret", secret);
};

export default secretFunc;
