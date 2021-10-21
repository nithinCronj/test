function validate() {
	var usernameGiven = document.getElementById("username").value;
	var passwordGiven = document.getElementById("password").value;
	if ("abc" == usernameGiven && "123" == passwordGiven) {
		window.location = "admin.html";
	} else alert("Wrong details");
}
function reset() {
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
}
