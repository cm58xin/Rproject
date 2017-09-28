require.config({
    paths:{
        jquery:"../lib/jquery-3.2.1",
        common:"./common",
        IZONG:"./IZONG",
   }   
})



require(['jquery','common','IZONG'],function($,CO,IZ){
      
        $('#header').load('header.html  .topnav');
       $('#logo').load('common.html  .logo');
       $('#zhuce').load('common.html  .zhuce');
       setTimeout(function(){
               // console.log($('.w1').get(0))
                   IZ.erweima();
                   IZ.wode();
                   IZ.mycar();
                   IZ.zhuceinput();
                   $('#scode').text(CO.yanzhengma());
       }, 1000);




})