document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".menu-toggle").forEach(function (button) {
    const nav = document.getElementById(button.getAttribute("aria-controls"));
    if (!nav) return;
    function closeMenu() { button.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }
    button.addEventListener("click", function () {
      const opened = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!opened));
      nav.classList.toggle("is-open", !opened);
    });
    nav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
    document.addEventListener("click", function (event) { if (!button.contains(event.target) && !nav.contains(event.target)) closeMenu(); });
  });
});
