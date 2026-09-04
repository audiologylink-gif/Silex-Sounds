const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".navigation");

menu?.addEventListener("click", () => {
  if (!links) return;

  const open = links.classList.toggle("is-open");

  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    links?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}