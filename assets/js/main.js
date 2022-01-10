// var a = 10;

// var a = "React Native 04";

// var result = a + 10;

// console.log(result);

// let b = 10;
// b = 1;
// var result = b + 10;

// const b = 10;
// b = "1";
// var result = b + 10;

// console.log(result);

// console.log(a);
// var a = 10;

// console.log(a);

// function sum() {
//   var a = 10;
//   var b = 6;
//   return a + b;
// }

// var result = sum();

// console.log(result);

// function sum(a, b) {
//   return a + b;
// }

// var result = sum(15, 10);
// console.log(result);

// function logUsername() {
//   var username = "React Native";
//   var lop = 04;

//   console.log(username + " " + lop);
// }

// logUsername();

// function blockScope() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x);
// }
// blockScope();

// console.log(logUsername());

// const logUsername = () => {
//   var username = "React Native";
//   var lop = 04;
//   return username + "0 " + lop;
// };

// console.log(logUsername());

// function sum(a, b) {
//   return a + b;
// }

// const sumArrow = (a, b) => a + b;

// console.log(sumArrow(10, 6));

// const students = {
//   name: "Nguyen van a",
//   lop: 10,
//   address: "HCM",
//   age: 18,
//   hienThiThongTin: function () {
//     const _bind = this;
//     function getInfo() {
//       console.log("this", _bind);
//       console.log("ho va Ten " + " " + _bind.name);
//     }
//     getInfo();
//   },
//   hienThiThongTinArrow: function () {
//     const getInfo = () => {
//       console.log("this", this);
//       console.log("ho va Ten " + this.name);
//     };
//     getInfo();
//   },
// };
// console.log(students);
// console.log(students.age);

// students.age = 19;
// students.xe = "SH";
// console.log(students);
// console.log(students.age);

// students.hienThiThongTin();
// students.hienThiThongTinArrow();
//

// function sum(a, b) {
//   console.log(a + b);
// }

// sum();
// sum(3, 6);

// const array = ["Nguyen Van A ", "React Native"];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

// function sum(a = 6, b = 5) {
//   return a + b;
// }

// console.log(sum(sum(7, 6), 5));

function sum(...number) {
  let result = 0;
  for (let index = 0; index < number.length; index++) {
    result += number[index];
  }
  console.log(result);
}

sum(1, 6, 8, 6, 2, 5);
