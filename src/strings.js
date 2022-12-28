function sayHello(string) {
  return `Hello , ${string}!`;
}

function uppercase(string) {
  return string.toUpperCase();
}

function lowercase(string) {
  return string.toLowerCase();
}

function firstCharacter(string) {
  return string.charAt(0);
}

function firstCharacters(string) {
  if (string.length >= 4) {
    return string.slice(0,4)
  } else {
    return string.slice(0,2)
  }
};


module.exports = {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters
};
