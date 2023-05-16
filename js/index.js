$(function(){
    setInterval(function(){
        $(".v1").stop().animate({marginLeft:"-100%"}, 1000, function(){
            $(".v1").css({marginLeft:"0px"});
            $(".v1 li").first().appendTo(".v1");
        })
    },3000)
})

