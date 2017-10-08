require.config({
    paths:{
        jquery:"../lib/jquery-3.2.1",
        // common:"./common",
        Rightnav:"./rightnav",
        IZONG:"./IZONG",
        details:"./details",
    }

})

require(['jquery','Rightnav','IZONG','details'],function($,RI,IZ,de){

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


    $('#detailpage').load('common.html  .detailpage',function(){

// 商品参数栏点击滑动    
        de.huadong();
// 商品参数栏滑动吸顶       
        de.xiding();
// 显示隐藏购物车的二维码
       de.carerweima();
//点击增减数量    
        de.jiajian();

// 小图点击左右动画
        de.xiaotu();

        
// 添加到购物车
        de.addcar();

    });
   

   
 //尾部       
    $('#footer').load('common.html  #footer');


    $('#rightnav').load('common.html  .rightnav',function(){
         //右边的导航条
         // 返回顶部
           RI.btop();
           RI.rnav();
    });    
//
})