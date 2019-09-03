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
  "action": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "offers": {
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
    "address" : "123 Way 456 Street<br><br>Somewhere, USA",
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

// Assigning the call to action text and image
document.querySelector(".aText h1").innerHTML = siteContent.action.h1;
document.querySelector(".aText button").innerHTML = siteContent.action.button;
document.querySelector("#cta-img").src = siteContent.action['img-src'];

// Assigning the navigation area and main logo
document.querySelectorAll(".content1 h4")[0].innerHTML = siteContent["offers"]["features-h4"];
document.querySelectorAll(".content1 h4")[1].innerHTML = siteContent["offers"]["about-h4"];
document.querySelectorAll(".content1 p")[0].innerHTML = siteContent["offers"]["features-content"];
document.querySelectorAll(".content1 p")[1].innerHTML = siteContent["offers"]["about-content"];

// Creating a nodeList and then converting them into an array using nav_items
let nav_items = Array.from(document.querySelectorAll("nav a"));

// Assigning values using forEach loops to each nav_item
nav_items.forEach((element, index) => {
  element.innerHTML = Object.values(siteContent.nav)[index];
})

// Applying the middle image
document.querySelector("#middle-img").src = siteContent["offers"]["middle-img-src"];

// Assigning the bottom navigation
document.querySelectorAll(".content2 h4")[0].innerHTML = siteContent["offers"]["services-h4"];
document.querySelectorAll(".content2 h4")[1].innerHTML = siteContent["offers"]["product-h4"];
document.querySelectorAll(".content2 h4")[2].innerHTML = siteContent["offers"]["vision-h4"];

 document.querySelectorAll(".content2 p")[0].innerHTML = siteContent["offers"]["services-content"];
document.querySelectorAll(".content2 p")[1].innerHTML = siteContent["offers"]["product-content"];
document.querySelectorAll(".content2 p")[2].innerHTML = siteContent["offers"]["vision-content"];

// Applying the contact information
document.querySelector(".contact h4").innerHTML = siteContent.contact["contact-h4"];

 for (let i=1; i<=3; i++){
  document.querySelectorAll(".contact p")[i-1].innerHTML = Object.values(siteContent["contact"])[i];
}

// Applying the footer
document.querySelector("footer p").innerHTML = siteContent.footer.copyright;

// Changing the header background color to green
nav_a = document.querySelectorAll('nav a');

 for (let i=0; i<nav_a.length; i++) {
  nav_a[i].style.color = 'green';
}

// Adding new navigation items to the navigation area
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const nav = document.querySelector('nav');

nav.prepend(a1);
nav.appendChild(a2);

nav.firstChild.innerHTML = "Landing";
nav.lastChild.innerHTML = "Leave";