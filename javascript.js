const container = document.querySelector(".container");

let  divs = 0;
while (divs < 256) {
    let box = document.createElement("div");
    box.classList.add('grids');
    container.appendChild(box);
    divs ++
};