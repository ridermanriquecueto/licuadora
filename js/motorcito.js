var estadoLicuadora ="apagado";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");
function controlarLicuadora(){
    if (estadoLicuadora =="apagada"){
        estadoLicuadora ="ensendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        console.log("me prendistes");
    }else{
        estadoLicuadora="apagada"
        hacerBrrBrr();
        licuadora.classList.remove("active");
          console.log("me apagaste");
    }
    
}

function hacerBrrBrr(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }

}

