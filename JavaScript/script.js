// Const mainDiv is created as a reference for the Etch-a-Skecth main div, which 
// will include the divs inside.
// Const textInput and submitButton are created as reference for the form and button.
// Var numOfDivs holds the initial number of cells the grid must have.

const mainDiv = document.getElementById("main");
const textInput = document.getElementById("text-input");
const submitButton = document.getElementById("button");
let numOfDivs = 256;

// Function createGrid and resizeGrid are executed.

createGrid();
resizeGrid();

// Var Divs is created as a reference for the divs created under the main div 
// by the createGrid() or resizeGrid() functions. This Var is created after 
// those functions have been executed, as otherwise the grid will not be yet
// created in the DOM.

let Divs = document.querySelectorAll(".simple-div");

// Function hoverGrid is executed.

hoverGrid();

// Function createGrid contains a for loop which creates a div element in const
// divElement, adds the class "simple-div" to it, and afterwards creates it in
// the DOM below the main div. It does this x256 times, thus creating a 16x16
// grid as asked initially in the project instructions.

function createGrid() {
    for (let i = 0; i < numOfDivs; i++) {
        const divElement = document.createElement("div");
        divElement.classList.add("simple-div");
        mainDiv.appendChild(divElement);
    }
}

// Function resizeGrid is executed whenever the user clicks the button to resize
// the grid.
// It executes function clearGrid to delete all the grid divs that were already 
// attached to the main div.
// If the value inputed in the text form is not 16, then it adds the attributes 
// "gridTemplateColumns" and "gridTemplateRows" according to the textInput value,
// so that the grid tracks are as the user wanted, then updates the value of Var
// numOfDivs to match the total of cells needed (square of "textInput" value), and 
// finally executes the same for loop as in function createGrid, creating the new
// updated grid.
// An else statement is created contemplating the possibility that the user inputs
// the number "16" (initial value). It executes function createGrid again.

function resizeGrid() {
    submitButton.addEventListener("click", () => {
        clearGrid();
        if (textInput.value !== "16") {
            mainDiv.style.gridTemplateColumns = `repeat(${textInput.value}, 1fr)`;
            mainDiv.style.gridTemplateRows = `repeat(${textInput.value}, 1fr)`;
            numOfDivs = Number(textInput.value*textInput.value);
            for (let i = 0; i < numOfDivs; i++) {
                const divElement = document.createElement("div");
                divElement.classList.add("simple-div");
                mainDiv.appendChild(divElement);
            } 
        } else {
            createGrid();
        }
    });
}

// Function clearGrid clears the Grid by deleting all divs previoulsy attached
// to the main div.

function clearGrid() {
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}

// Function hoverGrid contains a for loop that goes through the Divs nodelist.
// When one of the nodelist (elements) is triggered by "mouseenter", it has the
// class "fade" remove it (if it has it) and the class "hover" added.
// When the triggering event is "mouseleave" instead, the class "hover" is removed
// and the class "fade" is added.
// This way, "hover" changes the background color to yellow and when the mouse
// enters any square and "fade" reproduces a fading effect back to the intial
// background color. On "mouseenter" the "fade" class is removed once again,
// otherwise it would not be re-applied.

function hoverGrid() {
    for (const Div of Divs) {
        Div.addEventListener("mouseenter", () => {
            Div.classList.remove("fade");
            Div.classList.add("hover");
        }); 
        Div.addEventListener("mouseleave", () => {
            Div.classList.remove("hover");
            Div.classList.add("fade");
        });
    }
}