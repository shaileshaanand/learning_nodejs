// 1. Arrow Function to add two numbers
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3));

setTimeout(() => {
  console.log("delayed");
}, 300);

// 2. Classes

class Student {
  constructor(name, address, marks) {
    this.name = name;
    this.address = address;
    this.marks = marks;
  }
  toString() {
    return `${this.name} lives at ${this.address}, secured ${this.marks} marks.`;
  }
}
console.log(new Student("Alex", "Jharkhand", 34).toString());

// 3. Default Params
const area = (radius, pi = 3.14) => pi * radius * radius;
console.log(area(2));
console.log(area(2, 3.141));

// 4. Destructuring
const position = { x: 10, y: 12, z: 34 };
const { x, y, z } = position;
console.log(`x=${x}, y=${y}, z=${z}`);

// 5. Spread Operator
const nums1 = [1, 2, 3, 4];
const nums2 = [10, 20];
const merged = [...nums1, ...nums2];
console.log(merged);
