const bars = document.getElementById("bars");
const nav = document.getElementsByClassName("nav__url")[0];
var valor = 0;
if (screen.width < 900){
    window.addEventListener("click", (e)=> {
        const tar = e.target.id;
        const link = e.target;
        const link1 = e.target.classname;
        console.log(link)
        console.log(link1)
        if(tar === "iconBars") {
            if(valor === 0){
                nav.style.transform = "translateX(0%)";
                valor++;
            }else if(valor === 1){
                nav.style.transform = "translateX(100%)";
                valor++;
            } else if(valor === 2){
                nav.style.transform = "translateX(0%)";
                valor++;
            }
            else {
                nav.style.transform = "translateX(-100%)";
                valor = 0;
            }
        }else{
            if(valor === 1){
                nav.style.transform = "translateX(100%)";
                valor++;
            }else if (valor === 3){
                nav.style.transform = "translateX(-100%)";
                valor = 0;
            }
        }
    
    })
}