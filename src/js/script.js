document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
      anchors: ['section_1', 'section_2', 'section_3', 'section_4'],
      autoScrolling: false,
      scrollHorizontally: true,
      scrollOverflow: true,
      fitToSection: false,
      showCredits: false,
      scrollingSpeed: 1000,
      easingcss3: 'cubic-bezier(0.5, 1, 1, 1)',
      onLeave: function(origin, destination, direction) {
        const headerText = document.querySelectorAll('.header-txt h1');
        if (destination.index === 1 || destination.index === 2 || destination.index === 3) {
            // Sections 2, 3, 4
            headerText.forEach(element => {
                element.style.color = '#fff'; // Change txt color white
            });
        } else {
            // Section 1
            headerText.forEach(element => {
                element.style.color = '#111'; // Change txt color black
            });
        }
    }
  });
  
  AOS.init({
    once: false,
    offset: 0,
  });
});
$(document).on('click', '#about-link', function(){
  fullpage_api.moveTo('section_2', 1);
});
$(document).on('click', '#work-link', function(){
  fullpage_api.moveTo('section_3', 1);
});
$(document).on('click', '#contact-link', function(){
  fullpage_api.moveTo('section_2', 1);
});


