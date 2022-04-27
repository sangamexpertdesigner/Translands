var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".swiper_demo2", {
           slidesPerView: 3,
           spaceBetween: 30,
           slidesPerGroup: 3,
           loop: true,
           loopFillGroupWithBlank: true,
           pagination: {
             el: ".swiper-pagination",
             clickable: true,
           },
           navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
           },
           // Responsive breakpoints
                            breakpoints: {
                              // when window width is >= 320px
                              320: {
                                slidesPerView: 1,

                              },
                              // when window width is >= 575px
                              575: {
                                slidesPerView: 1,

                              },
                              // when window width is >= 480px
                              768: {
                                slidesPerView:2,

                              },
                              // when window width is >= 991px
                              992: {
                                slidesPerView: 3,

                              }
                            },
         });


         $(document).ready(function(){
           $(".toggle_img").click(function(){
             $("body").toggleClass("activeclass");
           });
         });


         var swiper = new Swiper(".mySwiper", {
                 slidesPerView: 3,
                 spaceBetween: 30,
                 slidesPerGroup: 3,
                 loop: true,
                 loopFillGroupWithBlank: true,
                 pagination: {
                   el: ".swiper-pagination",
                   clickable: true,
                 },
                 navigation: {
                   nextEl: ".swiper-button-next",
                   prevEl: ".swiper-button-prev",
                 },
               });










               (function($) {
  // target element for scroll
  var $link = $("a[href='#top']");
  var settings = {
    offset: 50 // hide position
  };
  var state = {
    isVisible: false,
    shouldVisible: false
  };
  // Handle toggle icon base on window.scrolltop
  function toggleControl () {
    var scrolltop = $(window).scrollTop();
    state.shouldVisible = (scrolltop >= settings.offset) ? true : false;
    if (state.shouldVisible && !state.isVisible){
      $link.slideDown('fast');
      state.isVisible = true;

    } else if (state.shouldVisible == false && state.isVisible){
      $link.slideUp('fast');
      state.isVisible = false;
    }
  }
  // Handle click event
  $link.click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  // Attach function to toggle scroll icon
  $(window).bind('scroll resize', function(e){
    toggleControl();
  });
})(window.jQuery);



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`)
  elem.style.setProperty('--y', `${state.y}px`)
  elem.style.setProperty('--width', `${state.width}px`)
  elem.style.setProperty('--height', `${state.height}px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)
}

document.querySelectorAll('.cursor').forEach(cursor => {
  let onElement

  const createState = e => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 40,
      height: 40,
      radius: '50%'
    }

    const computedState = {}

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }
  }

  document.addEventListener('mousemove', e => {
    const state = createState(e)
    updateProperties(cursor, state)
  })

  document.querySelectorAll('a, button').forEach(elem => {
    elem.addEventListener('mouseenter', () => (onElement = elem))
    elem.addEventListener('mouseleave', () => (onElement = undefined))
  })
})
