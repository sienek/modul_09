var textOrigin='Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'; 

console.log(textOrigin); 


function uppercase (text) {
	return text.toUpperCase();
}

function display (text){
	document.getElementById("result").innerHTML =text;
}

function processText(){
	var dinosaur=document.getElementById("name").value;
	//console.log(uppercase(dinosaur));
	text=textOrigin.replace('Velociraptor',uppercase(dinosaur));
	//console.log(text); 
	text=text.slice(0,text.length/2)+'...';
	//console.log(text);
	display(text);
}

