window.addEventListener("resize", panels);

let counter=0

function panels() {
    var width = document.documentElement.clientWidth;
   
    if (width < 750 && width > 320) {
        counter++
        if(counter===1){
            
            var ico = document.createElement('img');
            ico.src = "./utils/PanelLine.svg";
            ico.classList.add('panelIco');
            const cont2 = document.querySelector(".contOpc2")
            cont2.appendChild(ico)
            cont2.style.flexDirection="column"

            var arrow = document.createElement('img');
            arrow.src = "./utils/ampliar.png";
            arrow.classList.add('ampliarIco');
            const models = document.querySelector(".models")
            models.appendChild(arrow)



            ico.addEventListener('click', showPanel)
            function showPanel(){
                var panel = document.querySelector('.panel')
                if(!panel.classList.contains("show"))panel.classList.add('show');
                else panel.classList.remove("show")
        
            }

            arrow.addEventListener('click', showPanel2)
            function showPanel2(){
                var panel2 = document.querySelector('.panel2')
                if(!panel2.classList.contains("show"))panel2.classList.add('show');
                else panel2.classList.remove("show")
         
            }

           
    }
           
}
}
