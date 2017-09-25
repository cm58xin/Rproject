require.config({
    paths:{
        jquery:"../lib/jquery-3.2.1",

    }

})


require(['jquery'],function($){
    
// 二维码
    $('.w1').mouseover(function(){
           $('.w3').show();
          
    }).mouseleave(function(){
           $('.w3').hide();
    });

    $('.w2').mouseover(function(){
           $('.w4').show();
          
    }).mouseleave(function(){
           $('.w4').hide();
    });

// 我的账户
    $('.wode').mouseover(function(){
        $('.zhanghu').stop().slideDown();   
    }).mouseleave(function() {
         $('.zhanghu').stop().slideUp();
    }); 

// 购物车
    $('.car').mouseover(function(){
            $('.mycar').stop().slideDown();   
        }).mouseleave(function() {
             $('.mycar').stop().slideUp();
        });

// 轮播图
    var index=0;
    $('.bpage').children('li').eq(0).addClass('active');
    var timear=setInterval(function(){ 
        if(index>$('.banul').children().length-1){
                  index=0;
              } 
       auto(); 
       index++;
    },4000);


    function auto(){      
            $('.banul li').eq(index).fadeIn(1000);

// 高亮页码
            $('.bpage').children('li').eq(index).addClass('active').siblings().removeClass('active');
            $('.banul li').eq(index-1).fadeOut(1000);
    }
    
//鼠标移入页码
   for(let index=0;index<$('.bpage').children('li').length;index++){

        $('.bpage').children('li').eq(index).mouseenter(function(){     
                 // clearInterval(timear);     
                $('.banul li').eq(index).fadeIn(1000);
                $('.banul li').eq(index).prev().fadeOut(1000);
                $('.banul li').eq(index).next().fadeOut(1000);           
                // console.log(index)
                $('.bpage').children('li').eq(index).addClass('active').siblings().removeClass('active'); 
               });

   }
   
// 所有品牌
     $('.IMB').mouseenter(function(){
        $('.allbrand').show();   
    }).mouseleave(function(){
         $('.allbrand').hide();
    });   

 
 // 三级导航
 $('.face').mouseenter(function(){
     $('#face').show();
 }).mouseleave(function(){
    $('#face').hide();
 });
     
   $('.cai').mouseenter(function(){
     $('#cai').show();
 }).mouseleave(function(){
    $('#cai').hide();
 }); 


$('.xiang').mouseenter(function(){
     $('#xiang').show();
 }).mouseleave(function(){
    $('#xiang').hide();
 }); 

$('.mei').mouseenter(function(){
     $('#mei').show();
 }).mouseleave(function(){
    $('#mei').hide();
 }); 

$('.xiong').mouseenter(function(){
     $('#xiong').show();
 }).mouseleave(function(){
    $('#xiong').hide();
 }); 

$('.huli').mouseenter(function(){
     $('#huli').show();
 }).mouseleave(function(){
    $('#huli').hide();
 }); 

$('.man').mouseenter(function(){
     $('#man').show();
 }).mouseleave(function(){
    $('#man').hide();
 }); 

$('.yinger').mouseenter(function(){
     $('#yinger').show();
 }).mouseleave(function(){
    $('#yinger').hide();
 }); 


 var copyItem=$('#gonggao').children()[0].cloneNode(true)
 // console.log($('#gonggao').children())
 // console.log(copyItem)
 $('#gonggao').append(copyItem);
 // console.log($('#gonggao').children().length)
 var j=0;
 var top=-$(".announcement").innerHeight();
 // console.log(top)
 var sectimear=setInterval(function(){
      j++;
      if(j>$('#gonggao').children().length-1){
        $('#gonggao')[0].style.top=0;
        j=0;
      }
     $('#gonggao').animate({top:top*j})
 },3000)








})