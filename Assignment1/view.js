let employeess = [];
var local = JSON.parse(localStorage.getItem("emps"));
if (local == null) local = null;
else employeess = local;
const list = document.getElementById("list");
const fileds = ["name", "age", "salary", "email"];
var mytable = document.getElementById("mytable");
mytable.append(makeTable(employeess));
function makeTable(array) {
	var table = document.createElement("table");
	for (var i = 0; i < array.length; i++) {
		var row = document.createElement("tr");
		for (var j = 0; j < fileds.length; j++) {
			var cell = document.createElement("td");
			cell.textContent = array[i][fileds[j]];
			row.appendChild(cell);
		}
		var btnEdit = document.createElement("button");
		btnEdit.onclick = () => {};
		btnEdit.textContent = "Edit";
		var deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";
		deleteBtn.onclick = () => {
			cell.textContent = localStorage.removeItem(cell);
		};
		table.appendChild(row);
		row.appendChild(btnEdit);
		row.appendChild(deleteBtn);
	}
	return table;
}
