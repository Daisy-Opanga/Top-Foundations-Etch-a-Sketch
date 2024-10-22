const container = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector(".grid-size-btn");
let gridSize, gridSqrSize;

function createGrid(){
    container.innerHTML = "";
    gridSqrSize = 550 / gridSize;
    let i; 
    for (i = 0; i < (gridSize * gridSize); i++){
        const gridSqr = document.createElement("div");
        gridSqr.classList.add("grid-square");
        gridSqr.style.width = `${gridSqrSize}px`;
        gridSqr.style.height = `${gridSqrSize}px`;
        container.appendChild(gridSqr);
        
    }
    createHoverEffect();
}

function createHoverEffect() {
    const gridSqrs = document.querySelectorAll(".grid-square");
    gridSqrs.forEach((gridSqr) => {
    gridSqr.addEventListener("mouseover",() =>{
        gridSqr.style.backgroundColor = getRGBvalue();
    });
}); 
}

function getGridSize() {
   gridSizeBtn.addEventListener("click", () =>{
       gridSize = Number(prompt("Enter the grid size; a number from 1-100."));
       if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
         alert("Please enter a valid number between 1 and 100.");
         return;
       }
       createGrid();
   }); 
}

function changeOpacity() {
    
}

function getRGBvalue() {
 let i, RGBval = [];
 for (i= 0; i<3; i++) {
   RGBval[i]= Math.floor(Math.random()*256); 
 } 
 return ` rgb(${RGBval.toString()})`;
}

getGridSize();

