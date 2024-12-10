file:///c%3A/udacity/Landing%20Page/js/app.js {"mtime":1733691183817,"ctime":1733085095788,"size":3782,"etag":"3dei9ip6b3t0","orphaned":false,"typeId":""}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navList = document.querySelectorAll('section h2');
    const ulList = document.querySelector('.navItems');
    // Create navigation unordered list
    const idS = [];
    sections.forEach(section => idS.push(section.id));

    for (let i = 0; i < navList.length; i++) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${idS[i]}">${navList[i].textContent}</a>`;
      ulList.appendChild(li);
    }
    // drop-down hamburger menu btn clicking
    const hamburgerMenu= document.querySelector('.respDiv');
    const navMenu= document.querySelector('.navItems');
    hamburgerMenu.addEventListener('click', ()=>{
        hamburgerMenu.classList.toggle('activate');
        navMenu.classList.toggle('activate');
    })
    const navLink= document.querySelectorAll('.navItems a');
    navLink.forEach(link=> 
      link.addEventListener('click', ()=>{
        hamburgerMenu.classList.toggle('activate');
        navMenu.classList.toggle('activate'); 
      }))   
    // Function to add sections & update active nav item and section background based on scroll position
    const navItems = document.querySelectorAll('.navItems li');
    function updateSections() {
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          section.classList.add('show');
          let bgImg = `url(assets/${section.id}.jpg)`;
          section.style.backgroundImage = bgImg;
          navItems.forEach(item => item.classList.remove('glitter-text'));
          navItems[i].classList.add('glitter-text');
        } else {
          section.classList.remove('show');
        }
      });
    }
window.addEventListener('scroll', (e)=>{
  e.preventDefault();
  updateSections();
})
  setTimeout(() => {
  updateSections();
  }, 50 )
  });
//hide navigation bar when the pointer out
  const header = document.querySelector('header');
  const navBar=document.querySelector('nav');
  header.addEventListener('pointerover', () => {
    header.style.opacity = '1';
    navBar.style.opacity='1';
  });

  header.addEventListener('pointerout', () => {
    header.style.opacity = '0';
  });
// creating footer with document fragment
const footerList=document.createDocumentFragment();
const footerItems=[
            `   <a href="https://www.google.com/maps">
                    <i class="fa-solid fa-location-dot"></i> Location
                </a>`,
                `<a href="https://www.gmail.com">  
                    <i class="fa-solid fa-envelope"></i> E-mail
                </a>`,
            `   <i class="fa-solid fa-phone"></i> `]
const footerNav=document.createElement('footer');
footerNav.classList.add('ftr-prop', 'ftr-flex')
 for (const item of footerItems){
    const div=document.createElement('div');
    div.innerHTML= item;
    div.classList.add('item-ftr');
    footerNav.appendChild(div);
 }
footerList.appendChild(footerNav);
document.body.appendChild(footerList);
// go to top button 
const toUp = document.querySelector('.toUp');
window.addEventListener('scroll', function() {
    if (window.scrollY < 30) {
        toUp.style.visibility = 'hidden';
        toUp.style.opacity = '0';
    } else {
        toUp.style.visibility = 'visible';
        toUp.style.opacity = '1';
    }
});
const home = document.querySelector("#section-1");
 toUp.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({ top: home.offsetTop, behavior: 'smooth' })});
