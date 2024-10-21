const container = document.querySelector(".container");

function createGrid(){
    let i;
    for (i = 0; i < (16*16); i++){
        const gridSqr = document.createElement("div");
        gridSqr.classList.add("grid-square");
        container.appendChild(gridSqr);
        
    }
}

function createHoverEffect() {
    const gridSqrs = document.querySelectorAll(".grid-square");
    gridSqrs.forEach((gridSqr) => {
    gridSqr.addEventListener("mouseover",() =>{
        gridSqr.style.backgroundColor = "rgb(197, 124, 124)";
    });
}); 
}
createGrid();
createHoverEffect();
