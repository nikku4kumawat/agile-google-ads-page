/* =========================================================
   AGILE SOLUTIONS - GOOGLE ADS HERO JS
========================================================= */

(function () {
  "use strict";

  const form = document.getElementById("quoteForm");
  const whatsappNumber = "918005677079";

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!fullName || !email || !phone || !service) {
      alert("Please fill in your Name, Work Email, Phone Number and Select Service.");
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      alert("Please enter a valid work email address.");
      return;
    }

    const whatsappMessage =
      "Hello Agile Solutions, I want to discuss Google Ads services.%0A%0A" +
      "Name: " + encodeURIComponent(fullName) + "%0A" +
      "Email: " + encodeURIComponent(email) + "%0A" +
      "Phone: " + encodeURIComponent(phone) + "%0A" +
      "Service: " + encodeURIComponent(service) + "%0A" +
      "Message: " + encodeURIComponent(message || "I would like to discuss this service.");

    const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
})();







/* =========================================================
   GOOGLE ADS VIDEO SECTION
   UNIQUE JS VARIABLES
========================================================= */

const agvcVideo = document.getElementById("agvcVideo");
const agvcPlayBtn = document.getElementById("agvcPlayBtn");
const agvcVideoBox = document.querySelector(".agvc-video-box");

if (agvcVideo && agvcPlayBtn && agvcVideoBox) {

  /* =======================================================
     PLAY / PAUSE VIDEO
  ======================================================= */

  async function agvcToggleVideo() {
    try {

      if (agvcVideo.paused) {
        await agvcVideo.play();
      } else {
        agvcVideo.pause();
      }

    } catch (error) {

      console.error(
        "Google Ads video playback error:",
        error
      );

      agvcVideo.controls = true;
    }
  }

  /* =======================================================
     PLAY BUTTON CLICK
  ======================================================= */

  agvcPlayBtn.addEventListener(
    "click",
    function (event) {

      event.stopPropagation();

      agvcToggleVideo();

    }
  );

  /* =======================================================
     VIDEO CLICK
  ======================================================= */

  agvcVideo.addEventListener(
    "click",
    function () {

      agvcToggleVideo();

    }
  );

  /* =======================================================
     VIDEO PLAY
  ======================================================= */

  agvcVideo.addEventListener(
    "play",
    function () {

      agvcVideoBox.classList.add(
        "playing"
      );

    }
  );

  /* =======================================================
     VIDEO PAUSE
  ======================================================= */

  agvcVideo.addEventListener(
    "pause",
    function () {

      agvcVideoBox.classList.remove(
        "playing"
      );

    }
  );

  /* =======================================================
     VIDEO ENDED
  ======================================================= */

  agvcVideo.addEventListener(
    "ended",
    function () {

      agvcVideoBox.classList.remove(
        "playing"
      );

    }
  );

}



