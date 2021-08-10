const numberOperation = {
  add: (a, b) => parseFloat(a) + parseFloat(b),
  substract: (a, b) => parseFloat(a) - parseFloat(b),
  multiply: (a, b) => parseFloat(a) * parseFloat(b),
  divide: (a, b) => Math.floor(parseFloat(a) / parseFloat(b)),
};
export default numberOperation;
