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
       });


       // setTimeout(function(){
       //          IZ.erweima();
                   // IZ.wode();
                   // IZ.mycar();
                   // IZ.zhuceinput();
                   // $('#scode').text(CO.yanzhengma());
       // }, 1000);




})