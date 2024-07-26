// create square grids using loop

const easContainer = document.querySelector("#whiteboard-container");
const userInputForm = document.querySelector("#input-form");
const resetButton = document.querySelector("#reset-button");

let gridNumber;

resetButton.addEventListener("click", () => {
    easContainer.style.display = "none";
    easContainer.innerHTML = "";
});

userInputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const valueGridSize = document.querySelector("#grid-size");
    gridNumber = parseInt(valueGridSize.value);
    playEas();
});


function playEas() {
    if (gridNumber > 100) {
        alert("Please insert a number below 100");
    } else if (!Number.isInteger(gridNumber)) {
        alert("Please insert a number");
    } else {
        resetEas();
        easGetSquareDimension(gridNumber);

        for (let i = 0; i < gridSize(gridNumber); i++) {
            gridMaker();
        };

        easContainer.style.display = "flex";
    }
};

function resetEas() {
    easContainer.style.display = "none";
    easContainer.innerHTML = "";
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

