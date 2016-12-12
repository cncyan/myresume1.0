$(function(){
    var lilist=$(".myulpjt li");
    lilist.click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var idx=lilist.index(this);
        $("p.destext").eq(idx).show().siblings().hide();
    });
})
