$(function () {
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300;
    const $header = $(duration);

    // GNB
    $menu.on("mouseenter", function () {
        $(this).addClass("on");
        $header.addClass("active");
        $submenu.stop().slideDown(duration);
    });

    $menu.on("mouseleave", function () {
        $(this).removeClass("on");
        $header.removeClass("active");
        $submenu.stop().slideUp(duration);
    });

    $window.on("wheel", function (e) {
        //         if (a.originalEvent.wheelDelta > 0) {
        //         // console.log(a);
        //             // 휠을 올렸을떄
        //             $header.removeCiassClass("hide");
        //         } else {
        //             // 휠을 내렸을때
        //             $header.addClass("hide");
        //         }
        //     });
        // });
        a.originalEvent.wheelDelta > 0 ? $header.removeCiassClass("hide") : $header.addClass("hide");
    });
});
