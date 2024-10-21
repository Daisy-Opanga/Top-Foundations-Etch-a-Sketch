const container = document.querySelector(".container");

function createGrid(){
    let i;
    for (i = 0; i < (16*16); i++){
        const gridSqr = document.createElement("div");
        gridSqr.classList.add("grid-square");
        container.appendChild(gridSqr);
    }
}

createGrid();
