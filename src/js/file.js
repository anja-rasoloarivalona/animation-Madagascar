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
        transition.play()
        

        var introMove = new TimelineMax()
                introMove
                .to('.intro', .1, {opacity: 0}, '+=1') 
                .to('.city__imgContainer', .1, {display: 'none'}) 
                .to('.city__resume', .1, {display: 'none'}) 
              //  .to('.city', .1, {y: '-100%'},'-=.5')
                .to('.city__section', .1, {display: 'block'},'-=.5')
               

        setTimeout( function(){
            window.scroll({top: 0, left: 0, behavior: 'smooth'});
        }, 1500)
     


      //  $('.city').css('grid-row', '1 / 2')
     //   $('.intro').css('display', 'none')

      

    
})

var transition = new TimelineMax()
transition
   .to('.transition', .1, {display: 'block'})
   .to('.transition__inner', .5, {y: 0})
  
   .to('.transition__inner', 1.5, {y: '-100%'}, '+=.5')


   transition.pause()


     


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
