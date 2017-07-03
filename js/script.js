function triangleArea() { //funcja obliczająca pole trójkąta
	var
	a = document.getElementById("triangleBase").value,
	h = document.getElementById("traingleHeight").value,
	area = 0.5*a*h;
	document.getElementById("result").innerHTML = area; 
	console.log(a); 
	console.log(h);
	console.log(area);
}

//obliczenie i wyświetlenie wyniku dla wartości początkowych po załadowaniu strony 
//lub dla wartości bieżacych po przeładowaniu strony:
triangleArea(); 

//obliczenie i wyświetlenie wyniku po kliknięciu buttona "Oblicz":
function clickTriangleArea() {
triangleArea();
}



