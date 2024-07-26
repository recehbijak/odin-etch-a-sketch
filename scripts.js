// create square grids using loop

const easContainer = document.querySelector("#whiteboard-container");
const playButton = document.querySelector("button");

let gridNumber;

playButton.addEventListener("click", playEas);

function playEas() {
    gridNumber = parseInt(prompt("Insert grid size number: "));

    if (gridNumber > 100) {
        alert("Please insert a number below 100");
    } else if (!Number.isInteger(gridNumber)) {
        alert("Please insert a number");
    } else {
        easGetSquareDimension(gridNumber);

        for (let i = 0; i < gridSize(gridNumber); i++) {
            gridMaker();
        };

        easContainer.style.display = "flex"
        playButton.addEventListener("click", resetEas);
    }
};

function resetEas() {
    gridNumber = "";
    easContainer.style.display = "none";
    easContainer.innerHTML = "";
    playButton.innerText = "Play";
    playEas();
}

function easGetSquareDimension(gridWidth) {
    let flexWidth = Math.floor(960 / gridWidth);
    return flexWidth.toString();
    //make this count for the border width
}



function gridMaker() {
    const easSquare = document.createElement("div");
    const easSquareClass = easSquare.setAttribute("class", "eas-square");

    easSquare;
    easSquareClass;
    easSquare.style.minWidth = easGetSquareDimension(gridNumber) + "px";
    easSquare.style.minHeight = easGetSquareDimension(gridNumber) + "px";
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

