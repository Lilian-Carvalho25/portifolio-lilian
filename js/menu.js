const botao = document.querySelector("#menu-icon");
const linksMenu = document.querySelector(".navbar");
const icone = document.querySelector(".bx-x");

botao.addEventListener("click", function(event){
    event.preventDefault();
    linksMenu.classList.toggle("open");
    if(linksMenu.classList.contains("open")){
        icone.innerHTML = "&times;";
    } else {
        icone.innerHTML = "&equiv;"; 
    }
});

