const carrusel= document.querySelector(".colección-carrusel")
let intervalo= null
let  step= 1
const scrollWidth = 1260*3 ;
const maxScrollLeft= carrusel.scrollWidth - carrusel.clientWidth
const  start= () => {
    intervalo= setInterval(function () {
        carrusel.scrollLeft=carrusel.scrollLeft + step;
            if(carrusel.scrollLeft === maxScrollLeft) {
                step=0;
            } else if (carrusel.scrollLeft === 0){
                step = 1;
            }

    },20000)
}




const stop=() => {
    clearInterval (intervalo);
};

const escala= document.querySelector(".temporada")
let mouseup= mousein

if(MouseEvent("mousein"=backgroundimage)){ 
    escala.style.scale(1,02);
}


