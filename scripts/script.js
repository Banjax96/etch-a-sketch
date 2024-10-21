const container = document.querySelector("#container");

let counter = 0;
const max = 16 * 16; // number of divs in grid

while (counter < max){
    // create new div
    const gridSquare = document.createElement("div");

    gridSquare.classList.add("child");

    // assign div number
    gridSquare.textContent = counter + 1;

    // add div to container
    container.appendChild(gridSquare);

    // increment counter
    counter++;
}

const divs = container.querySelectorAll(".child");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("black");
    });
});