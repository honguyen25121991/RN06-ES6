export class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfoStudent() {
    console.log(`${this.name}+ ${this.age}`);
  }
}
