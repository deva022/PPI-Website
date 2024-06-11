const intro = document.querySelector(".video-container");
// const video = intro.querySelector("#myVideo");
const text = intro.querySelector("h1");

const controller = new ScrollMagic.Controller();

// let scene = new ScrollMagic.Scene({
//   duration: 620,
//   trigger: intro,
//   triggerHook: 0,
// })
//   .setPin(intro)
//   .addTo(controller);

const textAni = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene1 = new ScrollMagic.Scene({
  duration: 500,
  trigger: intro,
  triggerHook: 0.1,
})
  .setTween(textAni)
  .addTo(controller);

// let accamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", (e) => {
//   scrollpos = e.scrollPos / 100;
// });

// setInterval(() => {
//   delay += (scrollpos - delay) * accamount;
//   video.currentTime = delay;
// }, 41.6);
document.addEventListener('DOMContentLoaded', () => {
  const videoFramesContainer = document.getElementById('video-frames');
  const frameCount = 180; // Adjust based on the number of frames
  const framePathPrefix = 'media/frame/'; // Adjust based on your frame filenames
  const frameExtension = '.png'; // Adjust if your frames have a different extension
  const framesPerScroll = 5; // Number of frames to display per scroll step (Adjust this value as needed)

  // Preload frames
  for (let i = 1; i <= frameCount; i++) {
      const frame = new Image();
      frame.src = `${framePathPrefix}${i}${frameExtension}`;
      frame.classList.add('video-frame');
      videoFramesContainer.appendChild(frame);
  }

  // Function to sync frame display with scroll position
  const syncFramesWithScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      
      // Calculate the total number of frames passed based on scroll position
      const totalFramesPassed = Math.floor(scrollFraction * frameCount);

      // Adjust frame index based on framesPerScroll
      const currentFrameIndex = Math.min(frameCount - 1, totalFramesPassed * framesPerScroll);

      // Hide all frames
      const frames = videoFramesContainer.querySelectorAll('.video-frame');
      frames.forEach(frame => frame.classList.remove('active'));

      // Show current frame
      frames[currentFrameIndex].classList.add('active');
  };

  // Event listener for scrolling
  window.addEventListener('scroll', syncFramesWithScroll);
});



function reveal() {
  var reveals = document.querySelectorAll(".f1");
  // var vcon=document.querySelectorAll('.video-container');
  // var sticks=document.querySelectorAll('.f1');
  for (i = 0; i < reveals.length; i++) {
    // var windowheight=window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    // var revealpoint=1250;

    if (revealtop < 0) {
      reveals[i].classList.add("active");
      // vcon.classList.add('.active');
    } else {
      reveals[i].classList.remove("active");
      // vcon.classList.remove('.active');
    }
  }
}

function sticky() {
  var header = document.getElementById("navbar");
  // var sticky1 = header.offsetTop;
  var sticky1 = header.getBoundingClientRect().top;

  if (sticky1 <= 0) {
    if (!header.classList.contains("sticky")) {
      // header.style.transform='translateY(10px)';

      header.classList.add("sticky");
    }
  } else {
    //  header.style.transform='translateY(-10px)';

    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  reveal(), sticky();
};

document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-track');


  const cloneItems = () => {
      const items = Array.from(document.querySelectorAll('.slide'));
      items.forEach(item => {
          const clone = item.cloneNode(true);
          carouselInner.appendChild(clone);
      });
      
    const carousel = document.querySelector('.carousel-track');
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mouseup', dragEnd);
    carousel.addEventListener('mouseleave', dragEnd);
    carousel.addEventListener('mousemove', dragMove);

    carousel.addEventListener('touchstart', dragStart);
    carousel.addEventListener('touchend', dragEnd);
    carousel.addEventListener('touchmove', dragMove);

    function dragStart(event) {
        isDragging = true;
        startPosition = getPositionX(event);
        carousel.style.animationPlayState = 'paused';
    }

    function dragEnd() {
        isDragging = false;
        previousTranslate = currentTranslate;
        carousel.style.animationPlayState = 'running';
    }

    function dragMove(event) {
        if (!isDragging) return;
        const currentPosition = getPositionX(event);
        const deltaX = currentPosition - startPosition;
        currentTranslate = previousTranslate + deltaX;
        setTranslate(currentTranslate);
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function setTranslate(xPos) {
        carousel.style.transform = `translateX(${xPos}px)`;
    }
      
  };

  cloneItems(); // Clone items on load
});

document
  .getElementById("sidebar-active")
  .addEventListener("change", function () {
    var nav2 = document.querySelector(".nav-2");
    var nav = document.querySelector(".nav");
    if (this.checked) {
      document.querySelector(".open-sidebar-button").classList.add("clicked");
      document.querySelector(".close-sidebar-button").classList.add("clicked");
      document.querySelector(".overlay").classList.add("clicked");
      document.querySelector(".overlay").classList.add("clicked");

      nav2.classList.add("clicked");
      nav.classList.add("clicked");
      document.body.classList.add('no-scroll');
        
    } else {
      document
        .querySelector(".open-sidebar-button")
        .classList.remove("clicked");
      document
        .querySelector(".close-sidebar-button")
        .classList.remove("clicked");

      document.querySelector(".overlay").classList.remove("clicked");
      document.body.classList.remove('no-scroll');

      nav2.classList.remove("clicked");
      nav.classList.remove("clicked");
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    const fadeText = document.querySelector(".fade-right-left");
    const zoomText = document.querySelector(".zoom-in");
    const flipText = document.querySelector(".flip-left");

    // Optionally add a delay or sequence for the animations
    setTimeout(() => fadeText.classList.add("animate"), 0);
    setTimeout(() => zoomText.classList.add("animate"), 2000);
    setTimeout(() => flipText.classList.add("animate"), 4000);
});

  document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { element: document.getElementById('counter1'), endValue: 20, suffix: '' },
        { element: document.getElementById('counter2'), endValue: 500, suffix: '+' },
        { element: document.getElementById('counter3'), endValue: 8, suffix: '' },
        { element: document.getElementById('counter4'), endValue: 100, suffix: '%' }
    ];

    const duration = 1000; // Faster duration in milliseconds

    const animateCounter = (counter) => {
        const frameDuration = 1000 / 60; // Duration of one frame at 60fps
        const totalFrames = Math.round(duration / frameDuration);
        const startTime = performance.now();

        const update = () => {
            const elapsedTime = performance.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const value = Math.floor(progress * counter.endValue);

            counter.element.textContent = value + counter.suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    };

    const observerOptions = {
        threshold: 0
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Make the counter visible
                const counter = counters.find(c => c.element === entry.target.querySelector('.number'));
                animateCounter(counter);
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter.element.parentElement);
    });
});


