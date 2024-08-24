const container = document.querySelector(".container");

function getGrid (size) {
    container.innerHTML = '';
    let itemSize = 800/size; 
    for (let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add('grid-item');
        box.style.width = `${itemSize}px`;
        box.style.height = `${itemSize}`;
        container.appendChild(box);

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "white";
        });
    }
};
getGrid(16);
