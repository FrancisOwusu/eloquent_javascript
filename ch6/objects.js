function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };
whiteRabbit.speak("Oh my fur and whiskers");
// → The white rabbit says 'Oh my fur and whiskers'
hungryRabbit.speak("Got any carrots?");
// → The hungry rabbit says 'Got any carrots?'

let finder = {
  find(array) {
    return array.some((v) => v == this.value);
  },
  value: 5,
};
console.log(finder.find([4, 5]));
// → true

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);

Object.getPrototypeOf(Object.prototype);

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} says ${line}`);
  },
};

protoRabbit.speak("Say my name");
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";

blackRabbit.speak("I am fear and darkness");

//constructor
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(new Rabbit("basic").teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

//maps
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};

console.log(`Julia is ${ages["Julia"]}`);
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

let ages1 = new Map();
ages1.set("Boris", 39);
ages1.set("Liang", 22);
ages1.set("Julia", 62);

console.log(`Julia is ${ages1.get("Julia")}`);
console.log("Is Jack's age known?", ages1.has("Jack"));
console.log(ages1.has("toString"));

console.log(Object.hasOwn({ x: 1 }, "x"));
// → true
console.log(Object.hasOwn({ x: 1 }, "toString"));
// → false

Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
console.log(String(killerRabbit));
Array.prototype.forEach.call(
  {
    length: 2,
    0: "A",
    1: "B",
  },
  (elt) => console.log(elt)
);
// → A
// → B

let varyingSize = {
    get size(){
        return Math.floor(Math.random() * 100);
    }
}

console.log(varyingSize.size)