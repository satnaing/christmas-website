/* ========== SHOW MENU ========== */
const nav = document.getElementById("nav-menu");
const toggle = document.getElementById("nav-toggle");

const showMenu = () => {
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu();

// When the user clicks anywhere outside of the menu, close it
window.onclick = function (event) {
  if (event.target != toggle.firstElementChild) {
    nav.classList.remove("show-menu");
  }
};

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ========== SCROLL SELECTIONS ACTIVE LINK ========== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* ========== CHANGE BACKGROUND HEADER ========== */
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ========== SHOW SCROLL TOP ========== */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "bx-toggle-left"
    : "bx-toggle-right";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* ========== SCROLL REVEAL ANIMATION ========== */
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img, 
  .decoration__data, .accessory__content, .footer__content`,
  {
    origin: "top",
    interval: 200,
  }
);

sr.reveal(`.share__img, .send__content`, {
  origin: "left",
});

sr.reveal(`.share__data, .send__img`, {
  origin: "right",
});

/* ========== CURSOR TRAIL ========== */
// const cursor = document.querySelector(".cursor");
// const evt = new Event("mousemove");
// document.addEventListener("mousemove", (e) => {
//   cursor.setAttribute(
//     `style`,
//     `top: calc(${e.pageY}px - 1rem); left: calc(${e.pageX}px - 1rem);`
//   );
// });
// document.addEventListener("scroll", (e) => {
//   cursor.setAttribute("style", `opacity: 0;`);
// });
// document.addEventListener("mouseleave", () => {
//   cursor.setAttribute("style", `display: none;`);
// });

/* ========== CURSOR DOT ========== */
// const cursor = curDot();
// cursor(
//   {
//     zIndex: 100,
//     diameter: 80,
//     borderWidth: 1,
//     borderColor: "#000",
//     easing: 4,
//     // background: "#000",
//   }
// );

/* ========== CURSOR GSAP ========== */
let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  gsap.to(mouseCursor, 0.4, {
    x: e.clientX,
    y: e.clientY,
  });
}
