(function ($) {

  var $window = $(window),

    $main = $('#main');

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['361px', '480px'],
    xxsmall: [null, '360px']
  });

  // Play initial animations on page load.
  $window.on('load', function () {

    window.setTimeout(function () {
      runLogoAnimation();
    }, 100);
  });

  // Nav.
  var $nav = $('#nav');

  if ($nav.length > 0) {

    // Shrink effect.
    $main
      .scrollex({
        mode: 'top',
        enter: function () {
          $nav.addClass('alt');
        },
        leave: function () {
          $nav.removeClass('alt');
        },
      });

    // Links.
    var $nav_a = $nav.find('a');

    $nav_a
      .scrolly({
        speed: 1000,
        offset: function () { return $nav.height(); }
      })
      .on('click', function () {

        var $this = $(this);

        // External link? Bail.
        if ($this.attr('href').charAt(0) != '#')
          return;

        // Deactivate all links.
        $nav_a
          .removeClass('active')
          .removeClass('active-locked');

        // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
        $this
          .addClass('active')
          .addClass('active-locked');

      })
      .each(function () {

        var $this = $(this),
          id = $this.attr('href'),
          $section = $(id);

        // No section for this link? Bail.
        if ($section.length < 1)
          return;

        // Scrollex.
        $section.scrollex({
          mode: 'middle',
          initialize: function () {

            // Deactivate section.
            if (browser.canUse('transition'))
              $section.addClass('inactive');

          },
          enter: function () {

            // Activate section.
            $section.removeClass('inactive');

            // No locked links? Deactivate all links and activate this section's one.
            if ($nav_a.filter('.active-locked').length == 0) {

              $nav_a.removeClass('active');
              $this.addClass('active');

            }

            // Otherwise, if this section's link is the one that's locked, unlock it.
            else if ($this.hasClass('active-locked'))
              $this.removeClass('active-locked');

          }
        });

      });

  }

  // Scrolly.
  $('.scrolly').scrolly({
    speed: 1000
  });

  /* yih scripts */

  $(document).ready(function () {
    // appNamespace.fadeUpCardsOnView();
    editNodePopover.init();

    //  ---- particles.js config ---- */
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

  }); 

})(jQuery);



// ani


var editNodePopover = {
  DOM: {},

  init: function () {        
      // cache dom      
      this.DOM.container = $(".node-update-popover");
      this.DOM.content = $('.content', this.DOM.$container);
  },

  show: function (index) {
      
    this.DOM.container.popup({

      color: "rgba(99, 76, 161)",
      // color: 'white',
      opacity: .8,
      transition: '0.3s',
      scrolllock: true,
      // blur: false,
      autoopen: true,
    
      closeelement: '.popover-close',
      // escape: false,

      onopen: function () {
        editNodePopover.DOM.content.html( window.overlayData[index].content );   
      },

    });
  },  

};