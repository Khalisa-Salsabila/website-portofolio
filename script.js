/*-- MENU SHOW --*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*-- ACTIVE AND REMOVE MENU --*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active Link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // Remove menu
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*--- SCROOL REVEAL ANIMATION ---*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*--- SCROOL HOME ---*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*--- SCROOL ABOUT ---*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

/*--- SCROOL SKILLS ---*/
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 400 });

/*--- SCROOL ASSIGNMENT ---*/
sr.reveal(".assignment__img", { interval: 200 });

/*--- SCROOL ORGANIZATION ---*/
sr.reveal(".organization__img", { interval: 200 });

/*--- SCROOL CONTACT ---*/
sr.reveal(".contact__input", { interval: 200 });
