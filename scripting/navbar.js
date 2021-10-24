
  // const contactform = document.querySelector('.contact-form') 
  // const contactList = document.querySelectorAll('.about-mission-list li') 
  // const contactUlist = document.querySelector('.about-mission-list') 


  // contactList.forEach(ele => {
  //   ele.addEventListener('click' , function() {
  //     contactUlist.style.visibility = "hidden" ;

  //     contactform.style.visibility = "visible" ;
  //     contactform.style.opacity = 1 ;

  //     contactUlist.style.height = "0" ;

  //     // contactUlist.style.display = "none" ;
      
  //   })
  // })


//preloader


  
//Get the button
var mybutton = document.querySelector(".backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

 
mybutton.addEventListener("click" , function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
})


  

