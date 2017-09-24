require.config({
    paths:{
        jquery:"../lib/jquery-3.2.1",

    }

})


require(['jquery'],function($){
    
    $('.w1').mouseover(function(){
           $('.w3').fadeIn();
          
    }).mouseleave(function(){
           $('.w3').fadeOut();
    });

    $('.w2').mouseover(function(){
           $('.w4').fadeIn();
          
    }).mouseleave(function(){
           $('.w4').fadeOut();
    });


    $('.wode').mouseover(function(){
        $('.zhanghu').stop().slideDown();   
    }).mouseleave(function() {
         $('.zhanghu').stop().slideUp();
    }); 

    $('.car').mouseover(function(){
            $('.mycar').stop().slideDown();   
        }).mouseleave(function() {
             $('.mycar').stop().slideUp();
        });

    var index=0;
    var timear=setInterval(function(){
              console.log(index)
             if(index>$('.banul').children().length-1){
                  index=0;
              }
            $('.banul li').eq(index).fadeIn(1000);
            $('.banul li').eq(index-1).fadeOut(1000);
               index++;
    },5000)


     $('.IMB').mouseenter(function(){
        $('.allbrand').show();   
    }).mouseleave(function(){
         $('.allbrand').hide();
    });   

 
      
    
})