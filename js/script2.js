$(function(){
    var carouselList = $("#carousel ul");
    var indicatorList = $(".carousel-indicator ul");
    var indicatorItem = indicatorList.find("li:first"); //kontrolki
    var i = 0;
    indicatorItem.css({'list-style-type':'disc'}); //ustawienie 1-szej kulki kontrolki na pełną


function changeSlide(msTime) {
    msTime = msTime || 500; console.log(msTime);
    //slajdy:
    carouselList.animate({'marginLeft':-400}, msTime, moveFirstSlide);
    // console.log('hop');

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

function changeSlidePrev(msTime) {
    msTime = msTime || 500;
    //slajdy:
    carouselList.css({'marginLeft':-400});
    // 
    // console.log('hop');

    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(firstItem);

    carouselList.animate({'marginLeft': 0}, msTime);

    //kontrolki:
    indicatorItem.css({'list-style-type':'circle'}); //ustawienie bieżacej kulki na pustą
    if (i == 0) {
        indicatorItem = indicatorList.find("li:last");
    } else {
        indicatorItem = indicatorItem.prev();
    }
    indicatorItem.css({'list-style-type':'disc'}); //ustawienie następnej kulki na pełną
    //console.log(indicatorItem);

    i = i-1; 
    if (i < 0) { //przejście na 1-szą kulkę 
        i = 4;
    };
}

    var interv = setInterval(changeSlide, 3000);

    function clearIntervalForTime(msTime) {
        msTime = msTime || 500;

        clearInterval(interv);
        setTimeout(function () {
            interv = setInterval(changeSlide, 3000);
        }, msTime)
    }


    $(".carousel-indicator ul li").hover(function(){ //reakcja kulek na hover
        $(this).css({'cursor':'pointer'});
    });

    $(".carousel-indicator ul li").click(function(){  //reakcja kulki na click
        var movesCount = $(this).index() - i;

        clearIntervalForTime(10000);

        for (var x = 0; x < movesCount; x++) {
            setTimeout(changeSlide, 10000 / movesCount * x, 10000 / movesCount);
        }
    });

    $('.js-prev').click(function () {
        clearIntervalForTime();
        changeSlidePrev();
    });
});
