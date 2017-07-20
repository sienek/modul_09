var span = $("span");
    span.each(function(index, element) {
    	
    	$("span:even").css('color', 'red');
    	
});


var spanArray = $("div div>p").toArray();
    
    // var span = $("div>p:odd");
    var span = $(spanArray[4]);

    span.each(function(index, element) {
    	
    	//$("span:even").css('color', 'red');
    	
    	var button = $('<button class="btn" data-tmp="' + (index + 1) + '">Click me</button>');
		$(element).append(button);

		$(button).click(function(){
			alert($(this).attr("data-tmp"));
    });
});