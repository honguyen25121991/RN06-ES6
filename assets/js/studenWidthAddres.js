import { Student } from "./studen.js";
export class StudentWitdAddress extends Student {
  constructor(name, age, address) {
    super(name, age);
    this.address = address;
  }
  getInfoStudent() {
    console.log(`${this.name} + ${this.age} - Dia chi : ${this.address}`);
  }
}
export default Student;
