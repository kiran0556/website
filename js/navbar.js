document.addEventListener("DOMContentLoaded", async () => {

  // Load banner
  const bannerRes = await fetch("web_ribbon/banner.html");
  document.getElementById("banner").innerHTML = await bannerRes.text();

  // Load navbar
  const navRes = await fetch("navbar.html");
  document.getElementById("navbar").innerHTML = await navRes.text();

  initStickyNavbar();
});

function initStickyNavbar() {
  const navbar = document.querySelector(".navbar");
  const placeholder = document.getElementById("navbar-placeholder");
  const carousel = document.querySelector(".hero-carousel");

  const navbarHeight = navbar.offsetHeight;
  placeholder.style.height = navbarHeight + "px";

  navbar.classList.add("navbar-transparent");

  window.addEventListener("scroll", () => {
    const trigger = carousel.offsetHeight - navbarHeight;

    if (window.scrollY >= trigger) {
      navbar.classList.add("navbar-sticky");
      navbar.classList.remove("navbar-transparent");
    } else {
      navbar.classList.remove("navbar-sticky");
      navbar.classList.add("navbar-transparent");
    }
  });
}