/* =========================================================
     Google Ads CTA Section start     
========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const phoneNumber = "+918005677079";
  const callButton = document.querySelector(".ag-google-ads-cta__button");

  if (callButton) {
    callButton.setAttribute("href", "tel:" + phoneNumber);
  }
});







/* =========================================================
   AGILE SOLUTIONS GOOGLE service  SECTION start     
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".google-ads-service").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("is-hovered");
        });
    });

    const cta = document.querySelector(".google-ads-button"),
          anchor = document.querySelector("#contact");

    if (cta && anchor) {
        cta.addEventListener("click", () => {
            anchor.setAttribute("data-clicked", "true");
        });
    }
});








/* =========================================================
   AGILE SOLUTIONS GOOGLE ADS - BENEFITS SECTION start     
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('[data-agadsbenefits-carousel]');
  const track = document.querySelector('[data-agadsbenefits-track]');
  const dots = [
    ...document.querySelectorAll('[data-agadsbenefits-dots] .agadsbenefits-dot')
  ];

  if (!carousel || !track || dots.length === 0) return;

  const TOTAL_SLIDES = 3;
  let index = 0;
  let timer = null;
  let touchStartX = 0;
  let touchEndX = 0;

  const isMobile = () => window.innerWidth <= 800;

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
  }

  function goTo(nextIndex, animate = true) {
    index = (nextIndex + TOTAL_SLIDES) % TOTAL_SLIDES;

    if (!isMobile()) {
      track.style.transition = 'none';
      track.style.transform = 'translate3d(0, 0, 0)';
      updateDots();
      return;
    }

    track.style.transition = animate
      ? 'transform 1.15s cubic-bezier(.22,.61,.36,1)'
      : 'none';

    track.style.transform =
      `translate3d(-${index * 100}%, 0, 0)`;

    updateDots();
  }

  function next() {
    if (!isMobile()) return;
    goTo(index + 1);
  }

  function startAutoScroll() {
    clearInterval(timer);

    if (isMobile()) {
      timer = setInterval(next, 6500);
    }
  }

  function stopAutoScroll() {
    clearInterval(timer);
    timer = null;
  }

  function resetForViewport() {
    if (isMobile()) {
      goTo(index, false);
      startAutoScroll();
    } else {
      stopAutoScroll();
      index = 0;
      track.style.transition = 'none';
      track.style.transform = 'translate3d(0, 0, 0)';
      updateDots();
    }
  }

  /* Pause autoplay while using the carousel with a mouse. */
  carousel.addEventListener('mouseenter', () => {
    if (isMobile()) stopAutoScroll();
  });

  carousel.addEventListener('mouseleave', () => {
    if (isMobile()) startAutoScroll();
  });

  /* Android + iPhone touch swipe */
  carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
    stopAutoScroll();
  }, { passive: true });

  carousel.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) > 45 && isMobile()) {
      if (distance < 0) {
        goTo(index + 1);
      } else {
        goTo(index - 1);
      }
    }

    startAutoScroll();
  }, { passive: true });

  /* Keep the carousel correct after device rotation/resizing. */
  let resizeTimer;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      resetForViewport();
    }, 150);
  });

  resetForViewport();
});





