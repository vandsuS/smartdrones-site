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