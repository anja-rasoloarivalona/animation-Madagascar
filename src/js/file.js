$(document).ready(function(){

var loader = new TimelineMax()
    loader
        .set('.loader__cta', {y: 20})
        .to('.loader__subtitle', 1, {opacity: 1, y: 0})
        .to('.loader__cta', 1,  {opacity: 1, y: 0}, '+=2')



$('.loader__cta.btn').click( function(){
    var introAnim2 = new TimelineMax();
    introAnim2
        .set('.intro__img', {scale: 1.2})
        .to('.loader', '.5', {y: '-100vh'})
        .to('.intro__img', 20 ,{scale: 1})
        .to('.intro__imgContainer', 2 ,{borderRadius: '50%'}, '-=20')
})



var open = false;

$('.navbar').click( function(){
        if(!open){
           $('html').css('overflow-y', 'hidden')
           $(this).addClass("open");
           $('.nav').addClass("open");
           return open = true
        } else {
          $('html').css('overflow-y', '')
          $('.nav').removeClass("open");
          $(this).removeClass("open");
          return open = false
        }  
})

var cities = ['tulear', 'majunga', 'toamasina', 'diego', 'fianara'];

cities.forEach( function(city){
        
        $(`.city__resume__text__list--${city}`).mouseenter(function(){
                $(`.city__img--${city}`).css('z-index', 2);
        })  
        $(`.city__resume__text__list--${city}`).mouseleave(function(){
                $(`.city__img--${city}`).css('z-index', '');
        })  
})

$('.btn--test').click(function(){
        console.log('clicked')
        window.scroll(0, 0);
        $('.city').css('grid-row', '1 / 2')
        $('.intro').css('display', 'none')
})


/*$('.city__resume__text__list--toamasina').mouseenter(function(){
       $('.city__img--toamasina').css('z-index', 2);
})

$('.city__resume__text__list--majunga').mouseenter(function(){
        $('.city__img--majunga').css('z-index', 2);
 })

 $('.city__resume__text__list--toamasina').mouseleave(function(){
        $('.city__img--toamasina').css('z-index', 0);
 })

$('.city__resume__text__list--majunga').mouseleave(function(){
        $('.city__img--majunga').css('z-index', 0);
 })*/


/*---------CHANGE INTRO BACKGROUND IMAGE-----------------*/

var intro = new TimelineMax({repeat: -1})
   intro 
        .to('.intro__img--2', 5, {autoAlpha: 1},'+=5')
        .to('.intro__img--2', 5, {autoAlpha: 0})





/*--------ANIMATE LINE OF INTRO TEXT----------------------*/

var introText = new TimelineMax()
    introText
        .to('.intro__text__line__inner', 2.5, {width: '100%'}, '+=.5')
        .to('.intro__text__layer', 1, {opacity: 1}, '-=.5')
        .to('.intro__text__para', .5, {opacity: 1, y: 0}, '-=.5')

})
