var span = $("span");
    span.each(function(index, element) {
    	
    	$("span:even").css('color', 'red');
    	
});


var spanArray = $("div div>p").toArray();
var $span = $(spanArray);

function createButtons() {
    $span.each(function(index, element) {
    	var button = $('<button class="btn" data-tmp="' + (index + 1) + '">Click me</button>');
    	$(element).append(button);
    });
}

createButtons();

// $('button').click(function(){
//     alert($(this).attr("data-tmp"));
// });

$('body').on('click', 'button', function(){
    alert($(this).attr("data-tmp"));
});

createButtons();


