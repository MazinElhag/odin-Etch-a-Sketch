const container = document.querySelector(".container");

for(let i = 0; i < 16; i++){
    const line = document.createElement("div");
    line.className = "line";
    for(let j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.className = "square"
        line.append(square);
    }
    container.append(line);
} 


const squares = document.querySelectorAll(".square");



squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
                square.classList.add("background");
            }
        )
    }
)