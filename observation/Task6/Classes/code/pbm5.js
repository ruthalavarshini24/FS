// Define a class
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Method
  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old, in grade ${this.grade}.`;
  }
}

// Create multiple objects from the class
const student1 = new Student("Alice", 14, "9th");
const student2 = new Student("Bob", 15, "10th");
const student3 = new Student("Charlie", 13, "8th");

// Use the method
console.log(student1.introduce());
console.log(student2.introduce());
console.log(student3.introduce());
