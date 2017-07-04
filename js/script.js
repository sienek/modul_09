function calculate() { //funcja obliczająca pole trójkąta
	var
	a = document.getElementById("a").value,
	b = document.getElementById("b").value,
	value = (a*a)+(2*a*b)-(b*b);
	console.log(a); 
	console.log(b);
	console.log(value);


	if (value>0) {
		result="dodatnia.";
	} else if (value<0) {
		result="ujemna.";
 	} else {
 		result="równa zero.";
 	}
document.getElementById("result").innerHTML = result; 
	
}

function reset () {
	a = document.getElementById("a").defaultValue;
	b = document.getElementById("b").defaultValue;	
}

//obliczenie i wyświetlenie wyniku dla wartości początkowych po załadowaniu strony 
//lub dla wartości bieżacych po przeładowaniu strony:
calculate(); 





