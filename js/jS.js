document.addEventListener("DOMContentLoaded", function () {
  // Ensure the HTML is fully loaded before accessing elements
  const section3 = document.getElementById('section3');
  const sec3Img = ['globe-hand', 'share-love', 'join-love', 'collect-money', 'collect-money'];
  const sec3h4 = ['Brighter Tomorrow', 'Giving Hearts', 'Impactful Giving', 'Love in Action', 'Compassion Collective'];
  const count = [1000, 1500, 2000, 2500, 3000];

  for (let i = 0; i < sec3Img.length; i++) {
    // You can remove the if statement; it's not needed.
    section3.innerHTML += `
    <div class="col-lg-2 col-sm-4 col-12 m-auto my-1 d-flex flex-row justify-content-center align-items-center bg-white" data-aos="slide-right" data-aos-duration="${count[i]}" >
    <img src="icon-svg/${sec3Img[i]}.svg" class="img-fluid m-2">
    <h4 class="fs-6">${sec3h4[i]}</h4>
  </div>
    `;
  }
});


const section4 = document.getElementById('section4');
const sec4icon = ['book-outline', 'fast-food-outline', 'medkit-outline'];
const sec4h4 = ['Education', 'Healthy Food', 'Treatment'];
const sec4color = ['danger', 'success', 'primary'];

const c4Div = document.createElement('div');
c4Div.classList.add("row", 'd-flex', 'justify-content-between');

sec4icon.forEach((icon, i) => {
  c4Div.innerHTML += `
    <div class="col-lg-3 col-sm-12 bg-white p-3 rounded-1 shadow my-2">
      <ion-icon name="${icon}" class="fs-5 bg-${sec4color[i]} rounded-circle p-2 text-white"></ion-icon>
      <h4 class="h5 text-capitalize">${sec4h4[i]}</h4>
      <p class="text-body-secondary fs-6">Our mission is to ensure that every child has access to healthy, nutritious meals regardless of their socio-economic status.</p>
      <a href="#" class="text-dark text-decoration-none d-block fs-6">Learn more <span class="colorCus fw-bold">></span></a>
    </div>
  `;
});
section4.appendChild(c4Div);

const section6 = document.getElementById('section6');
const sec6Img = ['team01', 'team02', 'team03', 'team04', 'team05', 'team06', 'team07', 'team08'];
const sec6icon = ['facebook', 'linkedin', 'instagram'];
const sec6h4 = ['Emily', 'Michael', 'Jennifer', 'Matthew', 'Sarah', 'John', 'William', 'Kevin'];

for (let i = 0; i < sec6Img.length; i++) {
  section6.innerHTML += `
    <div class="col-md-3 col-12 " data-aos="zoom-in-up" data-aos-duration="${i*1000}" >
      <div class="card rounded-0 border-0 position-relative overflow-hidden position-relative-c">
        <img src="images/${sec6Img[i]}.png" class="w-100 h-25 " >
        <div class="card-img-overlay bg-black fs-2 opacity-50 text-white d-flex flex-row justify-content-center align-items-center position-absolute-c">
          <a href="">
            <ion-icon name="logo-${sec6icon[0]}" class="p-1 border border-1 rounded-circle bg-white text-success "></ion-icon>
          </a>
          <a href="">
            <ion-icon name="logo-${sec6icon[1]}" class="p-1 border border-1 rounded-circle bg-white text-success mx-1"></ion-icon>
          </a>
          <a href="">
            <ion-icon name="logo-${sec6icon[2]}" class="p-1 border border-1 rounded-circle bg-white text-success "></ion-icon>
          </a>
        </div>
      </div>
      <a href="" class="text-decoration-none text-black fs-3 " role="button">${sec6h4[i]}</a>
    </div>`;
}

const section8 = document.getElementById('section8');

const sec8Img = ['upcoming-events01', 'upcoming-events02', 'upcoming-events03'];

for (let i = 0; i < sec8Img.length; i++) {
  section8.innerHTML+= `
    <div class="card col-md-4 col-12 border-0">
      <img src="images/${sec8Img[i]}.png" alt="" class="card-img">
      <div class="card-body">
        <a href="#" class="card-title h4 text-decoration-none hover-success">Annual Charity Walk for Kids</a>
        <p class="card-text fontSize my-2 text-body-secondary">On April 22nd, join us for our annual walk to raise money for Helpless kids. The event will take place at Central Park and will include a 5k walk, live music, and food trucks.</p>
        <div class="event-time text-body-secondary ">
          <p class="float-start">8:00 am - 5:00</p>
          <p class="float-end">Ontario, Canada</p>
        </div>
      </div>
    </div>`;
}


const slide=document.querySelector('.slide');
const itemslide=document.querySelector('.slide .slide-item');
const itemWidth=itemslide.offsetWidth;

let currslideitem=0;
let slideitem = 1;

function slideupdate(){
    let translateX= currslideitem * itemWidth; 
    slide.style.transform=`translateX(-${translateX}px)`
    console.log(slideitem)  
}

const right=function(){
    currslideitem += slideitem;
    if(currslideitem + slideitem > slide.children.length  ){
        currslideitem=0;
    }
    slideupdate();
}
setInterval(() => {
    right();
}, 2000);



var ul = document.querySelector(".navbar-nav");
const footernav = document.querySelector(".footer-nav");

// Get all <li> elements within the <ul>
var liElements = ul.querySelectorAll("li");

// Loop through the <li> elements and append clones to the footer
liElements.forEach(function (li) {
  // Clone the <li> element
  var liClone = li.cloneNode(true);
  
  // Remove and add classes to the cloned <li> element
  liClone.classList.remove("nav-item");
  liClone.classList.add('list-unstyled', 'py-2');
  
  // Get the <a> element within the cloned <li>
  var aElement = liClone.querySelector('a');
  
  // Remove and add classes to the cloned <a> element
  aElement.classList.remove('nav-link', 'active', 'p-3', 'text-capitalize');
  aElement.classList.add('fontSize', 'text-white-50', 'text-decoration-none', 'd-block', 'fs-6', 'link-light');
  
  // Append the clone to the footer
  footernav.appendChild(liClone);
});

const ionElement = document.getElementById("section6").children[0].children[0].children[1];
const aIcons = ionElement.querySelectorAll('a');
const addicon = document.getElementById("section9");

const divCreate = document.createElement('div');
divCreate.classList.add('fs-2','text-white', 'd-flex', 'flex-row', 'justify-content-start', 'align-items-center');


aIcons.forEach(anchor => {
  var aclone=anchor.cloneNode(true)
    aclone.classList.add('px-1')
    divCreate.appendChild(aclone,);
  });

addicon.appendChild(divCreate);

