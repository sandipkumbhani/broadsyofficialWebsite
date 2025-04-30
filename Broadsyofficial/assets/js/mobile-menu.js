$(function() {
    // Mobile Menu Toggle
    $('.navbar-toggler').on('click', function() {
        $(this).attr('aria-expanded', function() {
            return $(this).attr('aria-expanded') === 'true' ? 'false' : 'true';
        });
        $('.main-nav').toggleClass('show');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.header').length) {
            $('.main-nav').removeClass('show');
            $('.navbar-toggler').attr('aria-expanded', 'false');
            $('.main-nav__item').removeClass('active');
        }
    });

    // Handle submenu toggle on mobile
    $('.main-nav__item').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // If clicking the toggler or the link
        if ($(e.target).closest('.main-nav__toggler').length || $(e.target).closest('.main-nav__link').length) {
            const $this = $(this);
            const isActive = $this.hasClass('active');
            
            // Remove active class from all items except the clicked one
            $('.main-nav__item').not($this).removeClass('active');
            
            // Toggle active class for clicked item
            $this.toggleClass('active');
            
            // If this is the services menu, handle submenu
            if ($this.find('.menutextservice').length) {
                const submenu = $this.find('.main-nav__sub-list-box');
                if (submenu.length) {
                    if ($this.hasClass('active')) {
                        // Show submenu
                        submenu.css({
                            'max-height': '500px',
                            'opacity': '1',
                            'visibility': 'visible',
                            'padding': '10px 0',
                            'transform': 'scaleY(1)'
                        });
                    } else {
                        // Hide submenu
                        submenu.css({
                            'max-height': '0',
                            'opacity': '0',
                            'visibility': 'hidden',
                            'padding': '0',
                            'transform': 'scaleY(0)'
                        });
                    }
                }
            }
        }
    });

    // Handle menu item click
    $('.main-nav__link').on('click', function(e) {
        if (!$(e.target).closest('.main-nav__toggler').length) {
            $('.main-nav').removeClass('show');
            $('.navbar-toggler').attr('aria-expanded', 'false');
            $('.main-nav__item').removeClass('active');
        }
    });
}); 