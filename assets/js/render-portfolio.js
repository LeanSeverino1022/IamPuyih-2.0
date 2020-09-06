/*
    by leandro Severino
*/

$(document).ready(function () {
    window.myPortfolio.renderWorks();
    window.myPortfolio.enableCardOverlayOnMobile();
});

window.USER_IS_USING_TOUCH_DEVICE = false;

try {
    document.createEvent("TouchEvent");
    window.USER_IS_USING_TOUCH_DEVICE = true
 }
 catch (e) {
    window.USER_IS_USING_TOUCH_DEVICE = false;
 }

if (typeof myPortfolio === 'undefined') {
    window.myPortfolio = {};
}



{
    const data = [
        {
            title: null,
            description:'ResultMaps is an application that helps teams and people to create clear roadmaps to track tasks and focus on results.',
            class: ["open-overlay"], //custom class
            img: 'images/gallery/rm.jpg',
            actionLinks: {
                // {[name of the button] : [link]}
                "Learn more" : "javascript:galleryModal.show(0);",
            }

        },
        {
            title: null,
            description: "EverThread is a visualization platform. I've helped the company develop tools that give customers the ability to customize products across categories in a virtual environment.",
            class: [], //custom class
            img: 'images/gallery/prod-visual.jpg',
            actionLinks: {
                "Learn more" : "./product-demo.html"
            }
        },
        {
            title: 'Interactive Tree Diagram',
            description:'visually represent data hierarchy in a tree-like structure. Features include switching orientation, zooming & panning, etc. ',
            class: [], //custom class
            img: 'images/gallery/tree.jpg',
            actionLinks: {
                 "View Demo" : "https://leanseverino1022.github.io/tree-diagram/"
            }
        },

        {
            title: 'Drag-to-scroll library',
            description:'Tiny Library to easily enable click and drag scrolling to any content. Scroll just like how you do it on a tablet or smartphone',
            class: [], //custom class
            img: 'images/gallery/dragtoscroll.png',
            actionLinks: {
                "View Online" : "https://leanseverino1022.github.io/dragToScroll/",
                "View source on Github" : "https://github.com/LeanSeverino1022/dragToScroll"
            }
        },
        {
            description:"Created a game with ImpactJS, a JavaScript Game Engine. I had to replace / remove the original assets becaue I cannot use them for my personal portfolio.",
            class: [], //custom class
            img: 'images/gallery/sinkem-game.jpg',
            overlayMsg: 'Note: This Game was created for desktop',
            actionLinks: {
                "Play Game" : "https://puyihsdumpsite.000webhostapp.com/game/index.html",
                "View source on Github" : "https://github.com/LeanSeverino1022/sink-Em/blob/master/README.markdown"
            }
        },
        {
            title: 'Search and Filter React Boilerplate',
            description:'Easy to edit template for search & filter React projects.',
            class: [], //custom class
            img: 'images/gallery/search-filter-react.png',
            actionLinks: {
                // {[name of the button] : [link]}
                "View Online" : "https://leanseverino1022.github.io/search-and-filter-with-react/",
                "View Source on Github" : "https://github.com/LeanSeverino1022/search-and-filter-with-react"
            }

        },

        // {
        //     title: 'freeCodeCamp Certifications',
        //     // description: 'Certificate curriculum should take approximately 300 hours to complete and includes 5 required projects.',
        //     description: '',
        //     class: [], //custom class
        //     img: 'images/gallery/fcc.jpg',
        //     actionLinks: {
        //         "Algorithms and Data Structures" : "https://www.freecodecamp.org/certification/leanseverino1022/javascript-algorithms-and-data-structures",
        //         'Responsive Web Design' : 'https://www.freecodecamp.org/certification/leanseverino1022/responsive-web-design'
        //     }
        // },

    ];

    window.overlayData = [{
        content: "<p><a target='_blank' class='yi-link txt-green' href='https://www.resultmaps.com/'>Resultmaps</a> is a peak performance platform. An application designed to help individuals, teams, and teams of teams. I'm a long-time member of the team and I have contributed to the development of different tools such as Gantt chart, kanban boards, etc. I also lead the development of the main mindmap / tree diagram feature. I'm mostly used to work on old and new Javascript-heavy projects and fix existing complex css issues.</p>",
    }]

    window.myPortfolio.renderWorks = function() {
        const works = data.map(function(item) {
            const $outerDiv = $('<li>').attr({
                class: 'portfolio-grid-item ' + `${item.class.length ? item.class.join(" "): ""}`,
            });

            const $card = $('<div>').attr({
                class: 'card'
            });

            const $cardImage = $('<div>')
                .attr({ class: 'card-image' })
                .css('background-image', `url(${item.img})`);
                // const $img = $('<img>').attr({
            //     alt: 'github-ss',
            //     src: item.img
            // });

            const $cardContent = $('<div>').attr({ class: 'card-desc' });
            const $contentTitle = $('<span>')
                .attr({ class: 'card-title' })
                .text(item.title);
            const $cardDesc = $('<p>').text(item.description);

            console.log(item.description);

            // text(item.description);
            const $cardOverlay = `
                <div class="card-overlay">
                    <div class="wrapper">
                    ${ item.overlayMsg ? `<p>${item.overlayMsg}</p>`: '' }


                    ${Object.keys(item.actionLinks).map(
                        key =>
                            '<a target="_blank" href="'+item.actionLinks[key]+'" class="card-overlay-action">'+ key + '</a>'
                        ).join('')
                    }
                    </div>
                </div>`;

            $card.append($cardImage.append($cardOverlay));

            $card.append(
                $cardContent.append($contentTitle, $cardDesc));


            // return card. 1 card = 1 project
            return $outerDiv.append($card);
        });

        $('.portfolio-grid').append(works);


        $( document ).trigger("galleryHasRendered");
    };
    /* end window.myPortfolio.renderWorks */
}


// TODO: not used yet
myPortfolio.fadeUpCardsOnView = function() {

    $(window).scroll(function () {


        let wS = $(window).scrollTop(),
            wH = $(window).height();

            $(".exp_card, .github-card").each(function () {

            let hT = $(this).offset().top, //offset coordinates relative to the document.
                hH = $(this).outerHeight() / 2; /*divide by 2 to load element once 25% of the element is in viewport*/

            if (wS > (hT + hH - wH)) {

                $(this).css('visibility', 'visible');
                $(this).addClass('animated fadeInUp');
            }

        });
    });
}

myPortfolio.enableCardOverlayOnMobile = function(){

    if(window.USER_IS_USING_TOUCH_DEVICE) {
        //hide it by default
        $('.card-overlay').hide();

        $('.card').on('click', function(evt){
            $('.card-overlay').hide();
            $('.card-overlay', this).show();
        })
    }
}


$(document).on('galleryHasRendered', function(e){
    // for overlay triggers, no need to open new window
    document.querySelectorAll('.open-overlay .card-overlay-action').forEach( el => {el.target = "_self"; });
})