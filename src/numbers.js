function add(a, b) {
  return a + b;
  if (Number.isNaN(a) || Number.isNaN(b)){
    return error;
  }
}
function subtract(a, b) {
  return a - b;
}

function multiplies(a, b) {
  return a * b;
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return error;
  }
}
function divide(a, b) {
  return a / b;
}
function remainder (a, b) {
  return a % b;
}

module.exports = {
  add,
  subtract,
  multiplies,
  divide,
  remainder,
};
