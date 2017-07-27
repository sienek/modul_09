

$(function(){
    var carouselList = $("#carousel ul");
    var indicatorList = $(".carousel-indicator ul");
    var indicatorItem = indicatorList.find("li:first");
    var i = 0;
    indicatorItem.css({'list-style-type':'disc'});


function changeSlide() {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    console.log('hop');

    indicatorItem.css({'list-style-type':'circle'});
    indicatorItem = indicatorItem.next();
    indicatorItem.css({'list-style-type':'disc'});
    //console.log(indicatorItem);

    i = i+1;
    if (i == 5) {
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


});



