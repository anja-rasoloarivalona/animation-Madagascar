$(document).ready(function(){(new TimelineMax).set(".loader__cta",{y:20}).to(".loader__subtitle",1,{opacity:1,y:0}).to(".loader__cta",1,{opacity:1,y:0},"+=2"),$(".loader__cta.btn").click(function(){(new TimelineMax).set(".intro__img",{scale:1.2}).to(".loader",".5",{y:"-100vh"}).to(".intro__img",20,{scale:1}).to(".intro__imgContainer",2,{borderRadius:"50%"},"-=20")});var t=!1;$(".navbar").click(function(){return t?($("html").css("overflow-y",""),$(".nav").removeClass("open"),$(this).removeClass("open"),t=!1):($("html").css("overflow-y","hidden"),$(this).addClass("open"),$(".nav").addClass("open"),t=!0)});["tulear","majunga","toamasina","diego","fianara"].forEach(function(t){$(`.city__resume__text__list--${t}`).mouseenter(function(){$(`.city__img--${t}`).css("z-index",2)}),$(`.city__resume__text__list--${t}`).mouseleave(function(){$(`.city__img--${t}`).css("z-index","")})}),$(".btn--test").click(function(){i.play(),(new TimelineMax).to(".intro",.1,{opacity:0},"+=1").to(".city",.1,{y:"-100%"},"-=.5"),setTimeout(function(){window.scroll(0,0)},1500)});var i=new TimelineMax;i.to(".transition",.1,{display:"block"}).to(".transition__inner",.5,{y:0}).to(".transition__inner",1.5,{y:"-100%"},"+=.5"),i.pause(),new TimelineMax({repeat:-1}).to(".intro__img--2",5,{autoAlpha:1},"+=5").to(".intro__img--2",5,{autoAlpha:0}),(new TimelineMax).to(".intro__text__line__inner",2.5,{width:"100%"},"+=.5").to(".intro__text__layer",1,{opacity:1},"-=.5").to(".intro__text__para",.5,{opacity:1,y:0},"-=.5")});