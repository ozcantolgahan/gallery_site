$(document).ready(function(){
    $(".bannerContainer").animate({"margin-left":"110px","opacity":"1"},3500); 
    $(".cardContainer").eq(0).hover(function(){
        $(this).children().eq(0).attr("src","./img/car_number_hover.png");
    });
    $(".cardContainer").eq(0).mouseleave(function(){
        $(this).children().eq(0).attr("src","./img/car_number.png");
    });
    $(".cardContainer").eq(1).hover(function(){
        $(this).children().eq(0).attr("src","./img/car_power_hover.png");
    });
    $(".cardContainer").eq(1).mouseleave(function(){
        $(this).children().eq(0).attr("src","./img/car_power.png");
    });
    $(".cardContainer").eq(2).hover(function(){
        $(this).children().eq(0).attr("src","./img/car_security_hover.png");
    });
    $(".cardContainer").eq(2).mouseleave(function(){
        $(this).children().eq(0).attr("src","./img/car_security.png");
    });
    $(window).scroll(saymaIsleminiBaslat);
    function saymaIsleminiBaslat(){

        if($(window).scrollTop()>800){
            $(".sayac").each(function(){
                let suankiEleman=$(this);
                jQuery({Counter:0}).animate({Counter:suankiEleman.text()},{duration:1000,easing:"swing",step:function(){
                    suankiEleman.text(parseInt(this.Counter+1));
                }});
                
            });
            $("#lastCarBlog").show(1500);
            $(window).off("scroll",saymaIsleminiBaslat);

        }

    }

});

