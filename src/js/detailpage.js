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


    $('#rightnav').load('common.html  .rightnav',function(){
         //右边的导航条
         // 返回顶部
           RI.btop();
           RI.rnav();
    });

     
      
   
        
        
//
})