

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

