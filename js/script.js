function getTriangleArea(a, h) {
	if ((a<=0)||(h<=0)) {
		return "Nieprawidłowe dane";
	}
	else {
		return "Pole trójkąta wynosi "+ 0.5*a*h +" cm"+"2".sup();
	}
}


function display() {
//console.log( getTriangleArea(document.getElementById("a").value,document.getElementById("h").value) );
document.getElementById("result").innerHTML = getTriangleArea(document.getElementById("a").value,document.getElementById("h").value);
}