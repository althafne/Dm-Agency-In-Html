
 
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 150;
  
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  // Init On DOM Load
  document.addEventListener("DOMContentLoaded", init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector(".hero__heading__type__span");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }


  
  $(document).ready(function(){
  // Show Menu
  
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("left");
      });
    }
  };
  
  showMenu("hamburger", "menu");
  
  // Remove Menu
  
  const navLink = document.querySelectorAll(".header__link"),
    navMenu = document.getElementById("menu");
  
  function linkAction() {
    navMenu.classList.remove("left");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  // Active Link
  
  let mainNavLinks = document.querySelectorAll(".header__link");
 
  
  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY - 50;
  
    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);
  
      if (
        section.offsetTop <= fromTop + 55 &&
        section.offsetTop + section.offsetHeight > fromTop + 55
      ) {
        link.classList.add("current");
      } else {
        link.classList.remove("current");
      }
    });
  });
  
  
  // Progress-circle
  
    $(".progress__col2__box1").circleProgress({
      value: 0.8,
      size: 80,
  
      fill: {
        gradient: ["#f47514"],
      },
    });
  
    $(".progress__col2__box2").circleProgress({
      value: 0.85,
      size: 80,
      fill: {
        gradient: ["#f47514"],
      },
    });
  
    $(".progress__col2__box3").circleProgress({
      value: 0.95,
      size: 80,
      fill: {
        gradient: ["#f47514"],
      },
    });
  
  
    // Scroll to top

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".scroll").fadeIn();
      } else {
        $(".scroll").fadeOut();
      }
    });
    $(".scroll").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  
  
  // accordion
  $("#faq-accordion").accordion({
    collapsible: true,
    active: 0,
    heightStyle: "true",
    icons: false,
  });
  
  // owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1500: {
        items: 4,
      },
    },
  });
  
  // if (window.jQuery) {
  //   alert("Jquery loaded");
  // } else {
  //    alert("not loaded");// jQuery is not loaded
  // }
  
})

// header
window.onscroll = () => {
  const nav = document.getElementById("header");
  if (this.scrollY >= 150) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
};