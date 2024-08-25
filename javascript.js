const container = document.querySelector(".container");

function getGrid(size) {
    container.innerHTML = ''; // Clear the container
    let itemSize = 800 / size; 
    for (let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add('grid-item');
        box.style.width = `${itemSize}px`;
        box.style.height = `${itemSize}px`;
        container.appendChild(box);

        // Change color to white on hover
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "white";
        });
    }
}

const fstButton = document.querySelector(".firstButton");
fstButton.addEventListener('click', () => {
    let size = prompt('Enter grid size (1-100):');
    size = parseInt(size, 10); // Convert the input to an integer
    if (size > 0 && size <= 100) {
        getGrid(size);
    } else {
        alert("Please pick a number between 1 and 100.");
    }
});

function ranColor() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let rgbColor = `rgb(${r}, ${g}, ${b})`;
            item.style.backgroundColor = rgbColor;
        });
    });
}

const scndButton = document.querySelector(".secondButton");
scndButton.addEventListener('click', () => {
    ranColor();
});

function whiteColor() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "white"; 
        });
    });
}

const thrdButton = document.querySelector(".thirdButton");
thrdButton.addEventListener('click', () => { 
    whiteColor(); 
});



    


