
define(['jquery'],function($){
  
return {

        btop:function(){
          
           $('.backTop').click(function(){
                $('body,html').animate({scrollTop:0},2000)   
           });
        }, 

        rnav:function(){
               //右边固定的导航条
                   $('.me').mouseenter(function(){
                          $('#me').stop().animate({opacity:1,left:-80});
                   }).mouseleave(function(){
                         $('#me').stop().animate({opacity:0,left:-100});;
                   })


                   $('.bcar').click(function(){
                          $('#bcar').show();
                   });
                   $('#close').click(function(){
                         $('#bcar').hide();
                   })

                   $('.shou').mouseenter(function(){
                          $('#shou').stop().animate({opacity:1,left:-80});
                   }).mouseleave(function(){
                         $('#shou').stop().animate({opacity:0,left:-100});;
                   })

                   $('.zuji').mouseenter(function(){
                          $('#zuji').stop().animate({opacity:1,left:-80});
                   }).mouseleave(function(){
                         $('#zuji').stop().animate({opacity:0,left:-100});;
                   })

                   $('.rightkefu').mouseenter(function(){
                          $('#rightkefu').stop().animate({opacity:1,left:-80});
                   }).mouseleave(function(){
                         $('#rightkefu').stop().animate({opacity:0,left:-100});;
                   })

                   $('.righterweima').mouseenter(function(){
                          $('#righterweima').stop().animate({opacity:1,left:-100});
                   }).mouseleave(function(){
                         $('#righterweima').stop().animate({opacity:0,left:-140});;
                   })
        }

      }       
           
})


  



