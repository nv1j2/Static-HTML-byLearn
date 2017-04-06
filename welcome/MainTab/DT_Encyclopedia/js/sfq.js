$(function () {
    $(".nav_item").removeClass("active");
    $("#nav_index").addClass("active");

    var $centerwell_first = $('#centerwell li:first');
    $centerwell_first.animate({ width: '545px' }, 300);
    $centerwell_first.find('h3').addClass("on");

    $('#centerwell li').click(function () {
        if (!$(this).is(':animated')) {
            $(this).animate({ width: '545px' }, 300).siblings().animate({ width: '100px' }, 300);

            $('#centerwell li h3').removeClass("on");
            $(this).find("h3").addClass("on");
        }
    });
});