//CARROUSSEL CON TITULOS

var numb = 1;
var invervalosegundos = 1000;

function adelante() {
  numb++;
  if (numb > 5) {
    return numb = 1;
  }
  else {
    let foto = document.getElementById("foto");
    foto.src = "../assets/Imagenes/Imagenes del Carrousel/img" + numb + ".jpg";
  }

}

function atras() {
  numb--;
  if (numb <= 1) {
    return numb = 5;
  }
  else {
    let foto = document.getElementById("foto");
    foto.src = "../assets/Imagenes/Imagenes del Carrousel/img" + numb + ".jpg";
  }
}


function reproduccionAutomatica() {

  adelante_automatico = setInterval(adelante, invervalosegundos);
}

function desactivarreproduccionAutomatica() {
  clearInterval(adelante_automatico);

}


function animacion_acercade() {
  document.getElementById("animacionacercade").animate([

    { transform: 'translateY(-600px)' },
    { transform: 'translateY(0px)' }
  ], {

    duration: 4000,

  })
}

//ANIMACION DEL FOOTER

function animacion_footer() {
  document.getElementById("pie de pagina").animate([
    { transform: "rotate3d(1, 0, 0, 360deg" }], {
    duration: 2000

  });

}






