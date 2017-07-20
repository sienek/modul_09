var span = $("span");
    span.each(function(index, element) {
    	
    	$("span:even").css('color', 'red');
    	
});

var span = $("div>p:odd");
    span.each(function(index, element) {
    	
    	//$("span:even").css('color', 'red');
    	
    	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(element).append(button)

		$("button").click(function(){
			alert($(this).attr("data-tmp"));
});
});