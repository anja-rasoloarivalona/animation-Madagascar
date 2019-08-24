$(document).ready(function(){

        var t1 = new TimelineMax();

        t1.set('.intro__title__letter', {y: -30, x: 0, scale: 3, marginLeft: -40})
     //   t1.set('.intro__title', {x: 280})
        t1.staggerTo('.intro__title__letter', 1 , {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                marginLeft: 0,
                ease:  Power2.easeOut
        }, .25, '+=1'); 
     //   t1.to('.intro__title', 2, {x: 0},'-=2.5')



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
           $('.sidenav').addClass("open");
           return open = true
        } else {
          $('html').css('overflow-y', '')
          $('.sidenav').removeClass("open");
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




var introBgMove = new TimelineMax()

introBgMove
         .to('.intro', 1, {y: -60, ease:  Power2.easeOut}, '-=.5')
         .to('.services', 1, {y: -60, ease:  Power2.easeOut}, '-=1')

var controller = new ScrollMagic.Controller();
    
var intross = new ScrollMagic.Scene({
                triggerElement:'.offer',
                trigerHook: 0,
                duration: '100%'
            })
            .setTween(introBgMove)
            .addTo(controller)    
            .offset(-340)
            
            

var zero= 0;

$(window).on("scroll", function() {

        $(".nav").toggleClass("nav__hide", $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
      });






      var navBgchange = new TimelineMax()

      navBgchange
                .set('.nav__layer', {opacity:0})
               .to('.nav__layer', .3, {opacity: 1})
      
      var controller = new ScrollMagic.Controller();
          
      var intros = new ScrollMagic.Scene({
                      triggerElement:'.services',
                      trigerHook: 0,
                  })
                  .setTween(navBgchange)
                  .addTo(controller)    
                  .offset(0)
              


})
