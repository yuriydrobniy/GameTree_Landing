$(document).foundation();

$(function() {
    $('#button-one').click(function() {
        $('.card-one').addClass('rotate-one');
        //setTimeout("$('.card-two').addClass('rotate-two');", 1000);
        $('.card-two').addClass('rotate-two');
    });
    $('#button-two').click(function() {
        $('.card-two').addClass('rotate-two-off-screen').fadeOut(1000);
        setTimeout("$('.card-three').addClass('card-three-show');", 1000);
        setTimeout(typeText, 3000);
    });
    $('#button-three').click(function() {
        console.log('111');
        $('.orbit-slide').addClass('rotate-two-off-screen').fadeOut(1000);
        setTimeout("$('.card-three').addClass('card-three-show');", 1000);
        setTimeout(typeText, 3000);
    });
});
/* play card */
$(function(){
    var i = 999;
    $('.playing-cards').click(function(){
        $(this)
            .velocity({left: 100+'%', marginTop: 20+'%'},500, 'easeOutBack',function(){i--;$(this).css('z-index', i)})
            .velocity({left: 0+'%', marginTop: 0+'em'},500, 'easeOutBack');
    });
});
/* lift */
$(function(){
    $('.section-two img').hover(function(){
        $(this).addClass('animated rotateIn');
    },
        function(){
            $(this).removeClass('animated rotateIn');
        }
    );
    $('.section-two .box').hover(function(){
            $(this).addClass('animated jello');
        }
    );
    $(window).scroll(function() {
        var hT = $('.section-four').offset().top,
            hH = $('.section-four').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $('.section-four').addClass('animated flipInX');
        }
    });
    $(window).scroll(function() {
        var hT = $('.section-one').offset().top,
            hH = $('.section-one').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $('.section-one').addClass('animated flipInX');
        }
    });
    $(window).scroll(function() {
        var hT = $('.playing-cards-wrapper').offset().top,
            hH = $('.playing-cards-wrapper').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $('.playing-cards-wrapper').addClass('animated');
        }
    });
    // $(window).load(function() {
    //     $('.main-text').addClass('animated pulse');
    // });
});

/* dropdown-lang */
$( function() {
    $( '#cd-dropdown' ).dropdown( {
        gutter : 5
    } );
});