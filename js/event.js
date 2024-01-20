const section8 = document.getElementById('section8');

const sec8Img = ['upcoming-events01', 'upcoming-events02', 'upcoming-events03'];

for (let i = 0; i < sec8Img.length; i++) {
  section8.innerHTML+= `
    <div class="card col-md-4 col-12 border-0 ">
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

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  console.log(startX)
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();

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
  liClone.classList.add('list-unstyled',);
  
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
