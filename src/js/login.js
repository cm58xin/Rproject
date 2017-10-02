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
       });
     // setTimeout(function(){
             // console.log($('.w1').get(0))
                 // IZ.erweima();
                 // IZ.wode();
                 // IZ.mycar();
                 // IZ.dengluinput();
                 // $('#lcode').text(CO.yanzhengma());
     // }, 1000);
     



})