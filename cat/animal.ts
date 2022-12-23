interface Animal {
  makeSound();
}

class Cat implements Animal {
  makeSound() {
    console.log("야옹!");
  }
}

class Dog implements Animal {
  makeSound() {
    console.log("멍멍!");
  }
}

const bag = [new Cat(), new Dog()];

bag.forEach((a: Animal) => {
  a.makeSound;
});
