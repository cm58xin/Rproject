<?php
    include 'connect.php';
    
    $id = isset($_GET['id']) ? $_GET['id'] : ''; 
    $miaoshu = isset($_GET['miaoshu']) ? $_GET['miaoshu'] : '';
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : '';
    $nowprice = isset($_GET['nowprice']) ? $_GET['nowprice'] : '';
    $lastprice = isset($_GET['lastprice']) ? $_GET['lastprice'] : '';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '';


    //查看用户名是否已经存在
    $sql = "select miaoshu from buycar where miaoshu='$miaoshu'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        //如果存在，更新数量
        $sql = "update buycar set qty=$qty+qty  where miaoshu=$miaoshu";
            // 获取查询结果
        $result = $conn->query($sql);
         echo "fail";
    }
    else{
        
    $sql = "insert into buycar (id,miaoshu,imgurl,nowprice,lastprice,qty) values('$id','$miaoshu','$imgurl','$nowprice','$lastprice','$qty')";
        // 获取查询结果
        $result = $conn->query($sql);

        if ($result) {
            echo "ok";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // 释放查询内存(销毁)
    //$result->free();

    //关闭连接
    $conn->close();
?>