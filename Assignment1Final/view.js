let employeess = [];
var local = JSON.parse(localStorage.getItem("emps"));
if (local == null) employeess = null;
else employeess = local;

const emplist = document.getElementById("emplist");
listEmployees();
// list all employees in a unordered list
function listEmployees() {
	emplist.innerHTML = "";

	for (let i = 0; i < employeess.length; i++) {
		let li = document.createElement("li");
		let deletebtn = document.createElement("button");
		deletebtn.id = i;
		deletebtn.innerHTML = "Delete";
		deletebtn.addEventListener("click", deleteEmployee);
		li.innerHTML =
			"Name:" +
			employeess[i].name +
			", Age: " +
			employeess[i].age +
			", Salary: " +
			employeess[i].salary +
			"$" +
			", Email: " +
			employeess[i].email;
		emplist.appendChild(li);
		emplist.appendChild(deletebtn);
	}
}
function deleteEmployee(params) {
	console.log(params.target.id);
	employeess.splice(params.target.id, 1);
	localStorage.setItem("emps", JSON.stringify(employeess));
	listEmployees();
}
