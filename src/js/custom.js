$(".favs button").click(function() {
    //alert('fsdfsdf');
    $(".favs").toggleClass("full");
    //$(".favs button").toggleClass("full");
});

$(".caseSummary button").click(function() {
    //alert('fsdfsdf');
    $(".caseSummary").toggleClass("full");
    //$(".favs button").toggleClass("full");
});

$(".actions button").click(function() {
    //alert('fsdfsdf');
    $(".actions").toggleClass("full");
    //$(".favs button").toggleClass("full");
});

$(".sCat button").click(function() {
    //alert('fsdfsdf');
    $(".sCat").toggleClass("full");
    //$(".favs button").toggleClass("full");
});






$(".createCase .plus").click(function() {
    //alert('prem');
    $(".createCase").addClass("full");
    $(".createCase .plus").addClass("closeCase");
    $('.createCase img').attr('src', 'images/closeCase.png');
});




$(".addCases button").click(function() {
    $(this).parents(".active").addClass("bactive");
    $(this).parents(".csesAdd").toggleClass("active");
    $(".noCase").addClass("active");
    $(".createCase .plus").removeClass("closeCase");
    //$('.createCase img').attr('src', 'images/plus_new.png');
    //$(".createCase").removeClass("full");
    //$(this).parents(".csesAdd").toggleClass("active");
});


$(".saveLater").click(function() {
    $(".csesAdd .active").toggleClass("bactive");
    $(".csesAdd").removeClass("active");
    //$(".noCase").addClass("active");
    $(".createCase .plus").removeClass("closeCase");
    $(".createCase").removeClass("full");
    $('.createCase img').attr('src', 'images/plus_new.png');
    //$('.createCase img').attr('src', 'images/plus_new.png');
    //$(".createCase").removeClass("full");
    //$(this).parents(".csesAdd").toggleClass("active");
});





$(".ins").click(function() {
    $(this).toggleClass("w300");

});

$(".ssCats .rightArrows").click(function() {
    $(".ssCats ").toggleClass("w-50px");
    $(".WScat ").toggleClass("clkc");

});


$(".ssCats .slected").click(function() {
    $(".ssCats ").toggleClass("w-50px");
    $(".WScat ").toggleClass("clkc");

});


$('.results i.icon-down-arrow').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".xpended").toggleClass('displayN');
});


$('.agebtn').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".ages").toggleClass('displayF');
    $(".agebtn").text("?");
    $(".agebtn").removeClass('active');
    //$(".agebtn").addClass('active');

});

$('.savebtns').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".ages").toggleClass('displayF');
    $(".agebtn").addClass('active');
    $(".agebtn").text("18 years old");

});

$('.gndersbtn').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".gendrrow").toggleClass('displayF');
    $(".gndersbtn").text("?");
    $(".gndersbtn").removeClass('active');
    //$(".agebtn").addClass('active');

});

$('.gsavebtns').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".gendrrow").toggleClass('displayF');
    $(".gndersbtn").addClass('active');
    $(".gndersbtn").text("female");

});

$('.weightbtn').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".weightRow").toggleClass('displayF');
    $(".weightbtn").text("?");
    $(".weightbtn").removeClass('active');
    //$(".agebtn").addClass('active');

});



$('.wsavebtns').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".weightRow").toggleClass('displayF');
    $(".weightbtn").addClass('active');
    $(".weightbtn").text("70 kg");

});


$('.sBtns').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".surgeryRow").toggleClass('displayF');
    $(".sBtns").text("?");
    $(".sBtns").removeClass('active');
    //$(".agebtn").addClass('active');

});

$('.sursavebtns').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".surgeryRow").toggleClass('displayF');
    $(".sBtns").addClass('active');
    $(".sBtns").text("COLORECTAL");

});

$('.AllsBtns').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".allRow").toggleClass('displayF');
    $(".caseSummary .mrows .col-3 span").text("?");
    $(".sBtns").removeClass('active');
    //$(".agebtn").addClass('active');

});



$('.allsavebtns').click(function() {
    //$(this).parent().find('.childDiv').css('background-color', '#ffffff');
    $(".allRow").toggleClass('displayF');
    $(".caseSummary .mrows .col-3 span").addClass('active');
    $(".agebtn").text("18 years old");
    $(".gndersbtn").text("Female");
    $(".weightbtn").text("70 KG");
    $(".hBtns").text("160 CM");
    $(".pBtns").text("Adult");
    $(".sBtns").text("COLORECTAL");
    $(".AllsBtns").text("general ANESTHESIA");
    $(".ppBtns").text("All periop PERIOD");

});


function goBack() {
    window.history.back();
}