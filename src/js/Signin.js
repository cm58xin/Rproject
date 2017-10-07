require.config({
    paths:{
        jquery:"../lib/jquery-3.2.1",
        common:"./common",
        IZONG:"./IZONG",
   }   
})



require(['jquery','common','IZONG'],function($,CO,IZ){
        
       $('#header').load('common.html  .topnav',function(){
                   IZ.erweima();
                   IZ.wode();
                   IZ.mycar();

       });
       $('#logo').load('common.html  .logo');

       $('#zhuce').load('common.html  .zhuce',function(){
            IZ.zhuceinput();
            $('#scode').text(CO.yanzhengma());
           
           var _username;
           var _password;

            $('#zce').click(function(){
                // console.log($('#zce'))
                 _username=$('#zuser').val();
                 _password=$('#zpassword').val();
                 _password2=$('#zpassword2').val();
                 _scode2=$('scode2').val();
                 _scode=$('#scode').text();
                
                var zz=typeof(Number($('#zuser').val()))
                 console.log(_scode)
                 console.log(zz)
               // if(Number($('#zuser').val())==="number"){
               //    var rphone=/^1[3578]\d{9}$/.test(_username);
                        
               //         if(rphone){
               //              $('.text1').text('*手机号合法');
               //              return false;
               //         }else{
               //            $('.text1').text('*手机号不合法');
               //         }  
                  
               // }else if(Number($('#zuser').val())==="string"){
               //    var reg3=/^[a-zA-Z][a-zA-Z\.]{5,15}@(\d{3,}|[a-zA-Z]{2,}|[a-zA-Z\-]{3,})\.[a-zA-Z]{2,3}$/.test(_username);
               //    if(!reg3){
               //      $('.text1').text('邮箱不合法');
               //      $('.text1').css({"color":"red"});
               //       return false;
               //    }
               //    else{
               //      $('.text1').text('邮箱合法');
               //      $('.text1').css({"color":"#58bc58"})
                    
               //    }
               // }
                

               // 密码
                var reg4=/^\S{6,16}$/.test(_password);
                if(!reg4){
                  $('.text2').text('*密码不合法');
                  $('.text2').css({"color":"red"});
                   return false;
                }
                else{
                  $('.text2').text('*密码合法');
                  $('.text2').css({"color":"#58bc58"})
                }
                
                // 第二次密码
                if(_password!== _password2){
                    $('.text3').text('*两次不一样');
                    $('.text3').css({"color":"red"});
                   return false;
                }
                else{
                  $('.text3').text('*两次一样');
                  $('.text3').css({"color":"#58bc58"})
                }
 
               // 验证码
                if(_scode!= _scode2){
                    $('.text4').text('*验证码错误');
                    $('.text4').css({"color":"red"});
                    return false;
                }
                else{
                  $('.text4').text('*验证码正确');
                  $('.text4').css({"color":"#58bc58"})
                }


                // 查找数据库，有则报错，没有则注册
               $.ajax({
                  type:'GET',
                  url:'../api/reg.php',
                  data:{"username":_username,"password":_password},
                  success:function(data){
                    // console.log(data)
                    if(data==="fail"){
                         $('.text1').text('*该名字已被占用')
                          $('.text1').css({"color":"red"})
                      
                    }else{
                      $('.text1').text('*该名字未被占用')
                      $('.text1').css({"color":"#58bc58"})
                    }
                  }
               })



              })
               
            
                

        
       });


     



//
})