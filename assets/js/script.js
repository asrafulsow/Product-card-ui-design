$(".product-colors span").click(function () {
    $(".product-colors span").removeClass("active");
    $(this).addClass("active");
    $(".active").css("background", $(this).attr("data-color-sec"));
    $("body").css("background", $(this).attr("data-color-primary"));
    $(".product-colors").css("color", $(this).attr("data-color-primary"))
    $(".content h2").css("color", $(this).attr("data-color-primary"))
    $(".content h3").css("color", $(this).attr("data-color-primary"))
    $(".container .imgbx").css("background", $(this).attr("data-color-sec"))
    $(".imgbx img").attr("src", $(this).attr("data-pic"))
}) 