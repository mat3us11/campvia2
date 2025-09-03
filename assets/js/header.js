function initHeader() {
  const hamburguer = document.getElementById("hamburguer");
  const menuMobile = document.getElementById("menuMobile");

  if (!hamburguer || !menuMobile) return;

  const icon = hamburguer.querySelector("i");

  hamburguer.addEventListener("click", (e) => {
    e.stopPropagation();
    menuMobile.classList.toggle("show");
    hamburguer.classList.toggle("active");

    if (hamburguer.classList.contains("active")) {
      icon.className = "ph ph-x"; // ícone de fechar
    } else {
      icon.className = "ph ph-list"; // ícone de menu
    }
  });

  menuMobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuMobile.classList.remove("show");
      hamburguer.classList.remove("active");
      icon.className = "ph ph-list";
    });
  });

  document.addEventListener("click", (e) => {
    if (menuMobile.classList.contains("show") &&
        !menuMobile.contains(e.target) &&
        !hamburguer.contains(e.target)) {
      menuMobile.classList.remove("show");
      hamburguer.classList.remove("active");
      icon.className = "ph ph-list";
    }
  });
}
