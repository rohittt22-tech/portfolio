/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text , .skills__img',{delay: 400}); /* Added .about__text here */
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.education__item', { interval: 200 });







// ========= skill part reset animation =================

document.addEventListener("scroll", animateSkills);

function animateSkills() {
  const skillBars = document.querySelectorAll('.skills__bar');

  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();

    // Check if the bar is in the viewport
    if (rect.top <= window.innerHeight - 50 && rect.bottom >= 0) { // Adjust offset
      if (!bar.dataset.animated || bar.dataset.animated === "false") {
        bar.dataset.animated = "true"; // Mark as animated
        
        // Set width dynamically based on skill class
        if (bar.classList.contains("skills__html")) {
          bar.style.width = "95%";
        } else if (bar.classList.contains("skills__css")) {
          bar.style.width = "85%";
        } else if (bar.classList.contains("skills__js")) {
          bar.style.width = "65%";
        } else if (bar.classList.contains("skills__ux")) {
          bar.style.width = "85%";
        }
      }
    } else {
      // Reset animation when the bar exits the viewport
      if (bar.dataset.animated === "true") {
        bar.dataset.animated = "false"; // Mark as not animated
        bar.style.width = "0"; // Reset width
      }
    }
  });
}

// Run on page load for visible skills
window.addEventListener("DOMContentLoaded", animateSkills);







// ========= web designer part =================


const roleElement = document.getElementById("role");
const roles = ["Web Designer", "Web Developer", "Creative Thinker"];
let index = 0;

// Change role dynamically with animation timing
setInterval(() => {
  // Update the role text
  index = (index + 1) % roles.length; // Loop through the roles array
  roleElement.textContent = roles[index];
}, 2000); // Match interval with animation duration






	// //



  // Sticky Navbar
  // let header = document.querySelector('header');
  // let menu = document.querySelector('#menu-icon');
  // let navbar = document.querySelector('.navbar');
   
   
  // window.addEventListener('scroll', () => {
  //     header.classList.toggle('shadow', window.scrollY > 0);
  // });
   
  // menu.onclick = () => {
  //     navbar.classList.toggle('active');
  // }
  // window.onscroll = () => {
  //     navbar.classList.remove('active');
  // }
   
  // Dark Mode
  let darkmode = document.querySelector('#darkmode');
   
  darkmode.onclick = () => {
      if(darkmode.classList.contains('bx-moon')){
          darkmode.classList.replace('bx-moon','bx-sun');
          document.body.classList.add('active');
      }else{
          darkmode.classList.replace('bx-sun','bx-moon');
          document.body.classList.remove('active');
      }
  }