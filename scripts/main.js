let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === "img/firefox.png") {
      miImage.setAttribute('src','img/firefox2.png');
    } else {
      miImage.setAttribute('src', 'img/firefox.png');
    }
   
   
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Mozilla es genial, ' + miNombre;
  }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}
    miBoton.onclick = function() {
    estableceNombreUsuario();
}
   
}