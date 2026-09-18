const body = document.querySelector("body");
const container = document.querySelector(".container");

const numberOfSquare = document.createElement("button");
numberOfSquare.textContent = "new grid";

body.append(numberOfSquare);

numberOfSquare.addEventListener("click", () =>{
        let ask = prompt("The number of squares per side for the new grid(anything bigger than 100 will count as 100)", "16");
        container.innerHTML = '';
        grid(Number(ask));
    }
)

function drawing(squares){
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
                square.classList.add("background");
            }
        )
    })
}

function grid(blockNum=16){
    if(blockNum > 100)
        blockNum = 100;
    for(let i = 0; i < blockNum; i++){
        const line = document.createElement("div");
        line.className = "line";
        for(let j = 0; j < blockNum; j++){
            const square = document.createElement("div");
            square.className = "square"
            line.append(square);
        }
        container.append(line);
    }

    drawing(document.querySelectorAll(".square"));
}

grid();






