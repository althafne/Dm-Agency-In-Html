"use strict";var _this2=void 0;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var TypeWriter=function(){function e(t,i){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;_classCallCheck(this,e),this.txtElement=t,this.words=i,this.txt="",this.wordIndex=0,this.wait=parseInt(s,10),this.type(),this.isDeleting=!1}return _createClass(e,[{key:"type",value:function(){var e=this,t=this.wordIndex%this.words.length,i=this.words[t];this.isDeleting?this.txt=i.substring(0,this.txt.length-1):this.txt=i.substring(0,this.txt.length+1),this.txtElement.innerHTML='<span class="txt">'.concat(this.txt,"</span>");var s=150;this.isDeleting&&(s/=2),this.isDeleting||this.txt!==i?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,s=500):(s=this.wait,this.isDeleting=!0),setTimeout((function(){return e.type()}),s)}}]),e}();function init(){var e=document.querySelector(".hero__heading__type__span"),t=JSON.parse(e.getAttribute("data-words")),i=e.getAttribute("data-wait");new TypeWriter(e,t,i)}document.addEventListener("DOMContentLoaded",init),$(document).ready((function(){var e,t,i,s;e="hamburger",t="menu",i=document.getElementById(e),s=document.getElementById(t),i&&s&&i.addEventListener("click",(function(){s.classList.toggle("left")}));var n=document.querySelectorAll(".header__link"),r=document.getElementById("menu");function o(){r.classList.remove("left")}n.forEach((function(e){return e.addEventListener("click",o)}));var l=document.querySelectorAll(".header__link");window.addEventListener("scroll",(function(e){var t=window.scrollY-50;l.forEach((function(e){var i=document.querySelector(e.hash);i.offsetTop<=t+55&&i.offsetTop+i.offsetHeight>t+55?e.classList.add("current"):e.classList.remove("current")}))})),$(".progress__col2__box1").circleProgress({value:.8,size:80,fill:{gradient:["#f47514"]}}),$(".progress__col2__box2").circleProgress({value:.85,size:80,fill:{gradient:["#f47514"]}}),$(".progress__col2__box3").circleProgress({value:.95,size:80,fill:{gradient:["#f47514"]}}),$(window).scroll((function(){$(this).scrollTop()>100?$(".scroll").fadeIn():$(".scroll").fadeOut()})),$(".scroll").on("click",(function(){return $("html,body").animate({scrollTop:0},600),!1})),$("#faq-accordion").accordion({collapsible:!0,active:0,heightStyle:"true",icons:!1}),$(".owl-carousel").owlCarousel({loop:!0,margin:10,autoplay:!0,autoplayTimeout:2500,dots:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:4},1500:{items:4}}})})),window.onscroll=function(){var e=document.getElementById("header");_this2.scrollY>=150?e.classList.add("scroll-header"):e.classList.remove("scroll-header")};
//# sourceMappingURL=all.js.map
