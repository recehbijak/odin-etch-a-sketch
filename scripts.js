// create square grids using loop

const easContainer = document.querySelector("#whiteboard-container");

function easSquareFlexWidth(gridNumber) {
    let flexWidth = Math.floor(960 / gridNumber);
    return flexWidth.toString();
    //make this count for the border width
}


function gridMaker() {
    const easSquare = document.createElement("div");
    const easSquareClass = easSquare.setAttribute("class", "eas-square");

    easSquare;
    easSquareClass;
    easSquare.style.minWidth = easSquareFlexWidth(64) + "px";
    easSquare.style.minHeight = easSquareFlexWidth(64) + "px";
    easContainer.appendChild(easSquare);

    easSquare.addEventListener("mouseover", () => {
        easSquare.style.backgroundColor = "red";
    })
}

//grid parameter should be taken from prompt

function gridSize(grid) {
    let gridRatio = grid * grid;
    return gridRatio;
}

for (let i = 0; i < gridSize(64); i++) {
    gridMaker();
}

