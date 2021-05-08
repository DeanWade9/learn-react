class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  a = 1
}

const a = new Animal('dog', 'black')
console.log(Animal.a)