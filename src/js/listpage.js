require.config({
    paths:{
        jquery:"../lib/jquery-3.2.1",
        // common:"./common",
        Rightnav:"./rightnav",
        IZONG:"./IZONG",
    }

})

require(['jquery','Rightnav','IZONG'],function($,RI,IZ){

    // 通过load加载共同的html结构
    $('#topnav').load('common.html  .topnav',function(){
         // 顶部导航条
            IZ.erweima();
            IZ.mycar();
            IZ.wode();
    });

    $('#header').load('common.html  .header',function(){
         
           
    });

    $('#nav').load('common.html  .nav',function(){
          // 所有品牌
            IZ.IMB();
            // 三级导航
            IZ.sanji();

        // 三级导航的显示和隐藏        
      $('.navul').on('mouseenter','li',function(){
              // console.log($(this).index())
              console.log(666)
              // console.log($(this))
              if( $(this).index()===0){
                  $('.navleft').show();
                }      
           }).mouseleave(function(){
                  $('.navleft').hide();
                });

    });

    $('#footer').load('common.html  #footer');

    $('#facecontent').load('common.html  .facecontent',function(){
           // 左边点击手风琴效果
            IZ.dianji();

            $(".cbtn1").on('click',function(){
              // console.log($('#classfiy').height())
               if( $('#classfiy').height()===100){
                  $(".cbtn1").find('i').css({"display":"inline-block","transform":"rotate(180deg)"});
                  $('#classfiy').css({"height":"700px"});
                 // console.log($(".cbtn1").text()) 
                 $(".cbtn1").find('span').text('收起');

               }
               else if($('#classfiy').height()===700){
                  $(".cbtn1").find('i').css({"display":"inline-block","transform":"rotate(360deg)"})
                  $('#classfiy').css({"height":"100"});
                  $(".cbtn1").find('span').text('更多');          
               }
            });

            $(".pbtn1").on('click',function(){
         
               if( $('#pingpai').height()===100){
                  $(".pbtn1").find('i').css({"display":"inline-block","transform":"rotate(180deg)"});
                  $('#pingpai').css({"height":"700px"});
              
                 $(".pbtn1").find('span').text('收起');

               }
               else if($('#pingpai').height()===700){
                  $(".pbtn1").find('i').css({"display":"inline-block","transform":"rotate(360deg)"})
                  $('#pingpai').css({"height":"100"});
                  $(".pbtn1").find('span').text('更多');          
                   }
               });


            $(".gbtn1").on('click',function(){
            
               if( $('#gongxiao').height()===100){
                  $(".gbtn1").find('i').css({"display":"inline-block","transform":"rotate(180deg)"});
                  $('#gongxiao').css({"height":"700px"});
              
                 $(".gbtn1").find('span').text('收起');

               }
               else if($('#gongxiao').height()===700){
                  $(".gbtn1").find('i').css({"display":"inline-block","transform":"rotate(360deg)"})
                  $('#gongxiao').css({"height":"100"});
                  $(".gbtn1").find('span').text('更多');          
                   }
               });


  $(".lastbtn1").on('click',function(){
       if( $(".more").css("display")==="none"){
           $(".more").css({"display":"block"});
           $(".lmore").css({"display":"block"});
           $(".lastbtn1").find('i').css({"display":"inline-block","transform":"rotate(180deg)"});
       }
     else{
          $(".more").css({"display":"none"});
          $(".lmore").css({"display":"none"});
          $(".lastbtn1").find('i').css({"display":"inline-block","transform":"rotate(360deg)"})
      }


     });


 });


    
      $('#rightnav').load('common.html  .rightnav',function(){
           //右边的导航条
           // 返回顶部
             RI.btop();
             RI.rnav();
      });
     

})