const Student = require("./student");
const john = new Student(
  "John",
  20,
  "Kampala",
  "0712345678",
  "jhon@example.com"
);
const jane = new Student(
  "Jane",
  21,
  "Kampala",
  "0712345678",
  "jane@example.com"
);
const jack = new Student(
  "Jack",
  22,
  "Kampala",
  "0712345678",
  "jack@example.com"
);

john.setMarks(90, 80, 70);
jane.setMarks(80, 70, 60);
jack.setMarks(70, 60, 50);

console.log(john.getInfo());
console.log(jane.getInfo());
console.log(jack.getInfo());
