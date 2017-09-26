
define(function(){
  
return {

         bb : function(){

           var ba=document.querySelector('.backTop');
                     ba.onclick=function(){
                        var time=setInterval(()=>{
                            let speed=80;
                            var height=window.scrollY;

                            speed=Math.ceil(speed/10);

                            height-=speed;

                            if(window.scrollY<100){
                                clearInterval(time);
                            }
                            window.scrollTo(0, height);
                        },3)
                     }
                 },
        

          }       
       
})
  



