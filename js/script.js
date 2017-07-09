var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var names = femaleNames.concat(maleNames);

function addName() {
	var newName=document.getElementById("name").value
//	console.log(newName);
	if (names.indexOf(newName)!=-1) {
		document.getElementById("warning").innerHTML ='To imię już jest na liście!';
	//	console.log('To imię już jest na liście');
	}
	else {
		names.splice(0, 0, newName);
		document.getElementById("warning").innerHTML ='';
		console.log(names);
		document.getElementById("result").innerHTML =names;
	}
}


console.log(names);
