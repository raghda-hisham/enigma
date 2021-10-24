
  import gsap from 'gsap';
  const closeNav = document.querySelector('.fa-times');
  const openNav = document.querySelector('.nav-icon-open');

 
  var tl = gsap.timeline();

  openNav.addEventListener('click' , function() {
    
    tl.to(".sidenav", {x: ' 0%', duration: 0.2});
    tl.to(".navlink1", {opacity: 1, duration: 0.1});
    tl.to(".navlink2", {opacity: 1, duration: 0.1});
    tl.to(".navlink3", {opacity: 1, duration: 0.1});
    tl.to(".navlink4", {opacity: 1, duration: 0.1});

    tl.play();
    // tl.ready();
    // tl.reverse();
    tl.resume();
  })

  closeNav.addEventListener('click' , function() {
    tl.reverse();
   
  })



  //nav blured

  window.addEventListener('scroll' , function() {
    let navbarheader = document.querySelector('nav');
    // let navbarheader = document.querySelector('');
    navbarheader.classList.toggle('navbarcolor' , window.scrollY > 0)
})

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  delay: 100,
});