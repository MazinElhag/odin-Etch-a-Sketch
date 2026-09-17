const container = document.querySelector(".container");

for(let i = 0; i < 4; i++){
    const line = document.createElement("div");
    line.className = "line";
    for(let j = 0; j < 4; j++){
        const square = document.createElement("div");
        square.className = "square"
        line.append(square);
    }
    container.append(line);
}