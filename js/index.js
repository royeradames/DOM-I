const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update the img src for the image code snipe
const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src'];

//Update the img src for the BODY
const bodyImg = document.querySelector('#middle-img');
bodyImg.src = siteContent['main-content']['middle-img-src'];

// add text content to header nav
const headerNav = document.querySelectorAll('header nav a');
headerNav.forEach((item, index) => item.textContent = siteContent['nav'][`nav-item-${index + 1}`]);

// add cta text
const ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = 'DOM IS AWESOME';
const ctabtn = document.querySelector('.cta-text button').textContent = 'Get Started';

// add main text
const mainTextH4 = document.querySelectorAll('.text-content h4');
const mainContentNames = ['features', 'about', 'services', 'product', 'vision'];
  //add text to h2 container text class 
mainTextH4.forEach((item, index) => item.textContent = siteContent['main-content'][`${mainContentNames[index]}-h4`])
// mainTextH4[0].textContent = siteContent['main-content']['features-h4'];
// mainTextH4[1].textContent = siteContent['main-content']['about-h4'];
// mainTextH4[2].textContent = siteContent['main-content']['services-h4'];
// mainTextH4[3].textContent = siteContent['main-content']['product-h4'];
// mainTextH4[4].textContent = siteContent['main-content']['vision-h4'];


  //add text to p container text class 
  const mainTextP = document.querySelectorAll('.text-content p');
const appendixForPContent = '-content';
  mainTextP.forEach((item, index) => item.textContent = siteContent['main-content'][`${mainContentNames[index]}${appendixForPContent}`])

//populate contact
const contactKeys = ['address', 'phone', 'email'];

const contactH4 = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

const contactData = siteContent['contact'];

  //add text to the contant fields
const contact = document.querySelectorAll('.contact p');
console.log(contact)
contact.forEach(
  function(item,index){ 
    console.log(item);
    item.textContent = contactData[contactKeys[index] ]
  });

//add text to footer p
const footerP = document.querySelector('footer p').textContent = siteContent['footer']['copyright'];


//stretches
//adding blue text and border to h1 heading
ctaH1.style.color = '#1F85DE'
ctaH1.style.border = '.1rem solid #1F85DE'
ctaH1.style.padding = '2rem'



