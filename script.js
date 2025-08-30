// Navbar hide on scroll
let navbar = document.querySelector(".navbar");
let scrollTimer;

window.addEventListener("scroll", () => {
  navbar.classList.add("hide");
  navbar.classList.remove("show");

  clearTimeout(scrollTimer);

  scrollTimer = setTimeout(() => {
    navbar.classList.add("show");
    navbar.classList.remove("hide");
  }, 300);
});
const menuItems = document.querySelectorAll("#menu li");
const indicator = document.querySelector(".indicator");



// loder aniamtion-->
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
      loader.classList.add("hidden");   // hide loader
      document.body.classList.add("loaded"); // trigger fade-in
    }, 2500); // wait for loader
  });

// loder aniamtion End-->







// Collect sections based on menu links
const sections = Array.from(menuItems).map(item => {
  const id = item.querySelector("a").getAttribute("href").substring(1);
  return document.getElementById(id);
});

function updateIndicator(el) {
  const left = el.offsetLeft;
  const width = el.offsetWidth;

  indicator.style.left = `${left}px`;
  indicator.style.width = `${width}px`;

  // Update active class
  menuItems.forEach((item) => item.classList.remove("active"));
  el.classList.add("active");
}

// On load
window.addEventListener("DOMContentLoaded", () => {
  const active = document.querySelector("#menu .active");
  if (active) updateIndicator(active);
});

// Menu item click
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    updateIndicator(item);
  });
});

// ✅ Highlight while scrolling
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        const activeItem = document.querySelector(`#menu li a[href="#${id}"]`).parentElement;
        updateIndicator(activeItem);
      }
    });
  },
  { threshold: 0.6 } // 60% visible = active
);

// observe all sections that exist
sections.forEach((sec) => {
  if (sec) observer.observe(sec);
});

// Background animation with mouse
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.setProperty("--x", `${x}%`);
  document.body.style.setProperty("--y", `${y}%`);
});

// Skills animation
function animateBars() {
  document.querySelector(".html").classList.add("animate-html");
  document.querySelector(".css").classList.add("animate-css");
  document.querySelector(".js").classList.add("animate-js");
  document.querySelector(".linux").classList.add("animate-linux");
  document.querySelector(".webdesign").classList.add("animate-webdesign");
  document.querySelector(".webdev").classList.add("animate-webdev");
  document.querySelector(".graphic").classList.add("animate-graphic");
  document.querySelector(".seo").classList.add("animate-seo");
  document.querySelector(".networking").classList.add("animate-networking");
}

// Smooth scroll
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Hamburger toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});


// ------------------------------------------
function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("name").value,  // <- here is a mistake
    message : document.getElementById("message").value,
  }

  emailjs.send(" service_x1a2b3c","template_4lb3fin".parms).then(alert("Email Sent !!"))
}


// =---------------------------------------

