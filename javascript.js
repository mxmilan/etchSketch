const container = document.querySelector(".container");

function getGrid (size) {
    container.innerHTML = '';
    let itemSize = 800/size; 
    for (let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add('grid-item');
        box.style.width = `${itemSize}px`;
        box.style.height = `${itemSize}px`;
        container.appendChild(box);

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "white";
        });
    }
};

const buttons = document.querySelector(".buttons");
const fstButton = document.querySelector(".firstButton");
fstButton.addEventListener('click', () => {
    let size = prompt('');
    if (size <= 100) {
        getGrid(size);
    } else if (size > 100) {
       alert ("pick a different number between 0-100");
    } else {
        alert ("pick a number between 0-100");
    }
});

    


