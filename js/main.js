$(function () {
     

    'use strict';

    // Calculate Bady Padding Top Depend on Navbar Height
    
    $('body').css('paddingTop', $('.navbar').innerHeight());
    //smoothly scroll to element 

    $('.navbar li a').on('click' , function (e) {

        e.preventDefault();

        $('html, body').animate({
            
            scrollTop:$(`#${$(this).data('scroll')}`).offset().top + 1
            
        },1000)
        
    });

    // Add Active Class On Navbar Link And Remove From Siblings

    $('.navbar li a').on('click',function() {

        $('.navbar a').removeClass('active');
        
        $(this).addClass('active')
        // $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    });

    

    $(window).on('scroll',function() {

        // Sync Navbar Links With Sections
        $('.block').each(function() {

            if ($(window).scrollTop() > $(this).offset().top) {

                var blockID = $(this).attr('id');

                $(`.navbar li a[data-scroll=${blockID}`).addClass('active').parent().siblings().find('a').removeClass('active');

            }

        })

        // Scroll To Top Button 

        var scrollToTop = $('.scroll-to-top');

        if ($(window).scrollTop() >= 1000) {

            if (scrollToTop.is( ':hidden')) {

               scrollToTop.fadeIn(400)

            }
        } else {

            scrollToTop.fadeOut(400);
        }
    });

    // Click On Scorll To Top To Go Up

    $('scroll-to-top').on('click',function(event) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop:$(`#${$(this).data('scroll')}`).offset().top + 1

        },1000)
    })

    //Popup 

    $('.show-popup').on('click',function() {

        $('.popup').fadeIn()

    })

    $('.popup').on('click',function() {
        
        $(this).fadeOut();

    })
    
    $('.popup .inner').on('click',function(e) {
        
        e.stopPropagation()
        
    })

    $('.popup .close').on('click',function(e) {

        e.preventDefault()
        
        $('.popup').fadeOut()
        
    })

});
