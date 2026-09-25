/*==============MENU SHOW & HIDDEN =================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*==============MENU SHOW =================*/
/* VALIDATE IF CONSTANT EXISTS */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
/*==============MENU hidden =================*/
/* VALIDATE IF CONSTANT EXISTS */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*============== REMOVE MENU MOBILE =================*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu classe
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*============== CHANGE BACKGROUND HEADER =================*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (!header) return;

    window.scrollY >= 20
        ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/*============== SCROLL SECTIONS ACTIVE LINK =================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href="#' + sectionId + '"]');

        if (!sectionsClass) return;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*============== SCROLL ABOUT ANIMATION =================*/
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".text-gradient").forEach((span) => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease:'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    });
});
/*============== EMAIL JS INIT =================*/
emailjs.init('EpO4Z25w5J3zUb8C8');
/*============== DARK LIGHT THEME =================*/
window.addEventListener('DOMContentLoaded', () => {
    const togglebtn = document.getElementById('theme-toggle');

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            togglebtn.classList.remove ('ri-sun-line');
            togglebtn.classList.add ('ri-moon-line');
    } else {
            document.body.classList.remove('light-theme');
            togglebtn.classList.remove ('ri-moon-line');
            togglebtn.classList.add ('ri-sun-line');
        }

        localStorage.setItem('theme', theme);
}
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    togglebtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
        
    });
});

/*============== MIX IT UP FILTER PORTFOLIO =================*/

var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

/*============== active work =================*/

const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach((a)=> {
        a.classList.remove('active-work');
    });

    this.classList.add('active-work');
}

linkWork.forEach((a) => a . addEventListener('click', activeWork));

/*============== Email JS =================*/
const contactForm= document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactMessage = document.getElementById('contact-message'),
message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();
    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactMessage.value === '' 
    ) {
        message.textContent = 'Write all the input fields';

        setTimeout(() => {
            message.textContent = ''
        }, 3000);
    } else {
        emailjs.sendForm(
            'service_gz9f90u', 
            'template_cne9w7u', 
            '#contact-form',
            'EpO4Z25w5J3zUb8C8'
        )
        .then(
  () => {
    message.textContent = 'Message sent ✔'

    setTimeout(() => {
            message.textContent = ''
        }, 5000);
  },
  (error) => {
    alert('OOPs! SOMETHING WENT WRONG...', error);
  }
);

    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

/*============== SCROLL REVEAL ANIMATION =================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animations repeat
});

sr.reveal('.home-data');
sr.reveal('.home-img-wrapper', {delay: 500});
sr.reveal('.home-social', {delay: 600});
sr.reveal('.services-card, .mix' , {interval: 100});
sr.reveal('.skills-developer, .resume-left, .contact-group', {origin: 'left'});
sr.reveal('.skills-designer, .resume-right, .contact-form', {origin: 'right'});