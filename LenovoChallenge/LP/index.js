window.addEventListener("resize", panels);

let counter = 0

function showPanel(panel) {
    if (!panel.classList.contains("show")) panel.classList.add('show');
    else panel.classList.remove("show")
}

function panels() {
    var width = document.documentElement.clientWidth;


    if (width < 750 && width > 320) {
        counter++
        if (counter === 1) {

            var ico = document.createElement('img');
            ico.src = "./utils/PanelLine.svg";
            ico.classList.add('panelIco');
            const cont2 = document.querySelector(".contOpc2")
            cont2.appendChild(ico)
            cont2.style.flexDirection = "column"

            var arrow = document.createElement('img');
            arrow.src = "./utils/ampliar.png";
            arrow.classList.add('ampliarIco');
            const models = document.querySelector(".models")
            models.appendChild(arrow)


            var panel1 = document.querySelector('.panel')

            ico.onclick = function () {
                showPanel(panel1)
            }

            var panel2 = document.querySelector('.panel2')

            arrow.onclick = function () {
                showPanel(panel2)
            }
        }
    }
}
