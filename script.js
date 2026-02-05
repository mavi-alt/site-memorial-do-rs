// Função da barra de pesquisa

const icon = document.querySelector('.icon');
const search = document.querySelector('.input-wrapper');
icon.onclick = function() {
    search.classList.toggle('active');
}