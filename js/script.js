//var name //deklaracje zmiennej
//name = prompt('Enter your name'); //wywołanie okienka wprowadzania wartości zmiennej "name"
// alert('Hello, ' + name); // wyświetlenie okna z wartością zmiannej "name"
//console.log('Hello, ' + name); //wwyświetlenie wartości zmiennej "name" w konsoli


var buttons = document.getElementsByClassName('button');
console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
	var buttonText = buttons[i].innerText;
	console.log(buttonText);
	var buttonNr = i + 1;
	alert("Tekst w przycisku " + buttonNr + ": " + buttonText);
};