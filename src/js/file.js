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

/*var intro = new TimelineMax({repeat: -1})
   intro 
        .to('.intro__img--2', 5, {autoAlpha: 1})
        .to('.intro__img--2', 5, {autoAlpha: 0})*/


        
})
