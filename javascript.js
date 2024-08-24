const container = document.querySelector(".container");

let  divs = 0;
while (divs < 256) {
    let box = document.createElement("div");
    box.classList.add('grid-item');
    container.appendChild(box);

    const changeColor = () => {
        box.style.backgroundColor = "white";
    };

    box.addEventListener('mouseover', changeColor);
    box.addEventListener('mouseenter', changeColor);

    divs ++;
};