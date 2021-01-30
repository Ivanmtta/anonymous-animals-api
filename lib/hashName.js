const hashName = (name, bound) => {
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    total += name.charCodeAt(i);
  }
  return total % bound;
}

module.exports = hashName;