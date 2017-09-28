define(['jquery'],function($){

  return {

    LNAV :function(){
                var mheight=$('#mustlook').offset().top;
                var limitheight=$('#limitsell').offset().top;
                var sellrankheight=$('#sellranking').offset().top;

                var newheight=$('#newgoods').offset().top;

                $('.lnav li').eq(0).addClass('bianse');

                 window.onscroll=function(){
                    if(window.scrollY>=mheight&&window.scrollY<=6200){
                              $('.lnav').addClass('fixed');
                           if(window.scrollY<limitheight){
                             $('.lnav li').eq(0).addClass('bianse').siblings('li ').removeClass('bianse');
                           }
                           else if(window.scrollY>limitheight&&window.scrollY<sellrankheight){

                              
                              $('.lnav li').eq(1).addClass('bianse').siblings('li ').removeClass('bianse');

                           }
                           else if(window.scrollY>sellrankheight&&window.scrollY<5391){
                        
                             $('.lnav li').eq(2).addClass('bianse').siblings().removeClass('bianse');
                           }
                           else if(window.scrollY>5391&&window.scrollY<6200){
                     
                             $('.lnav li').eq(3).addClass('bianse').siblings().removeClass('bianse');
                           }
              }  
                       
                       else if(window.scrollY<759){
                          $('.lnav').removeClass('fixed');
                       }
                       if(window.scrollY>6200){
                           $('.lnav').hide();   
                       } 
                       else if(window.scrollY<6200){
                           $('.lnav').show();   
                       } 
                }
        },

   
    LNAVCLICK:function(){
             
         var mheight=$('#mustlook').offset().top;
         var limitheight=$('#limitsell').offset().top;
         var sellrankheight=$('#sellranking').offset().top;

         var newheight=$('#newgoods').offset().top;


         console.log(mheight) ; 
         console.log(limitheight) ;
         console.log(sellrankheight) ;
         console.log(newheight) ;

             
             console.log($('.lnav ul').children())
            $('.lnav ul').children().eq(0).click(function(){
                    $('.lnav ul').children().eq(0).addClass('bianse').siblings().removeClass('bianse');

                $('body,html').animate({scrollTop:mheight},1000) ;  
                   
            });
            $('.lnav ul').children().eq(1).click(function(){
                    $('.lnav ul').children().eq(1).addClass('bianse').siblings().removeClass('bianse');
                    $('body,html').animate({scrollTop:limitheight+20},1000)   
                       
            })
            $('.lnav ul').children().eq(2).click(function(){
                    $('.lnav ul').children().eq(2).addClass('bianse').siblings().removeClass('bianse');
                    $('body,html').animate({scrollTop:sellrankheight+20},1000)  
            })
            $('.lnav ul').children().eq(3).click(function(){
                    $('.lnav ul').children().eq(3).addClass('bianse').siblings().removeClass('bianse');
                    $('body,html').animate({scrollTop:newheight},1000) 
            })
               
            



  }
  // 
}
})