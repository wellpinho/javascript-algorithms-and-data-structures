//Mudar o protótipo para um novo objeto

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // adcionado uma nova propriedade
  numLegs: 2,

  // criando novo método
  eat: () => {
    console.log('eat method')
  },
  describe: () => {
    console.log('describe method')
  }
};