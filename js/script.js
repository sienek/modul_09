

$(function(){
    var carouselList = $("#carousel ul");
    var indicatorList = $(".carousel-indicator ul");
    var indicatorItem = indicatorList.find("li:first"); //kontrolki
    var i = 0;
    indicatorItem.css({'list-style-type':'disc'}); //ustawienie 1-szej kulki kontrolki na pełną


function changeSlide() {
    //slajdy:
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    console.log('hop');

    //kontrolki:
    indicatorItem.css({'list-style-type':'circle'}); //ustawienie bieżacej kulki na pustą
    indicatorItem = indicatorItem.next();
    indicatorItem.css({'list-style-type':'disc'}); //ustawienie następnej kulki na pełną
    //console.log(indicatorItem);

    i = i+1; 
    if (i == 5) { //przejście na 1-szą kulkę 
        indicatorItem.css({'list-style-type':'circle'});
        indicatorItem = indicatorList.find("li:first");
        indicatorItem.css({'list-style-type':'disc'});
        i = 0;
    };
} 

function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});

}

    setInterval(changeSlide, 3000);


    $(".carousel-indicator ul li").hover(function(){ //reakcja kulek na hover
        $(this).css({'cursor':'pointer'});
    });

    $(".carousel-indicator ul").click(function(){  //reakcja kulki na click
        //alert($(this).index);
    });


});



