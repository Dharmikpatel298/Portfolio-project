const navbar_open = document.querySelector(".header_nav_icon");
const navbar_close = document.querySelector(".fa-times");
const navbar = document.querySelector(".navbar_data");

// Navbar

const navbar_opening = () => {
  navbar.classList.toggle("show");
};
navbar_open.addEventListener("click", navbar_opening);

const navbar_closing = () => {
  navbar.classList.toggle("show");
};
navbar_close.addEventListener("click", navbar_closing);

// Counting animation
const animationDuration = 3000;
const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);
const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);

  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const runAnimations = () => {
  const countupEls = document.querySelectorAll(".count");
  countupEls.forEach(animateCountUp);
};
// runAnimations();

// SLIDER.JS

// LOGO slider
window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    // Mobile-first defaults
    slidesToShow: 2,
    slidesToScroll: 2,
    scrollLock: true,
    draggable: true,
    dots: ".dots",
    responsive: [
      {
        // screens lesser than >= 775px
        breakpoint: 0,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "2",
          slidesToScroll: "2",
          itemWidth: 140,
          duration: 1.5,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 500,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "3",
          slidesToScroll: "2",
          itemWidth: 140,
          duration: 1.5,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "4",
          slidesToScroll: "2",
          itemWidth: 150,
          duration: 1.5,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: "5",
          slidesToScroll: "2",
          itemWidth: 150,
          duration: 1.5,
        },
      },
    ],
  });
});

// TESTIMONIAL slider

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider1"), {
    // Mobile-first defaults
    slidesToShow: "1",
    slidesToScroll: "1",
    scrollLock: true,
    // draggable: true,
    dots: ".dots1",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        // screens lesser than >= 775px
        breakpoint: 0,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "1",
          slidesToScroll: "1",
          itemWidth: 200,
          duration: 1.5,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 500,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "1",
          slidesToScroll: "1",
          itemWidth: 140,
          duration: 1.5,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "1",
          slidesToScroll: "1",
          itemWidth: 140,
          duration: 1.5,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: "1",
          slidesToScroll: "1",
          itemWidth: 140,
          duration: 1.5,
        },
      },
    ],
  });
});


// Navbar JQuery
$(document).ready(function() {
	const nav = $('.header_text')
	nav.waypoint(function(direction) {
		if(direction == "down" && nav.offset > '95%'){
				$('div.header_nav_icon').css('background-color', 'rgba(0, 0, 0, 1)');
		}
		else{
				$('div.header_nav_icon').css('background-color', 'rgba(0, 0, 0, 0)');
		}
	});

  const countAnimation = $('.info_sub')
  countAnimation.waypoint(function(direction) {
		if(direction == "down" && nav.offset > '5%'){
				runAnimations()
		}
	});
});
