
var buttons = document.getElementsByClassName('button');
//console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
	var buttonText = buttons[i].innerText;
	//console.log(buttonText);
	var buttonNr = i + 1;
	alert("Tekst w przycisku " + buttonNr + ": " + buttonText);
};