// 헤더 스크롤
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    if (scrollTop > 100) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }
});

//모바일 메뉴
$("#mNav button").click(function () {
    $("#mNav nav").toggleClass("show");
});

//footer menu
// $(".firstMenu").click(function () {
//     $(this).next(".footer_dropdown").toggleClass("slide");
// });
$(".firstMenu").click(function () {
    $(this).next(".footer_dropdown").slideToggle(500);
});

// top 버튼

$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();

    // 헤더 배경 변경
    if (scrollTop > 100) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }

    // TOP 버튼 표시
    if (scrollTop > 800) {
        $(".top").addClass("show");
    } else {
        $(".top").removeClass("show");
    }
});
