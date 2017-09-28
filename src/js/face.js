require.config({
    paths:{
        jquery:"../lib/jquery-3.2.1",
        // common:"./common",
        Rightnav:"./rightnav",
        IZONG:"./IZONG",
    }

})

require(['jquery','Rightnav','IZONG'],function($,RI,IZ){

    $('#topnav').load('common.html  .topnav');
    $('#header').load('common.html  .header');
    $('#nav').load('common.html  .nav');
    $('#footer').load('common.html  #footer');
    $('#facecontent').load('common.html  .facecontent');


      setTimeout(function(){
             // 返回顶部
               RI.btop();
            //右边的导航条
              RI.rnav();
              IZ.erweima();
              IZ.wode();
              IZ.mycar();
              IZ.wode();
              IZ.IMB();
              IZ.sanji();
              IZ.dianji();
         $('.navul').on('mouseenter','li',function(){
            // console.log($(this).index())
            // console.log($(this))
            if( $(this).index()===0){
                $('.navleft').show();
              }      
         }).mouseleave(function(){
                $('.navleft').hide();
         })
        





         
 }, 1000);


})