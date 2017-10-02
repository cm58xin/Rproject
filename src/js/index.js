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

   // $.ajax({
   //     // 请求方式
   //     type:'GET',
   //     // 发送请求的地址
   //     url:'api/goodslist.php',
   //     // 返回的数据类型
   //     datatype:'josn',
   //     // async:true,
   //     success:function(msg){
   //          var msg=JSON.parse(msg);
   //          // console.log(msg)
   //        var   div=document.createElement('div');
   //        // var  show=document.querySelector('#mshow')
   //        div.innerHTML=msg.map(item=>{
   //          console.log(item.imgurl)
   //          return  `<a href="#" title="每日必看"><div class="look1"><img src="${item.imgurl}"  height="260" width="300" alt=""/></div><div class="look1 look2"><p>${item.name}</p><p>${item.dec1}</p><p>${item.dec2}</p><h4>${item.btn}</h4></div></a>`
   //        }).join('');
   //        // show.appendChild(div)
   //        $('#mshow').html(div)

   //     }
   // });
  

})
