(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


            // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // International Tour carousel
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);


// Smooth scrolling with keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    const scrollables = document.querySelectorAll('.scrollable-content');
    
    // Add smooth scrolling behavior
    scrollables.forEach(scrollable => {
        // Mouse wheel scrolling
        scrollable.addEventListener('wheel', function(e) {
            e.preventDefault();
            this.scrollTop += e.deltaY * 0.5;
        }, { passive: false });
        
        // Highlight active item on scroll
        scrollable.addEventListener('scroll', function() {
            const items = this.querySelectorAll('.update-item');
            const scrollPos = this.scrollTop + 50;
            
            items.forEach(item => {
                const itemTop = item.offsetTop;
                const itemHeight = item.offsetHeight;
                
                if (scrollPos >= itemTop && scrollPos < itemTop + itemHeight) {
                    item.style.background = 'rgba(248, 249, 250, 0.8)';
                } else {
                    item.style.background = '';
                }
            });
        });
    });
    
    // Add click animation to download buttons
    document.querySelectorAll('.btn-outline-secondary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-download');
                icon.classList.add('fa-check');
                setTimeout(() => {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-download');
                }, 1500);
            }
        });
    });
    
    // Add hover effect to cards
    document.querySelectorAll('.scrollable-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Auto-scroll indicator
    let scrollDirection = 1;
    
    function animateScrollIndicator() {
        const indicators = document.querySelectorAll('.card-footer small');
        indicators.forEach(indicator => {
            const opacity = Math.abs(Math.sin(Date.now() / 1000));
            indicator.style.opacity = 0.5 + opacity * 0.5;
        });
        requestAnimationFrame(animateScrollIndicator);
    }
    
    animateScrollIndicator();
});