$(document).ready(function(){




var pathDiegoMajunga = {
        type: 'soft',
        curviness: 1.5,
        autoRotate: ["x","y","rotation", 90, false],
        values : [
                {x: 0, y: 20},
                {x: -5, y: 50},
                {x: -10, y: 75},
                {x: -20, y: 90},
                {x: -30, y: 100},
                {x: -50, y: 150},
                {x: -85, y: 155}                    
        ]
}

var tweenDiegoMajunga = new TimelineLite();

tweenDiegoMajunga.add(
       TweenLite.to('.city__section__bg__car', 2 , {
                bezier: pathDiegoMajunga ,                   
       }) 
)
var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".city__section__majunga",
    duration: '50%',
    trigerHook: 1,
    offset: 0
})
.setTween(tweenDiegoMajunga)
.addIndicators()
.addTo(controller)

    var carFirst = new TimelineMax()
    carFirst
    .to('.city__section__bg__dest--majunga__point', .5, {opacity: 1}, '+=2')
    .to('.city__section__bg__dest--majunga__label', .5, {opacity: 1})   
    })



/** ---------------------------------------*/


var pathMajungaTana = {
    type: 'soft',
    curviness: 1.5,
    autoRotate: ["x","y","rotation", -180, true],
        values : [
                {x: -90, y: 155} , 
                {x: -88, y: 180},
                {x: -86, y: 200},
                {x: -85, y: 225},
                {x: -85, y: 250},
                {x: -84, y: 260},
                
                            
        ]
}

var tweenMajungaTana = new TimelineLite();

tweenMajungaTana.add(
       TweenLite.to('.city__section__bg__car', 2 , {
                bezier: pathMajungaTana ,                   
       }) 
)

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".city__section__tana",
    duration: '70%',
    trigerHook: 1,
    offset: -250
})
.setTween(tweenMajungaTana)
.addIndicators()
.addTo(controller)


/** ---------------------------------------*/


var pathTanaTamatave = {
    type: 'soft',
    curviness: 1.5,
    autoRotate: ["x","y","rotation", 80, true],
        values : [
                {x: -84, y: 270},
                {x: -80, y: 270},
                {x: -70, y: 270},
                {x: -65, y: 270},
                {x: -60, y: 260},
                {x: -40, y: 250},
                {x: -20, y: 245},
                {x: -10, y: 245},
               
             
                
                            
        ]
}

var tweenTanaTamatave = new TimelineLite();

tweenTanaTamatave.add(
       TweenLite.to('.city__section__bg__car', 2 , {
                bezier: pathTanaTamatave ,                   
       }) 
)

var controller = new ScrollMagic.Controller();

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".city__section__tamatave",
    duration: '70%',
    trigerHook: 1,
    offset: -250
})
.setTween(tweenTanaTamatave)
.addIndicators()
.addTo(controller)




/** ---------------------------------------*/


var pathTamataveFianara = {
    type: 'soft',
    curviness: 1.5,
    autoRotate: ["x","y","rotation", 55, false],
        values : [
                {x: -10, y: 245},
                {x: -20, y: 265},
                {x: -30, y: 280},
                {x: -30, y: 300},
                {x: -40, y: 340}, 
                {x: -60, y: 345}, 
                {x: -70, y: 350}, 
                {x: -85, y: 365}, 
                
                            
        ]
}

var tweenTamataveFianara = new TimelineLite();

tweenTamataveFianara.add(
       TweenLite.to('.city__section__bg__car', 2 , {
                bezier: pathTamataveFianara ,                   
       }) 
)

var controller = new ScrollMagic.Controller();

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".city__section__fianara",
    duration: '90%',
    trigerHook: 1,
    offset: -250
})
.setTween(tweenTamataveFianara)
.addIndicators()
.addTo(controller)


/** ---------------------------------------*/


var pathFianaraTulera = {
    type: 'soft',
    curviness: 1.5,
    autoRotate: ["x","y","rotation", -270, false],
        values : [
                {x: -85, y: 365}, 
                {x: -95, y: 380}, 
                {x: -105, y: 420}, 
                {x: -115, y: 450}, 
                {x: -130, y: 470}, 
                {x: -150, y: 475}, 
                {x: -170, y: 475}, 
                {x: -190, y: 475}, 
                
                            
        ]
}

var tweenFianaraTulera = new TimelineLite();

tweenFianaraTulera.add(
       TweenLite.to('.city__section__bg__car', 2 , {
                bezier: pathFianaraTulera ,                   
       }) 
)

var controller = new ScrollMagic.Controller();

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".city__section__tulear",
    duration: '90%',
    trigerHook: 1,
    offset: -250
})
.setTween(tweenFianaraTulera)
.addIndicators()
.addTo(controller)