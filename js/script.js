$(function(){
    $("p").html("js読んでるんか？");
    //(1)オブジェクト作成
    var xmr=new XMLHttpRequest();
    //(2)イベントの状況変化を監視
    xmr.onreadystatechange=function(){
        if(this.readyState==0){
            $("div").html("0");
        }
        if(this.readyState==1){
            $("div").html("1");
        }
        if(this.readyState==2){
            $("div").html("2");
        }
        if(this.readyState==3){
            $("div").html("3");
        }
        if(this.readyState==4){
            $("div").html("4");
            if(this.status!=200){
                $("p").html(this.status);
            }else{
                $("p").html(this.responseText);
            }
        }
    }
    //(3)HTTPのGETとアクセス場所を指定
    xmr.open("GET","/test.php",true);
    //(4)HTTPリクエストを送信
    xmr.send();
});


/*
$.ajax({
            //url:"/test.php" ,
            url:"https://kinocolog.com/ajax/test.html",
            TYPE:"GET",
            dataType:"html",
            headers:{"Content-Type":"text/html"}
        }).done(function(data){
                $("div").html("成功");
        }).fail(function(data){
            $("div").html("失敗");
        });
*/