const myName = 'miguel';

const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 22);

class Person {
  constructor(private age: number, private name: string) {}
  getSummary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}
