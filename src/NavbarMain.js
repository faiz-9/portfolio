function NavbarMain() {
  const aboutDiv = document.querySelector("#skills");
  const portfolioDiv = document.querySelector("#projects");
  const contactDiv = document.querySelector("#contact");

  let home = document.querySelector(".f-home");
  let about = document.querySelector(".f-skills");
  let portfolio = document.querySelector(".f-projects");
  let contact = document.querySelector(".f-contact");

  if (window.matchMedia("(max-width: 700px)").matches) {
    home = document.querySelector(".small-home");
    about = document.querySelector(".small-skills");
    portfolio = document.querySelector(".small-projects");
    contact = document.querySelector(".small-contact");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY < aboutDiv.offsetTop) {
      home.classList.add("active");
      if (about.classList.contains("active")) {
        about.classList.remove("active");
      }
      if (portfolio.classList.contains("active")) {
        portfolio.classList.remove("active");
      }
      if (contact.classList.contains("active")) {
        contact.classList.remove("active");
      }
    } else if (
      window.scrollY > aboutDiv.offsetTop &&
      window.scrollY <= portfolioDiv.offsetTop
    ) {
      about.classList.add("active");
      if (home.classList.contains("active")) {
        home.classList.remove("active");
      }
      if (portfolio.classList.contains("active")) {
        portfolio.classList.remove("active");
      }
      if (contact.classList.contains("active")) {
        contact.classList.remove("active");
      }
    } else if (
      window.scrollY > portfolioDiv.offsetTop &&
      window.scrollY < contactDiv.offsetTop
    ) {
      portfolio.classList.add("active");
      if (home.classList.contains("active")) {
        home.classList.remove("active");
      }
      if (about.classList.contains("active")) {
        about.classList.remove("active");
      }
      if (contact.classList.contains("active")) {
        contact.classList.remove("active");
      }
    } else if (window.scrollY > contactDiv.offsetTop) {
      contact.classList.add("active");
      if (about.classList.contains("active")) {
        about.classList.remove("active");
      }
      if (portfolio.classList.contains("active")) {
        portfolio.classList.remove("active");
      }
      if (home.classList.contains("active")) {
        home.classList.remove("active");
      }
    }
  });
}

export default NavbarMain;
