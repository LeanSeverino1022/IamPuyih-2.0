;







(function($) {
    var $main = $('#main')

    // Breakpoints.

    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    })

    //todo: remove or update later.. doesn't do anything currently
    $('div.spotlight').scrollex({
        mode: 'middle',
        enter: function() {
            // alert('pota')
        },
        leave: function() {
        }
    })


    // Nav.
    var $nav = $('.js-main-nav')

    if ($nav.length) {

        enableStickyNav($nav);

        // Links.
        var $nav_a = $nav.find('a')

        $nav_a
            .scrolly({
                speed: 1000,
                offset: function() {
                    return 70;//hard coded
                }
            })
            .on('click', function() {

                var $this = $(this)

                // External link? Bail.
                if ($this.attr('href').charAt(0) != '#') return

                // Deactivate all links.
                $nav_a.removeClass('active').removeClass('active-locked')

                // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
                $this.addClass('active').addClass('active-locked')
            })
            .each(function() {
                var $this = $(this);

                 // External link? Bail.
                 if ($this.attr('href').charAt(0) != '#') return

                var id = $this.attr('href'),
                    $section = $(id)

                // No section for this link? Bail.
                if ($section.length < 1) return

                // Scrollex.
                $section.scrollex({
                    mode: 'middle',
                    initialize: function() {
                        // Deactivate section.
                        if (browser.canUse('transition')) $section.addClass('inactive')
                    },
                    enter: function() {
                        // Activate section.
                        $section.removeClass('inactive')

                        // No locked links? Deactivate all links and activate this section's one.
                        if ($nav_a.filter('.active-locked').length == 0) {
                            $nav_a.removeClass('active')
                            $this.addClass('active')
                        }

                        // Otherwise, if this section's link is the one that's locked, unlock it.
                        else if ($this.hasClass('active-locked'))
                            $this.removeClass('active-locked')
                    }
                })
            })
    }

    // Scrolly.
    $('.scrolly').scrolly({
        speed: 1000
    })

    /* yih scripts */

    $(document).ready(function() {
        // appNamespace.fadeUpCardsOnView();
        galleryModal.init()

        //  ---- particles.js config ---- */
        // particlesJS('particles-js', {
        //     particles: {
        //         number: {
        //             value: 60,
        //             density: {
        //                 enable: true,
        //                 value_area: 800
        //             }
        //         },
        //         color: {
        //             value: '#ffffff'
        //         },
        //         shape: {
        //             type: 'circle',
        //             stroke: {
        //                 width: 0,
        //                 color: '#000000'
        //             },
        //             polygon: {
        //                 nb_sides: 5
        //             },
        //             image: {
        //                 src: 'img/github.svg',
        //                 width: 100,
        //                 height: 100
        //             }
        //         },
        //         opacity: {
        //             value: 0.5,
        //             random: false,
        //             anim: {
        //                 enable: false,
        //                 speed: 1,
        //                 opacity_min: 0.1,
        //                 sync: false
        //             }
        //         },
        //         size: {
        //             value: 3,
        //             random: true,
        //             anim: {
        //                 enable: false,
        //                 speed: 40,
        //                 size_min: 0.1,
        //                 sync: false
        //             }
        //         },
        //         line_linked: {
        //             enable: true,
        //             distance: 150,
        //             color: '#ffffff',
        //             opacity: 0.4,
        //             width: 1
        //         },
        //         move: {
        //             enable: true,
        //             speed: 6,
        //             direction: 'none',
        //             random: false,
        //             straight: false,
        //             out_mode: 'out',
        //             bounce: false,
        //             attract: {
        //                 enable: false,
        //                 rotateX: 600,
        //                 rotateY: 1200
        //             }
        //         }
        //     },
        //     interactivity: {
        //         detect_on: 'canvas',
        //         events: {
        //             onhover: {
        //                 enable: true,
        //                 mode: 'grab'
        //             },
        //             onclick: {
        //                 enable: true,
        //                 mode: 'push'
        //             },
        //             resize: true
        //         },
        //         modes: {
        //             grab: {
        //                 distance: 140,
        //                 line_linked: {
        //                     opacity: 1
        //                 }
        //             },
        //             bubble: {
        //                 distance: 400,
        //                 size: 40,
        //                 duration: 2,
        //                 opacity: 8,
        //                 speed: 3
        //             },
        //             repulse: {
        //                 distance: 200,
        //                 duration: 0.4
        //             },
        //             push: {
        //                 particles_nb: 4
        //             },
        //             remove: {
        //                 particles_nb: 2
        //             }
        //         }
        //     },
        //     retina_detect: true
        // })

        // particles.js config 2 (copied from a site using source)
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#dcdcdc"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#dcdcdc"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: .2,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 1,
                        opacity_min: .1,
                        sync: !1
                    }
                },
                size: {
                    value: 3,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 40,
                        size_min: .1,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 150,
                    color: "#68d9b5",
                    opacity: .2,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 3,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "grab"
                    },
                    onclick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: .2
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: !0
        })
        // NAVIGATION MODULE
        ;
        (function() {

            var nav = document.querySelector('.js-main-nav');
            var nevMenuList = document.querySelector('.main-nav-list');

            if(!nav) throw new Error("No elements matched by " + this.selector);
            var navBtn = document.querySelector('.burger-menu-btn');

            //toggle burger menu animation and prevent scroll if menu is open
            $('.burger-menu-btn').click(function() {
                nav.classList.toggle('mobile-menu-open');
            })

            /*Toggle dropdown list*/
            /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/


            /* HANDLES THE TOGGLE NAV MENU ITEMS
              this handles hiding menu when clicked outside. Not essential currently because we're doing a full screen menu but just put it here in case I decide to change implementation
            */

            document.onclick = check;

            function check(e) {
                var target = (e && e.target) || (event && event.srcElement)

                //Nav Menu
                if (!checkParent(target, nav)) {
                    // click NOT on the menu
                    if (checkParent(target, navBtn)) {
                        // click on the link
                        if (nevMenuList.classList.contains('hidden')) {
                            nevMenuList.classList.remove('hidden')
                        } else {
                            nevMenuList.classList.add('hidden')
                        }
                    } else {
                        // click both outside link and outside menu, hide menu
                        nevMenuList.classList.add('hidden')
                    }
                }
            }

            function checkParent(t, elm) {
                while (t.parentNode) {
                    if (t == elm) {
                        return true
                    }
                    t = t.parentNode
                }
                return false
            }

            // HIDE THE DROP DOWN NAV MENU ON LINK CLICK
            nav.querySelectorAll('li').forEach(el => {
                el.addEventListener('click', e => {
                    nevMenuList.classList.add('hidden');

                    if(nav.classList.contains('mobile-menu-open')) {
                        nav.classList.remove("mobile-menu-open");
                    }

                })
            })
        })()
    })
})(jQuery)

