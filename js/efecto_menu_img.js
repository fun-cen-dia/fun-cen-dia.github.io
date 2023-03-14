

const contenido = document.querySelector('#cont')
const contenido2 = document.querySelector('#titulo')

//boton de reservas

var boton_reservas_cabañas = document.querySelector('.reservar')
const contenido_Boton = document.querySelector('#cont-reservas')
// menu imagenes. 

document.querySelectorAll('.img_contenedor img').forEach(imagen => {
    imagen.onclick =() =>{
    document.querySelector('.popup-img').style.display = 'block';
    document.querySelector('.popup-img img').src = imagen.getAttribute('src');
     
    if(imagen.classList.contains('primera')){
       contenido.textContent= "contenido es valido solo por 1" 
          
     }
    if(imagen.classList.contains('primera2')){
        contenido.textContent= "contenido es valido solo para 2" 
           
    }
    if(imagen.classList.contains('primera3')){
        contenido.textContent= "contenido es valido solo por 3" 
      
      }
    if(imagen.classList.contains('primera4')){
         contenido.textContent= "contenido es valido solo para 4" 
           
       }
    if(imagen.classList.contains('primera5')){
        contenido.textContent= "contenido es valido solo por 5" 
          
      }
    if(imagen.classList.contains('primera6')){
         contenido.textContent= "contenido es valido solo para 6" 
            
       }
      
    document.querySelector('#titulo').style.display = 'none';
       

    }
   
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none'; /* me permite remover el elemento span dandole vida al boton cerrar*/
    contenido.textContent= "" 
    contenido_Boton.textContent= "" 
    contenido2.textContent= "Eventos " 
    
    
}



document.querySelectorAll('.subcontenedor .reservar').forEach(Boton_reserv => {
  Boton_reserv.onclick =() =>{
   
      document.querySelector('.popup-reservas').style.display = 'block'; 

      /// CONTENIDO DEL SPAN ESTE DEBE CONTENER LA DISPONIBILIDAD DEL SITIO, LOS SERVICIOS CONTRATADOS, INFORMACION DEL RESERVANTE, Y METODO DE PAGO. 

      if(Boton_reserv.classList.contains('cont1')){
        contenido_Boton.textContent= "contenido del boton numero 1" 
           
      }

      if(Boton_reserv.classList.contains('cont2')){
        contenido_Boton.textContent= "contenido del boton numero 2" 
           
      }


      if(Boton_reserv.classList.contains('cont3')){
        contenido_Boton.textContent= "contenido del boton numero 3" 
           
      }

      if(Boton_reserv.classList.contains('cont4')){
        contenido_Boton.textContent= "contenido del boton numero 4" 
           
      }
  }

});