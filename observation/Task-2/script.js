// Creating Student class
class Student {

    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }
}

// Select button using DOM
const button = document.getElementById("displayBtn");

// Event handling
button.addEventListener("click", function () {

    // Get values from input fields
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let department = document.getElementById("department").value;
    let cgpa = document.getElementById("cgpa").value;

    // Create Student object
    let student = new Student(
        name,
        roll,
        department,
        cgpa
    );

    // Select profile area
    let profile = document.getElementById("profile");

    // Clear previous content
    profile.innerHTML = "";

    // Create elements dynamically
    let heading = document.createElement("h2");
    heading.textContent = "Student Profile";

    let nameElement = document.createElement("p");
    nameElement.textContent = "Name       : " + student.name;

    let rollElement = document.createElement("p");
    rollElement.textContent = "Roll No    : " + student.rollNumber;

    let departmentElement = document.createElement("p");
    departmentElement.textContent =
        "Department : " + student.department;

    let cgpaElement = document.createElement("p");
    cgpaElement.textContent = "CGPA       : " + student.cgpa;

    // Add elements to webpage
    profile.appendChild(heading);
    profile.appendChild(nameElement);
    profile.appendChild(rollElement);
    profile.appendChild(departmentElement);
    profile.appendChild(cgpaElement);
});