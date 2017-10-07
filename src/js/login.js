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

       $('#denglu').load('common.html  .denglu',function(){
                IZ.dengluinput();
                $('#lcode').text(CO.yanzhengma());

                var _username;
                var _password;

                 $('#dlu').click(function(){
                     console.log($('#dlu'))
                      _username=$('#duser').val();
                      _password=$('#dpassword').val();
                      // _password2=$('#zpassword2').val();
                      _lcode2=$('lcode2').val();
                      _lcode=$('#lcode').text();
                     
                     // var zz=typeof(Number($('#zuser').val()))
                      // console.log(_scode)
                      // console.log(zz)
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
                     
                    
                    // 验证码
                     if(_lcode!= _lcode2){
                         $('.text3').text('*验证码错误');
                         $('.text3').css({"color":"red"});
                         // return false;
                     }
                     else{
                       $('.text3').text('*验证码正确');
                       $('.text3').css({"color":"#58bc58"})
                     }


                     // 查找数据库，有则报错，没有则注册
                    $.ajax({
                       type:'GET',
                       url:'../api/login.php',
                       data:{"username":_username,"password":_password},
                       success:function(data){
                         console.log(data)
                         if(data==="fail"){
                              alert("请重新输入登录");
                           
                         }else{
                          alert("请重新登录成功")
                         }
                       }
                    })



                   })
                    
       });
     
     



})