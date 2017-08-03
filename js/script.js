function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.appendTo($('.container'));
        this.$element.click(function() {
            //alert(self.text);
            this.$element.remove();
            
        });
        //this.$element.remove();
    }
}



var btn1 = new Button('Hello!');
btn1.create();
var btn2 = new Button();
btn2.create();
var btn3 = new Button('OK');
btn3.create();











