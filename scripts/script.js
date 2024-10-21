const button = document.querySelector("#rows");

const defaultRows = 16;

createGrid(defaultRows);

button.addEventListener("click", () => {
    let numRows = prompt("How many rows? ");
    if (Number(numRows) > 0 && Number(numRows) <= 100) {
        const container = document.querySelector("#container");
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        createGrid(Number(numRows));
    }
});

function createGrid(num) {
    const container = document.querySelector("#container");

    let counter = 0;
    const max = num * num; // number of divs in grid

    while (counter < max){
        // create new div
        const gridSquare = document.createElement("div");

        //gridSquare.classList.add("child");

        gridSquare.style.width = (100 / num) + "%";

        // assign div number
        gridSquare.textContent = counter + 1;

        // add div to container
        container.appendChild(gridSquare);

        // increment counter
        counter++;
    }

    const divs = container.querySelectorAll("div");

    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.classList.add("black");
        });
    });
}