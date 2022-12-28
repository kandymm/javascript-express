function negate(a) {
  return !a;
}

function truthiness(a) {
  if (a) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  truthiness
 
};
