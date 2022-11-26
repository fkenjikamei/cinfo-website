// Altera a posição do header se baseando na visibilidade da barra do Brasil.

function estaVisivel(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
        rect.top >= -42.594 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const loop = setInterval(() => {
    const barra = document.querySelector('#barra-brasil');
    const header = document.querySelector('#header');
    const main = document.querySelector('#main');
    
    if (estaVisivel(barra)) {
        header.style.position = "relative";
        main.style.marginTop = "0"
    } else {
        header.style.position = "fixed";
        header.style.width = "100%";
        header.style.top = "0";
        main.style.marginTop = "80px"
    }
}, 10)