$(document).ready(function(){

    window.onbeforeunload = function() {
        window.scroll({top: 0, left: 0})
      };

      let mounted = false;

      var transition = new TimelineMax()
            transition
        .to('.transition', .1, {display: 'block'})
        .to('.transition__inner', .5, {y: 0})
        
        .to('.transition__inner', 1, {y: '-100%'}, '+=1')
            transition.pause()


      $('#roadtrip').click(function(){
        transition.play()  
        var introMove = new TimelineMax()
                introMove        
                .to('.intro', .1, {opacity: 0}, '+=1')
                .to('.city__section', .1, {display: 'block', y:'-100vh'}) 
                .to('.city__imgContainer', .1, {display: 'none'}) 
                .to('.city__resume', .1, {display: 'none'}) 
                .to('.city__section__bg__map', .1, {display: 'block'}) 
              
            //    .to('.city', .1, {y: '-100%'},'-=.5')             
        setTimeout( function(){
            window.scroll({top: 0, left: 0});
        }, 500)
      //  $('.city').css('grid-row', '1 / 2')
     //   $('.intro').css('display', 'none')   ;

     setTimeout( function(){
        data.forEach( i => {
        
            var tween = new TimelineLite();
    
            tween.add(
                TweenLite.fromTo(`.city__section__bg__dest--${i.current}__point__active`, .1,
                {opacity: 1},
                {opacity: 0})
            )
    
            tween.add(
                TweenLite
                .to(`.city__section__bg__dest--${i.current}__point__active`, .1,
                {opacity: 0})
            )        
    
            tween.add(
                TweenLite.to(`.city__section__bg__car--${i.current}`, 4, {
                    bezier: i.path
                })
            )
    
            tween.add(
                TweenLite.fromTo(`.city__section__bg__dest--${i.next}__point__active`, .1,
                {opacity: 0},
                {opacity: 1, display: 'block'})
            )
    
            tween.add(
                TweenLite
                    .fromTo(`.city__section__bg__car--${i.current}`, .1,
                    {opacity: 1},
                    {opacity: 0})
            )
    
            tween.add(
                    TweenLite
                    .fromTo(`.city__section__bg__car--${i.next}`, .1,
                    {opacity: 0, },
                    {opacity: 1, display: 'block'})
            )   
    
          
    
            tween.add(
                TweenLite.fromTo(`.city__section__${i.current}__bg`, 1 , 
                {opacity: 1},
                {opacity: 0})
            )
    
            tween.add(
                TweenLite.fromTo(`.city__section__${i.next}__bg img`, 1 , 
                {opacity: 0},
                {opacity: 1},'-=1')
            )
    
            tween.add(
                TweenLite.fromTo(`.city__section__dest__title--${i.next}`, 2 , 
                {opacity: 0},
                {opacity: 1},
                '-=2')
            )
    
            var controller = new ScrollMagic.Controller();
    
            var scene = new ScrollMagic.Scene({
                triggerElement: `.city__section__${i.next}`,
                duration: '80%',
                trigerHook: 1,
                offset: -340
            })
            .setTween(tween)
            .addIndicators()
            .addTo(controller)
        })
     }, 2000)
       
})




    /*-----INITITATE DATA FOR ANIMATION */

    var data = [

        /*-------FIRST ANIMATION----------*/

        diegoMajunga = {
            current: 'diego',
            next: 'majunga',
            path: {
                type: 'soft',
                curviness: 1.5,
                autoRotate: ["x","y","rotation", 90, false],
                values: [
                    {x: 0, y: 0},
                    {x: -5, y: 50},
                    {x: -10, y: 70},
                    {x: -15, y: 90},
                    {x: -90, y: 110},
  
                ],
            },           
        },

        /*---------SECOND ANIMATION----------*/

        majungaTana = {
            current: 'majunga',
            next: 'tana',
            path: {
                type: 'soft',
                curviness: 1.5,
                autoRotate: ["x","y","rotation", 90, false],
                values: [
                    {x: 0, y: 0},
                    {x: 0, y: 90},
                    ]
            }         
        },

        /*-------THIRD ANIMATION-------------*/

        tanaTamatave = {
            current: 'tana',
            next: 'tamatave',
            path: {
                type: 'soft',
                curviness: 5,
                autoRotate: false,
                values: [
                    {x: 0, y: -5},   
                    {x: 20, y: -10},   
                    {x: 30, y: -15}, 
                    {x: 40, y: -20}, 
                    {x: 92, y: -40}           
                    ]
            }
        },

        /*----FOURTH ANIMATION---------------*/


        tamataveFianara = {
            current: 'tamatave',
            next: 'fianara',
            path: {
                type: 'soft',
                curviness: 1.5,
                autoRotate: false,
                values : [
                    {x: 0, y: 0},
                    {x: -93, y: 129}              
                ]
            }
        },

        /*-----FIFTH ANIMATION----------------*/


        fianaraTulear = {
            current: 'fianara',
            next: 'tulear',
            path: {
                type: 'soft',
                curviness: 1.5,
                autoRotate: false,
                values : [
                    {x: 0, y: 0},
                    {x: -87, y: 75},                        
                ]
            }
        }
    ];

    /*-----END OF DATA------------------*/


    /*--------ANIMATION-----------------*/


    //    let scroll = window.scrollY;


  
    
       
       
    

    
 
    


})