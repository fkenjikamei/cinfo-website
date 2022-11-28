// Header. 

function estaVisivel(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
        rect.top >= -42.594 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
};

const loop = setInterval(() => {
    const barra = document.querySelector('#barra-brasil');
    const header = document.querySelector('#header');
    const main = document.querySelector('#main');
    
    if (estaVisivel(barra)) {
        header.style.position = "relative";
        main.style.marginTop = "0";
    } else {
        header.style.position = "fixed";
        header.style.width = "100%";
        header.style.top = "0";
        main.style.marginTop = "80px";
    }
}, 10);

// Slider da biblioteca.

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

// Mapa.

function init_map(){
    var myOptions = {zoom:16,center:new google.maps.LatLng(-9.6649557,-35.7313916), mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(-9.6649557,-35.7313916)});
    infowindow = new google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);
};

google.maps.event.addDomListener(window, 'load', init_map);