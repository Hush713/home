$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(scrollT);
    var backTop = $("#star").offset().top-$(window).height()/2;
    if(scrollT > backTop)
    {
        $(".an1").addClass("animated bounceInLeft show").removeClass("fade");
        $(".an2").addClass("animated bounceInUp show").removeClass("fade");
        $(".an3").addClass("animated bounceInRight show").removeClass("fade");
        $(".an4").addClass("animated bounceInDown show").removeClass("fade");
    }
});
$(window).scroll(function(){
    var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(scrollT);
    var backTop = $("#world").offset().top-$(window).height()/2;
    if(scrollT > backTop)
    {
        $(".an5").addClass("animated bounceInLeft show").removeClass("fade");
        $(".an6").addClass("animated bounceInRight show").removeClass("fade");
        $(".an7").addClass("animated bounceInLeft show").removeClass("fade");
        $(".an8").addClass("animated bounceInRight show").removeClass("fade");
    }
});
