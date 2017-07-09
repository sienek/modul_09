var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var names = femaleNames.concat(maleNames);

function addName() {
	var newName=document.getElementById("name").value
//	console.log(newName);
//	console.log(names.indexOf(newName));
	if (names.indexOf(newName)!=-1) {
		document.getElementById("warning").innerHTML ='To imię już jest na liście!';
	//	console.log('To imię już jest na liście');
	}
	else {
		//return newName;
		names.splice(0, 0, newName);
		document.getElementById("warning").innerHTML ='';
		console.log(names);
		document.getElementById("result").innerHTML =names;
	}
}


/*
function addName() {
	names.splice(0, 0, checkName());
	console.log(names);
*/

//checkName(document.getElementById("name"));

console.log(names);
/*
function getTriangleArea(a, h) {
	var aValue = parseFloat(a.value.replace(',', '.'));
	var hValue = parseFloat(h.value.replace(',', '.'));

	a.value = aValue;
	h.value = hValue;

	if (aValue<=0 || hValue<=0 ) {
		return "Nieprawidłowe dane";
	}
	else {
		return "Pole trójkąta wynosi "+ 0.5*aValue*hValue +" cm"+"2".sup();
	}
}


function display() {
//console.log( getTriangleArea(document.getElementById("a").value,document.getElementById("h").value) );
document.getElementById("result").innerHTML = getTriangleArea(document.getElementById("a"),document.getElementById("h"));
}

function isNumeric(n) { 
      return !isNaN(parseFloat(n)) && isFinite(n); 
}

function validate() {
	if (!isNumeric(this.value)) {
		// this.value = parseFloat(this.value);
		this.className = 'error';
	} else {
		this.className = '';
	}
}

document.getElementById("a").onkeyup = validate;
*/