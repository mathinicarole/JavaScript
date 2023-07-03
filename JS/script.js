// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header navbar a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form' , { origin:
'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left'}) ;
ScrollReveal().reveal('.home-content p, .about-content',{ origin:'right'}) ;

// typedjs
// const typed = new Typed('.multiple-text' ,{
//   strings :['Frontend Developer' ,'UI/UX Designer', 'Graphical Designer'],
//   typeSpeed :100,
//   backSpeed :100,
//   backDelay:1000,
//   loop: true
// });


// header sticky
window.addEventListener("scroll", function(){
  var header= document.querySelector("header");
  header.classList.toggle("sticky" , window.scrollY >0);
})
// common reveal options to create reveal animations
ScrollReveal({
  // reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// traget elements, and specify options to create reveal animations
ScrollReveal().reveal(".main-title, .second-title, .info-title", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".sec-01 .image,.sec-04 .image, .info", {
  delay: 600,
  origin: "bottom",
});
ScrollReveal().reveal(".text-box", { delay: 700, origin: "right" });
ScrollReveal().reveal(".media-icons i", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".sec-02 .image, .sec-03 .image", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".media-info li", {
  delay: 500,
  origin: "left",
  interval: 200,
});