var galleryModal = {
    DOM: {},

    init: function() {
        // cache dom
        this.DOM.container = $('.gallery-modal')
        this.DOM.content = $('.gallery-modal .content')
    },

    show: function(index) {
        this.DOM.container.popup({
            color: 'rgb(0, 0, 0)',
            // color: 'white',
            opacity: 0.95,
            transition: '0.3s',
            scrolllock: true,
            // blur: false,
            autoopen: true,

            closeelement: '.popover-close',
            // escape: false,

            onopen: function() {
                galleryModal.DOM.content.html(window.overlayData[index].content)
            }
        })
    }
}


// || STICKY NAV EFFECT - reusable by yih
function enableStickyNav($nav) {

    //get header(in this case #home) height -
    const hdr = $('#home').height();
    const stickyClassname = "alt";


    $(window).scroll(function () {
        if ($(this).scrollTop() > hdr) {
            $nav.addClass(stickyClassname);

        } else {
            $nav.removeClass(stickyClassname);
        }
    });
}


//todo: keep for now but no-scroll doesn't work for now
// everytime we resize to larger screen, remove the no-scroll class which is only relevant on small
//screens with the dropdown menu / hamburger menu style
// window.matchMedia('(min-width: 636px)').addListener( function() {
//     if(this.matches) {
//         document.body.classList.remove("no-scroll");
//     }
// })




/* !SPhere aniomatino */
// import jqueryTagcanvas from "https://cdn.skypack.dev/jquery-tagcanvas@2.9.0";


/*
 * ||Sphere animation
*/
$(document).ready(() => {

    if (!$('#myCanvas').tagcanvas({
        textFont: '"Arial",sans-serif',
        textColour: '#a5a5a5',
        weight: true,
        maxSpeed: 0.03,
        shuffleTags: true,
        shape: 'sphere',
        zoom: .8,
        noSelect: true,
        noMouse: true,
        pinchZoom: true,

        fadeIn: 5000,
        initial: [0.3, -0.1],
        depth: 1,
        lock: "xy", //prevents the cloud to react to the mouse

        minBrightness: 0,
        weightMode: "both",
        weight: true,

        shadow: "#fff",
        // shadowOffset: [1,1],
        textHeight: 24,

    })) {
        alert('x')
        // TagCanvas failed to load
        $('#myCanvasContainer').hide();

    }

});




