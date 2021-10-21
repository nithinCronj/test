let employeess = [];
var local = JSON.parse(localStorage.getItem("emps"));
if (local == null) local = null;
else employeess = local;

const emplist = document.getElementById("emplist");
function addEmployee() {
	var name = document.getElementById("name").value;
	if (name == "") {
		alert("Enter Name");
		return;
	}

	var age = document.getElementById("age").value;
	if (age < 18 || age > 60) {
		alert("Enter valid age");
		return;
	}
	var salary = document.getElementById("salary").value;
	if (salary < 100 || salary > 100000) {
		alert("Enter Salary");
		return;
	}
	var email = document.getElementById("email").value;
	// check the given text is email or not
	if (email == "") {
		alert("Enter Email");
		return;
	}
	if (!email.includes("@")) {
		alert("Enter Valid Email");
		return;
	}
	employeess.push({ name: name, age: age, salary: salary, email: email });
	localStorage.setItem("emps", JSON.stringify(employeess));
	// listEmployees();
	alert("Employee Added");
}
