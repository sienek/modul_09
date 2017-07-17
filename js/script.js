
function addElement(){
	var listLength = document.getElementsByTagName('li').length;//sprawdza bieżacą l-bę elementów listy
	var element = document.createElement('li'); //tworzy element lu
	//console.log(listLength);
	element.innerHTML = 'Item ' + listLength; //tworzy zawartość nowego elementi li
	list.appendChild(element); //dodaje stworzony element li
}

var list = document.getElementById('list'); //pobranie elementu
//console.log(list);
var add = document.getElementById('addElem'); //pobranie elementu
//console.log(add);
add.addEventListener('click', function() {
	addElement() //nałożenie listernera wywołującego na click funkcję 'addElement()'
});