/* =========================================================
   REVIEWS SECTION JS
   - All 4 cards clickable -> CALL
   - Mobile: one card
   - Mobile auto-slide every 3 seconds
   - Mobile left/right arrows
   - Mobile touch swipe on Android + iPhone
   - Infinite looping
   - Auto-slide restarts after visibility/pageshow
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("reviewsSlider");
  const track = document.getElementById("reviewsTrack");
  const cards = Array.from(document.querySelectorAll(".review-card"));
  const prevButton = document.querySelector(".review-prev");
  const nextButton = document.querySelector(".review-next");

  if (!slider || !track || !cards.length) return;

  const MOBILE_BREAKPOINT = 767;
  const AUTO_SLIDE_TIME = 3000;

  /* =========================
     CALL NUMBER
     ========================= */
  const CALL_URL = "tel:+918005677079";

  let currentIndex = 0;
  let autoSlideTimer = null;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let isTouchMoving = false;
  let suppressClick = false;

  function isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  /* =========================
     CALL FUNCTION
     ========================= */
  function makeCall() {
    window.location.href = CALL_URL;
  }

  /* =========================
     MAKE ALL REVIEW CARDS
     CLICKABLE FOR CALL
     ========================= */
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      if (suppressClick) {
        suppressClick = false;
        return;
      }

      makeCall();
    });

    /* Keyboard accessibility */
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        makeCall();
      }
    });
  });

  /* =========================
     UPDATE SLIDER
     ========================= */
  function updateSlider(animate = true) {
    if (!isMobile()) {
      track.style.transition = "";
      track.style.transform = "translate3d(0, 0, 0)";
      currentIndex = 0;
      return;
    }

    track.style.transition = animate
      ? "transform 600ms cubic-bezier(.22, .61, .36, 1)"
      : "none";

    track.style.transform =
      "translate3d(" + (-currentIndex * 100) + "%, 0, 0)";
  }

  /* =========================
     GO TO SLIDE
     ========================= */
  function goToSlide(index, restartTimer = true) {
    if (!isMobile()) return;

    currentIndex = (index + cards.length) % cards.length;

    updateSlider(true);

    if (restartTimer) {
      restartAutoSlide();
    }
  }

  /* =========================
     NEXT SLIDE
     ========================= */
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  /* =========================
     PREVIOUS SLIDE
     ========================= */
  function previousSlide() {
    goToSlide(currentIndex - 1);
  }

  /* =========================
     STOP AUTO SLIDE
     ========================= */
  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  /* =========================
     START AUTO SLIDE
     ========================= */
  function startAutoSlide() {
    stopAutoSlide();

    if (!isMobile() || document.hidden) return;

    autoSlideTimer = setInterval(function () {
      nextSlide();
    }, AUTO_SLIDE_TIME);
  }

  /* =========================
     RESTART AUTO SLIDE
     ========================= */
  function restartAutoSlide() {
    startAutoSlide();
  }

  /* =========================
     LEFT ARROW
     ========================= */
  if (prevButton) {
    prevButton.addEventListener("click", function () {
      previousSlide();
    });
  }

  /* =========================
     RIGHT ARROW
     ========================= */
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      nextSlide();
    });
  }

  /* =========================================================
     TOUCH SWIPE
     Android + iPhone
     ========================================================= */

  slider.addEventListener(
    "touchstart",
    function (event) {
      if (!isMobile()) return;

      const touch = event.touches[0];

      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchStartTime = Date.now();

      isTouchMoving = false;
      suppressClick = false;

      stopAutoSlide();
    },
    { passive: true }
  );

  slider.addEventListener(
    "touchmove",
    function (event) {
      if (!isMobile() || !touchStartTime) return;

      const touch = event.touches[0];

      const diffX = touch.clientX - touchStartX;
      const diffY = touch.clientY - touchStartY;

      /* Horizontal swipe detect */
      if (
        Math.abs(diffX) > 10 &&
        Math.abs(diffX) > Math.abs(diffY)
      ) {
        isTouchMoving = true;
      }
    },
    { passive: true }
  );

  slider.addEventListener(
    "touchend",
    function (event) {
      if (!isMobile() || !touchStartTime) return;

      const touch = event.changedTouches[0];

      const diffX = touch.clientX - touchStartX;
      const diffY = touch.clientY - touchStartY;
      const duration = Date.now() - touchStartTime;

      const horizontalSwipe =
        Math.abs(diffX) >= 45 &&
        Math.abs(diffX) > Math.abs(diffY) * 1.15 &&
        duration <= 800;

      if (horizontalSwipe) {
        suppressClick = true;

        if (diffX < 0) {
          nextSlide();
        } else {
          previousSlide();
        }
      } else {
        restartAutoSlide();
      }

      touchStartX = 0;
      touchStartY = 0;
      touchStartTime = 0;
      isTouchMoving = false;
    },
    { passive: true }
  );

  /* =========================================================
     PREVENT ACCIDENTAL CALL AFTER SWIPE
     ========================================================= */

  slider.addEventListener(
    "click",
    function (event) {
      if (suppressClick) {
        event.preventDefault();
        event.stopPropagation();

        window.setTimeout(function () {
          suppressClick = false;
        }, 50);
      }
    },
    true
  );

  /* =========================================================
     PAUSE / RESTART
     ========================================================= */

  slider.addEventListener("mouseenter", function () {
    if (isMobile()) {
      stopAutoSlide();
    }
  });

  slider.addEventListener("mouseleave", function () {
    if (isMobile()) {
      restartAutoSlide();
    }
  });

  /* =========================================================
     PAGE VISIBILITY
     ========================================================= */

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopAutoSlide();
    } else {
      updateSlider(false);
      restartAutoSlide();
    }
  });

  /* =========================================================
     PAGE SHOW
     ========================================================= */

  window.addEventListener("pageshow", function () {
    updateSlider(false);
    restartAutoSlide();
  });

  /* =========================================================
     RESIZE
     ========================================================= */

  window.addEventListener("resize", function () {
    updateSlider(false);
    restartAutoSlide();
  });

  /* =========================================================
     INITIAL STATE
     ========================================================= */

  updateSlider(false);
  startAutoSlide();
});
