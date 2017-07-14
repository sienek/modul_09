 
function addSpaces(starsNr, branchNr){
	var spacesNr = starsNr - branchNr - 1; //wyznacza licznę spacji w rzędzie
//	console.log(spacesNr);
	var spaces = '';
	for (var i = 0; i < spacesNr; i++) { //tworzy rząd spacji
		spaces = spaces + ' ';
	};
	//console.log(spaces);
	return spaces;
};

function drawBranch(starsNr){
	var stars = '*'
	console.log(addSpaces(starsNr, -1) + stars); //rysuje 1 gwizdkę na szczycie
	for (var k = 0; k < starsNr -1; k++) {
		stars =stars + '**'; //dodaje po 2 gwiazdki w każdym rzędzie
		console.log(addSpaces(starsNr, k) + stars); //rysuje spacje i rzędy gwiazdek
		//	console.log(stars);
	};
	console.log(addSpaces(starsNr, -1) + 'M'); //rysuje "pien"
};

function drawTree(){
	drawBranch(document.getElementById("name").value);
}

