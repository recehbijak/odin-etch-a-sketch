// create square grids using loop

const easContainer = document.querySelector("#whiteboard-container");
const playButton = document.querySelector("button");

playButton.addEventListener("click", () => {
    gridNumber = parseInt(prompt("Insert grid size number: "));
    
    if (gridNumber > 100) {
        alert("Please insert a number below 100");
    } else if (!Number.isInteger(gridNumber)) {
        alert("Please insert a number");
    } else {
        playEas();
        playButton.innerText = "Reset";
        playButton.addEventListener("click", resetEas());

    }
    
})

function playEas() {
    easSquareFlexWidth(gridNumber);

    for (let i = 0; i < gridSize(gridNumber); i++) {
        gridMaker();
    };

    easContainer.style.display = "flex";

}

function resetEas() {
    easContainer.innerHTML = "";
    playEas();
}

function easSquareFlexWidth(gridWidth) {
    let flexWidth = Math.floor(960 / gridWidth);
    return flexWidth.toString();
    //make this count for the border width
}



function gridMaker() {
    const easSquare = document.createElement("div");
    const easSquareClass = easSquare.setAttribute("class", "eas-square");

    easSquare;
    easSquareClass;
    easSquare.style.minWidth = easSquareFlexWidth(gridNumber) + "px";
    easSquare.style.minHeight = easSquareFlexWidth(gridNumber) + "px";
    easContainer.appendChild(easSquare);

    easSquare.addEventListener("mouseover", () => {
        easSquare.style.backgroundColor = "red";
        easSquare.style.borderColor = "red";
    })
}

//grid parameter should be taken from prompt

function gridSize(grid) {
    let gridRatio = grid * grid;
    return gridRatio;
}

