const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      searchBtn = document.querySelector(".search-box"),
      modeSwtich = document.querySelector(".toggle_switch"),
      modeText = document.querySelector(".mode-text"),
      botonswitch = document.querySelector(".switch"),
      minimenu = document.querySelector(".menuredes"),
      minimenuver = document.querySelector(".ver"),
      menu_2 = document.getElementById("menu_2"),
      option = document.querySelector(".option"),
      galery = document.getElementById("galeria");
      div = document.getElementById('modal').style.display = "none";
      closeSpan = document.querySelector('.span');
     

      galery.addEventListener('click', ()=>{
        div = document.getElementById('modal');
        div.style.display = '';
       
      });

      closeSpan.addEventListener("click", ()=>{
        div = document.getElementById('modal').style.display = "none";
      });

      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
      });

      menu_2.addEventListener('click', ()=>{
        document.getElementById('option').classList.toggle('activo');
      });

      searchBtn.addEventListener("click", ()=>{
        sidebar.classList.remove("close");
      });
      
      minimenu.addEventListener('click',()=>{/// boton de mini menu
        document.querySelector('ocul').style.display = 'none';
      });

      modeSwtich.addEventListener("click", ()=>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            modeText.innerText = "Mode Light"
        }else{
            modeText.innerText = "Mode Dark"
        }
      
        
      });

      