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
