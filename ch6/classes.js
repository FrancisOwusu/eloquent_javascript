class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("Killer");

class Particle {
  speed = 0;
  constructor(position) {
    this.position = position;
  }
}
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello