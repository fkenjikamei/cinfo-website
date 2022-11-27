const livrosContainers = [...document.querySelectorAll(".livros-container")];
const anteriorBotao = [...document.querySelectorAll(".anterior-botao")];
const proximoBotao = [...document.querySelectorAll(".proximo-botao")];

livrosContainers.forEach((item, i) => {
    let containerDimensoes = item.getBoundingClientRect();
    let containerLargura = containerDimensoes.width;

    proximoBotao[i].addEventListener("click", () => {
        item.scrollLeft += containerLargura;
    })

    anteriorBotao[i].addEventListener("click", () => {
        item.scrollLeft -= containerLargura;
    })
})
