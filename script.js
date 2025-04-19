// Smooth scroll to section
const links = document.querySelectorAll("nav a");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });
  });
}

// Scroll reveal animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
