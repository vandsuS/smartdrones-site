const elementos = document.querySelectorAll(
    ".servico-card, .portfolio-item, .diferencial, .servicos-topo, .portfolio-topo"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("aparecer");

            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {

    elemento.classList.add("animar");

    observer.observe(elemento);

});
/* MENU AO ROLAR */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("menu-rolagem");

    } else {

        header.classList.remove("menu-rolagem");

    }

});
/* =========================================
   MENU MOBILE - SMARTDRONES
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");
const linksMenu = document.querySelectorAll("#menu-principal a");

if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener("click", () => {

        const aberto = menuPrincipal.classList.toggle("menu-aberto");

        menuToggle.classList.toggle("ativo");

        menuToggle.setAttribute("aria-expanded", aberto);

    });


    /* Fecha o menu ao clicar em um link */

    linksMenu.forEach((link) => {

        link.addEventListener("click", () => {

            menuPrincipal.classList.remove("menu-aberto");
            menuToggle.classList.remove("ativo");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}
/* =========================================
   GOOGLE ANALYTICS - CLIQUES IMPORTANTES
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // WHATSAPP
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
        link.addEventListener("click", function () {

            if (typeof gtag === "function") {
                gtag("event", "click_whatsapp", {
                    link_text: link.innerText.trim(),
                    link_url: link.href
                });
            }

        });
    });


    // INSTAGRAM
    document.querySelectorAll('a[href*="instagram.com"]').forEach(function (link) {
        link.addEventListener("click", function () {

            if (typeof gtag === "function") {
                gtag("event", "click_instagram", {
                    link_text: link.innerText.trim(),
                    link_url: link.href
                });
            }

        });
    });


    // BOTÃO PRINCIPAL DE ORÇAMENTO
    document.querySelectorAll(".botao-principal").forEach(function (link) {
        link.addEventListener("click", function () {

            if (typeof gtag === "function") {
                gtag("event", "click_orcamento", {
                    local: "hero"
                });
            }

        });
    });

});