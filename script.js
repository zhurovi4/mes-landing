const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});


  // Look for .hamburger
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".header_menu-list");

  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    navLinks.classList.toggle("active");
    // Do something else, like open/close menu
  });

  // Close Menu When a Link is Clicked
const navItems = document.querySelectorAll(".header_menu-list a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("is-active");
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));