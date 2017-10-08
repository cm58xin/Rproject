define(['jquery'],function($){

  return {

// 商品参数栏点击滑动
    huadong:function(){

         var cheight=$('.canshu').offset().top;
         var xqheight=$('.xiangqing').offset().top;
         var pjheight=$('.pingjia').offset().top;

    
         // console.log(cheight) ; 
         // console.log(xqheight) ;
         // console.log(pjheight) ;
    

         
         // console.log($('.xnav ul').children())

            $('.xnav ul').children().eq(0).click(function(){
                $('.xnav ul').children().eq(0).addClass('xiaxian').siblings().removeClass('xiaxian');

            $('body,html').animate({scrollTop:cheight},1000) ;          
                });
            $('.xnav ul').children().eq(1).click(function(){
                $('.xnav ul').children().eq(1).addClass('xiaxian').siblings().removeClass('xiaxian');

            $('body,html').animate({scrollTop:xqheight},1000) ;          
                });
            
            $('.xnav ul').children().eq(2).click(function(){
                $('.xnav ul').children().eq(2).addClass('xiaxian').siblings().removeClass('xiaxian');

            $('body,html').animate({scrollTop:pjheight},1000) ;          
                });

     } ,


// 商品参数栏滑动吸顶
   xiding:function(){
         
         var xheight=$('.xnav').offset().top;
         // console.log(xheight);
       // $('.xnav')
           window.onscroll=function(){
               if(window.scrollY>=xheight){
                  $('.xnav').addClass('xiding');
               }else{
                $('.xnav').removeClass('xiding');
               }
           }

   },

     // 显示隐藏购物车的二维码
   carerweima:function(){
            $('.saosao').mouseenter(function(){
                    $('.carerweima').show();
            }).mouseleave(function(){
                    $('.carerweima').hide();
            })
   },

  // 点击增减数量
  jiajian:function(){
       
       $('.jia').click(function(){
           var qty=$('#qty').val(); 
           // console.log(qty);
            qty=Number(qty)+1;
           $('#qty').val(qty);
       })
       $('.jian').click(function(){
           var qty=$('#qty').val(); 
               if(qty<=1){
                return qty=1;
               }
            qty=Number(qty)-1;
           $('#qty').val(qty);
       })
  },

 // 小图点击左右动画
  xiaotu:function(){
       $('.btnright').click(function(){
            $('.tul').animate({left:-$('.tu1').outerWidth()-8})
       });
       $('.btnleft').click(function(){
            $('.tul').animate({left:0})
       });

       // console.log($('.tul').children())
        $('.tul').on('mouseenter','li',function(){
            // console.log($(this).index())
           if($(this).index()===0){
               $(this).css({"border":"2px solid #e5cbb2"}).siblings().css({ "border":"1px solid #ccc"});
               $('.ptu').find('img').get(0).src="../img/img3/xiao1.jpg"
           }
           else if($(this).index()===1){
            $(this).css({"border":"2px solid #e5cbb2"}).siblings().css({ "border":"1px solid #ccc"});
                 $('.ptu').find('img').get(0).src="../img/img3/xiao2.jpg"
           }
           else if($(this).index()===2){
            $(this).css({"border":"2px solid #e5cbb2"}).siblings().css({ "border":"1px solid #ccc"});
                 $('.ptu').find('img').get(0).src="../img/img3/xiao3.jpg"
           }
           else if($(this).index()===3){
            $(this).css({"border":"2px solid #e5cbb2"}).siblings().css({ "border":"1px solid #ccc"});
                 $('.ptu').find('img').get(0).src="../img/img3/xiao4.jpg"
           }
           else if($(this).index()===4){
            $(this).css({"border":"2px solid #e5cbb2"}).siblings().css({ "border":"1px solid #ccc"});
                 $('.ptu').find('img').get(0).src="../img/img3/xiao5.jpg"
           }
            
        }) 
  },

// 添加到购物车
  addcar:function(){
           var a=0;
        $('.jcar').click(function(){
           // console.log($('.ptu').clone()) ;   
            $('.ptu').clone().appendTo('#buycar');
            $('.xtitle').clone().appendTo('#buycar')
            $('.price').clone().appendTo('#buycar');
            $('.huodong').clone().appendTo('#buycar')

            

             a=a+1;
             $('#num').text(a)

        })
    
  },

 //    
   }
})