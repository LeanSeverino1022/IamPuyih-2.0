
function runLogoAnimation(){
  
  // ANIMATED LOGO
  const svgPath = document.querySelectorAll('path');

  anime({
    targets: ['rect.logo-border'],

    easing: 'easeInOutQuad',
    delay: 3000,
    duration: 1500,
    // direction: 'alternate',
    // loop: true, 
    opacity: 1,
    complete: function(){
           
      setTimeout(() => {
        $('body').removeClass('is-preload');
      }, 500);     
    }
  });


  anime({
    targets: ['#svg_25'],
    easing: 'easeInOutSine',

    duration: 700,
    strokeDashoffset: [anime.setDashoffset, 0],
  })

  // THE S
  anime({
    targets: ['#svg_28', '#svg_31'],

    easing: 'easeInOutSine',
    duration: 700,
    delay: 1000,
    strokeDashoffset: [anime.setDashoffset, 0],
  })

  const container = anime({
    targets: ['svg#my_logo'],
    rotate: [
      { value: -45, duration: 0, delay: 1100 },
      { value: 45, duration: 700 },
      { value: 0, duration: 700, delay: 1000 },
      {value: '1turn', duration: 1000, delay: 1200}
    ],
    // scaling start with large font and scale to 1 when done
    scale: [
      { value: 2, delay: 0, duration : 1 },
      { value: 1, delay: 4500, duration: 1000},       
    ],

    opacity: 1
   
    // loop: true,
    // opacity: .1, 
  });
}
