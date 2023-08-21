// Const mainDiv is created as a reference for the Etch-a-Skecth main div, which 
// will include the divs inside.

const mainDiv = document.getElementById("main");

// Function createGrid is executed.

createGrid();

// Const Divs is created as a reference for the divs created under the main did 
// (of class "simple-div"). This variable must be created after the createGrid
// function has been executed, as the grid needs to be created before its
// elements can be stored in a variable.

const Divs = document.querySelectorAll(".simple-div");

// Function hoverGrid is executed.

hoverGrid();

// Function createGrid contains a for loop which creates a div element in const
// divElement, adds the class "simple-div" to it, and afterwards creates it in
// the DOM below the main div. It does this x256 times, thus creating a 16x16
// grid as asked initially in the project instructions.

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const divElement = document.createElement("div");
        divElement.classList.add("simple-div");
        mainDiv.appendChild(divElement);
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