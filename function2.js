function ehPar(num) {
    return Math.abs(num % 2) === 0;
  }
console.log(ehPar(4)); // deve retornar true
console.log(ehPar(-4)); // deve retornar true
console.log(ehPar(3)); // deve retornar false
console.log(ehPar(-3)); // deve retornar false