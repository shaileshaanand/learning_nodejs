class Student {
  constructor(name, age, address, phone, email) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
  setMarks(maths, science, english) {
    this.maths = maths;
    this.science = science;
    this.english = english;
  }
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${
      this.address
    }, Phone: ${this.phone}, Email: ${
      this.email
    } Average: ${this.averageMarks()}`;
  }
  averageMarks() {
    return (this.maths + this.science + this.english) / 3;
  }
}
module.exports = Student;
