require.config({
    paths:{
        jquery:"../lib/jquery-3.2.1",
        Rightnav:"./rightnav",
        lnav:"./lnav",
        IZONG:"./IZONG",
    }

})


require(['jquery','Rightnav','lnav','IZONG'],function($,RI,LN,IZ){
    
 // 返回顶部
   RI.btop();

//右边的导航条
   RI.rnav();
   IZ.erweima();
   IZ.wode();
   IZ.mycar();
   IZ.wode();
   IZ.banner();
   IZ.IMB();
   IZ.sanji();
   IZ.gonggao();

//左边的导航条
   LN.LNAV();
   LN.LNAVCLICK();

 
})
