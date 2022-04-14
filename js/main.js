$(window).scroll(function() {
    let top =$(window).scrollTop();

    if(top >= 65){
        $("nav").addClass("fix-nav");
    }else{
        if($("nav").hasClass("fix-nav")){
            $("nav").removeClass("fix-nav")
        }
    }
})
