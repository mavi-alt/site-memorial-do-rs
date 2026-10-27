// Função da barra de pesquisa

const icon = document.querySelector('.icon');
const search = document.querySelector('.input-wrapper');
icon.onclick = function() {
    search.classList.toggle('active');
}

// Função do menu hambúrguer

const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");

hamburgerBtn.classList.add("hamburger-btn-js-enabled");

function closeMenu() {
    hamburgerBtn.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menu.classList.add("menu-closed");
};

closeMenu();

hamburgerBtn.addEventListener("click", function(e){
    
    let expanded = this.getAttribute("aria-expanded") === "true" ? true : false;
    document.removeEventListener("click", closeMenu);

    if (expanded) {
        menu.classList.add("menu-closed");
    } else {
        menu.classList.remove("menu-closed");
    };

    this.setAttribute("aria-expanded", !expanded);
    menu.setAttribute("aria-hidden", expanded);

    setTimeout(function(){if (!expanded) {
        document.addEventListener("click", closeMenu);
    }}, 1)

});

const mediaQuery = window.matchMedia("(min-width: 960px)")

function handleMediaqueryChange(e){
    if (e.matches) {
        menu.setAttribute("aria-hidden", "false");
        hamburgerBtn.setAttribute("aria-expanded", "true");
        menu.classList.remove("menu-closed");
    } else {
        menu.setAttribute("aria-hidden", "true");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        menu.classList.add("menu-closed");
    }
}

mediaQuery.addEventListener("change", handleMediaqueryChange);
handleMediaqueryChange(mediaQuery);
