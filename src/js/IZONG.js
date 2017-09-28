define(['jquery'],function($){

  return {
      
    erweima:function(){
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
    },
      
    wode:function(){
        // 我的账户
            $('.wode').mouseover(function(){
                $('.zhanghu').stop().slideDown();   
            }).mouseleave(function() {
                 $('.zhanghu').stop().slideUp();
            }); 
    },
      
    mycar:function(){
         // 购物车
             $('.car').mouseover(function(){
                     $('.mycar').show();   
                 }).mouseleave(function() {
                      $('.mycar').hide();
                 });

      },
    banner:function(){
             // 轮播图
                 var index=0;
                 var timear
                 $('.bpage').children('li').eq(0).addClass('active'); 
                 timear=setInterval(function(){ 
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
       },
     
     IMB:function(){
          // 所有品牌
               $('.IMB').mouseenter(function(){
                  $('.allbrand').show();   
              }).mouseleave(function(){
                   $('.allbrand').hide();
              }); 
     } ,   
        

      sanji:function(){
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
      } , 
      
    gonggao:function(){
         //轮播公告
           var sectimear;
           clearInterval(sectimear);
          var copyItem=$('#gonggao').children()[0].cloneNode(true)
          // console.log($('#gonggao').children())
          // console.log(copyItem)
          $('#gonggao').append(copyItem);
          // console.log($('#gonggao').children().length)
          var j=0;
          var top=-$(".announcement").innerHeight();
          // console.log(top)
            
          sectimear=setInterval(function(){
               j++;
               if(j>$('#gonggao').children().length-1){
                 $('#gonggao')[0].style.top=0;
                 j=0;
               }
              $('#gonggao').animate({top:top*j})
          },3000)
    },
     
    // 注册页面的input变色
     zhuceinput:function(){
         $('form').on('focus','p:lt(4)',function(){
              // console.log($(this).index()) 
              index=$(this).index();
              $('form').children('p:lt(4)').eq(index).css({"border":"1px solid #ec3e7d","box-shadow":"1px 1px 1px #ec3e7d,-1px -1px 1px #ec3e7d",}).siblings('p:lt(3)').css({"border":"1px solid #ccc","box-shadow":"0 0 0 #ec3e7d,-0 -0 0 #ec3e7d",});
      });
   
   } ,

    // 登录页面的input变色
     dengluinput:function(){
         $('form').on('focus','p:lt(4)',function(){
              // console.log($(this).index()) 
              index=$(this).index();
              $('form').children('p:lt(3)').eq(index).css({"border":"1px solid #ec3e7d","box-shadow":"1px 1px 1px #ec3e7d,-1px -1px 1px #ec3e7d",}).siblings('p:lt(2)').css({"border":"1px solid #ccc","box-shadow":"0 0 0 #ec3e7d,-0 -0 0 #ec3e7d",});
      });
   
   } ,

   // 左边点击手风琴效果
    dianji:function(){
       console.log($("#ul1").next()) 
       $("#ul1").prev().on('click',function(){
           // $('h6 i').addClass('iconfont icon-daosanjiao');
           
          // if()
           $('#ul1').eq(0).css({"height":"512px"})
           // $('ul').slideUp();
           console.log(666)
       })
    } 




// 
  }
})