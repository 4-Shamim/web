$(document).ready(function() {

    /* ----------- Preloader ------------ */
    $(window).ready(function() {
        $(".preloader").fadeOut("slow");
    });

    /* --------- Menu ---------- */

    $(".menu").click(function() {
        $(".menu").animate({height: "800px", width: "800px"});
        $(".icon").fadeOut();
        $(".menu .nav-bar").delay(300).animate({opacity: "1"});
        $(".menu .nav-bar").css("visibility", "visible");
        $(".menu-circle-layer").animate({height: "850px", width: "850px"});
        
        $(".menu-bg").animate({opacity: "1"});
        $(".menu-bg").css("visibility", "visible");

    });

    $(".menu-bg").click(function() {
        $(".menu").animate({height: "50px", width: "50px"});
        $(".icon").fadeIn();
        $(".menu .nav-bar").animate({opacity: "0"});
        $(".menu .nav-bar").css("visibility", "hidden");
        $(".menu-circle-layer").animate({height: "0", width: "0"});

        $(".menu-bg").animate({opacity: "0"});
        $(".menu-bg").css("visibility", "hidden");
    });
})