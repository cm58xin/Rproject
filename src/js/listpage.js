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
              // console.log($(this))
              if( $(this).index()===0){
                  $('.navleft').show();
                }      
           }).mouseleave(function(){
                  $('.navleft').hide();
                });

    });

    $('#footer').load('common.html  #footer');

    $('#rightnav').load('common.html  .rightnav',function(){
         //右边的导航条
         // 返回顶部
           RI.btop();
           RI.rnav();
    });


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

     $('#fgoods').load('common.html  .goods',function(){
              // 从数据库拿数据
                $.ajax({
                    //     // 请求方式
                        type:'GET',
                    //     // 发送请求的地址
                        url:'../api/goodslist.php',
                    //     // 返回的数据类型
                        datatype:'josn',
                    //     // async:true,
                        success:function(msg){
                           var msg=JSON.parse(msg);  
                           // console.log(msg) 
                           var   ul=document.createElement('ul');
                                 ul.className="showgoods";
                           var  goods=document.querySelector('#goods')
                           ul.innerHTML=msg.map(item=>{
                             // console.log(item.imgurl)
                             return  `<li>
                             <div class="lists">
                             <div class="gt">
                             <p><span>直降<br>上市</span></p>
                             <a href="#" ><img src="${item.imgurl}"  height="200" width="180" alt="" class="tutu"/></a>
                             <span><i><img src="${item.gurl}" height="15" width="14" alt="" /></i>${item.guojia}</span>
                              </div>
                              <div  class="chuizhi">
                              <p><img src="${item.imgurl1}"  height="45" width="48" alt=""/></p>
                              <p><img src="${item.imgurl2}"  height="45" width="48" alt=""/></p>
                              <p><img src="${item.imgurl3}"  height="45" width="48" alt=""/></p>
                              </div>
                             <div class="title">
                             <p><span>${item.yuan}${item.price}</span><span><del>${item.yuan}${item.last_price}</del></span><span>${item.zhekou}</span></p>
                             <P><a href="#"><span>${item.mingzi}</span><br><span>${item.descrition}</span><br>${item.daxiao}</a></p>
                              <p class="addcar">加入购物车</p>
                             </div>
                             </div>
                             </li>`
                           }).join('');
                       goods.appendChild(ul);
                      

                  $('.showgoods').on('click','.addcar',function(){
                      // console.log($(this).parents('li').index())
                      // 得到商品的id
                      var id=$(this).parents('li').index()+1;
                        // console.log(id);
                     // 发起请求，查看数据库里面表的数据
                     $.ajax({
                        type:'GET',
                        url:'../api/goods.php',
                        data:{"id":id},
                        success:function(data){
                           // 从数据库的表里得到数据，并写入新的购物车表
                             var data=JSON.parse(data);
                             // console.log(data)
                             
                            
                         }
                      })


                       
                    }) 

                  // 移入的动画效果   
                  $('.showgoods').on('mouseenter','li',function(){
                       // console.log($(this).index())
                      if($(this).index()==0){
                          $(this).find('.lists').addClass('hg');
                        $(this).find('.chuizhi').stop().animate({opacity:1});
                         $(this).find('.lists').stop().animate({width:250,height:440});
                         $(this).find('.addcar').stop().animate({opacity:1,width:224});
                      } 
                     else if($(this).index()==1){
                           $(this).find('.lists').addClass('hg');
                         $(this).find('.chuizhi').stop().animate({opacity:1});
                          $(this).find('.lists').stop().animate({width:250,height:440});
                          $(this).find('.addcar').stop().animate({opacity:1,width:224});
                       }


                      else if($(this).index()==2){
                             $(this).find('.lists').addClass('hg');
                           $(this).find('.chuizhi').stop().animate({opacity:1});
                            $(this).find('.lists').stop().animate({width:250,height:440});
                            $(this).find('.addcar').stop().animate({opacity:1,width:224});
                         }

                      else if($(this).index()==3){
                               $(this).find('.lists').addClass('hg');
                             $(this).find('.chuizhi').stop().animate({opacity:1});
                              $(this).find('.lists').stop().animate({width:250,height:440});
                              $(this).find('.addcar').stop().animate({opacity:1,width:224});
                           }

                      else if($(this).index()==4){
                                 $(this).find('.lists').addClass('hg');
                               $(this).find('.chuizhi').stop().animate({opacity:1});
                                $(this).find('.lists').stop().animate({width:250,height:440});
                                $(this).find('.addcar').stop().animate({opacity:1,width:224});
                             }
                      else if($(this).index()==5){
                                   $(this).find('.lists').addClass('hg');
                                 $(this).find('.chuizhi').stop().animate({opacity:1});
                                  $(this).find('.lists').stop().animate({width:250,height:440});
                                  $(this).find('.addcar').stop().animate({opacity:1,width:224});
                               }
                      else if($(this).index()==6){
                                     $(this).find('.lists').addClass('hg');
                                   $(this).find('.chuizhi').stop().animate({opacity:1});
                                    $(this).find('.lists').stop().animate({width:250,height:440});
                                    $(this).find('.addcar').stop().animate({opacity:1,width:224});
                                 }
                      else if($(this).index()==7){
                                       $(this).find('.lists').addClass('hg');
                                     $(this).find('.chuizhi').stop().animate({opacity:1});
                                      $(this).find('.lists').stop().animate({width:250,height:440});
                                      $(this).find('.addcar').stop().animate({opacity:1,width:224});
                                   }
                      else if($(this).index()==8){
                                         $(this).find('.lists').addClass('hg');
                                       $(this).find('.chuizhi').stop().animate({opacity:1});
                                        $(this).find('.lists').stop().animate({width:250,height:440});
                                        $(this).find('.addcar').stop().animate({opacity:1,width:224});
                                     }
                      else if($(this).index()==9){
                                        $(this).find('.lists').addClass('hg');
                                      $(this).find('.chuizhi').stop().animate({opacity:1});
                                       $(this).find('.lists').stop().animate({width:250,height:440});
                                       $(this).find('.addcar').stop().animate({opacity:1,width:224});
                                    }
                      else if($(this).index()==10){
                                      $(this).find('.lists').addClass('hg');
                                    $(this).find('.chuizhi').stop().animate({opacity:1});
                                     $(this).find('.lists').stop().animate({width:250,height:440});
                                     $(this).find('.addcar').stop().animate({opacity:1,width:224});
                                  }
                     }).mouseleave(function(){
                       $(this).find('.chuizhi').stop().animate({opacity:0});
                      $(this).find('.lists').stop().animate({width:192,height:360});
                       $(this).find('.lists').removeClass('hg');
                       $(this).find('.addcar').stop().animate({opacity:0,width:0},100);


              });
            
            // 右边换图
            // $('.chuizhi').on('mouseenter','p',function(){
            //       // console.log($(this).index())
            //       if($(this).index()==0){
            //              $('.tutu').get(0).src="../img/img2/f1_1.jpg";
            //       }
            //       else if($(this).index()==1){
            //            $('.tutu').get(0).src="../img/img2/f1_2.jpg";
            //       }
            //       else{
            //          $('.tutu').get(0).src="../img/img2/f1_3.jpg";
            //       }
            // })
               

                }

          });
         
      
     }); 
//
})