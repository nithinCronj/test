function addEmployee() {
	var nameEmp = getElementById("name");
	localStorage.setItem("name", nameEmp);
}
function editEmployee() {
	var getName = localStorage.getItem("name");
	document.getElementById("name").innerHTML = getName;
}
function deleteEmployee() {
	document.getElementById("name").value = localStorage.removeItem("name");
}
