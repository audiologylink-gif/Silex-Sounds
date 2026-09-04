/* ============================================================
   SILEX SOUNDS
   Navigation + small UI behaviour
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");
  const year = document.querySelector("#year");


  /* ----------------------------------------------------------
     Footer year
     ---------------------------------------------------------- */

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ----------------------------------------------------------
     Mobile navigation
     ---------------------------------------------------------- */

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        navigation.classList.toggle("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close menu"
          : "Open menu"
      );

    });


    /* Close menu after selecting a link */

    navigation
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener("click", () => {

          navigation.classList.remove("is-open");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Open menu"
          );

        });

      });

  }

});
