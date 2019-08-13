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
    let data = [
        {
            title: 'Search and Filter React Boilerplate',
            description:'Easy to edit template for search & filter React projects.',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/search-filter-react.png',
            skills: ['react', 'html', 'css', 'javascript'],
            actionLinks: { 
                // {[name of the button] : [link]} 
                "View Online" : "https://leanseverino1022.github.io/search-and-filter-with-react/",
                "View Source on Github" : "https://github.com/LeanSeverino1022/search-and-filter-with-react"
            }
            
        },
        {
            title: 'Drag-to-scroll library',
            description:'Tiny Library to easily enable click and drag scrolling to any content. Scroll just like how you do it on a tablet or smartphone',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/dragtoscroll.png',
            actionLinks: {                 
                "View Online" : "https://leanseverino1022.github.io/dragToScroll/",
                "View source on Github" : "https://github.com/LeanSeverino1022/dragToScroll"
            }
        },
        {
            title: 'Sink-em Game',
            description:'Game created with ImpactJS, a JavaScript Game Engine ',
            url: 'https://css-tricks.com/video-screencasts/',
            img: '../images/gallery/sinkem-game.jpg',
            actionLinks: {                 
                "Play Game" : "https://puyihsdumpsite.000webhostapp.com/game/index.html",
                "View source on Github" : "https://github.com/LeanSeverino1022/sink-Em/blob/master/README.markdown"
            }
        },
        {
            title: 'Live Product Customizer',
            description:'This feature allows customers to customize a product with a live preview. Used in multiple projects(e.g., living-room, clothing, and kitchen).',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/custom-clothes.png',
            actionLinks: { 
                 "View Demo" : "../pages/product-demo.html"
            }
        },
        {
            title: 'JavaScript Algorithms and Data Structures Certification',
            // description: 'Certificate curriculum should take approximately 300 hours to complete and includes 5 required projects.',
            description: '',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/fcc.jpg',
            actionLinks: { 
                "View verified certificate" : "https://www.freecodecamp.org/certification/leanseverino1022/javascript-algorithms-and-data-structures"              
            }
        },
        {
            title: 'Responsive Web Design Certification',
            description: '',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/prod-visual.jpg',
            actionLinks: { 
                "View verified certificate" : "https://www.freecodecamp.org/certification/leanseverino1022/responsive-web-design"
            }
        } 
    ];

    window.myPortfolio.renderWorks = function() {
        const works = data.map(function(item) {
            const $outerDiv = $('<li>').attr({
                class: 'portfolio-grid-item'
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
                    ${Object.keys(item.actionLinks).map(
                        key =>
                            '<a target="_blank" href="'+item.actionLinks[key]+'" class="card-overlay-action">'+ key + '</a>'
                        ).join('')
                    }
                    </div>                 
                </div>`;

            $card.append($cardImage);
            $card.append(
                $cardContent.append($contentTitle, $cardDesc));
            $card.append($cardOverlay);

            // return card. 1 card = 1 project
            return $outerDiv.append($card);
        });

        $('.portfolio-grid').append(works);
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
      
        $('.card').on('click', function(evt){
            $('.card-overlay').hide();
            $('.card-overlay', this).show();
        })
    }    
}