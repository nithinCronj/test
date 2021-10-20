let employeess = [];
var local = JSON.parse(localStorage.getItem("emps"));
if (local == null) local = null;
else employeess = local;

function addEmployee() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var salary = document.getElementById("salary").value;
	var email = document.getElementById("email").value;
	employeess.push({ name: name, age: age, salary: salary, email: email });
	localStorage.setItem("emps", JSON.stringify(employeess));
}
