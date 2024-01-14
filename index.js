function getdice() {
    const numdice = document.getElementById("numofdice").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");
    const values = [];
    const display = [];

    for (let i = 0; i < numdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        display.push(`<img src="dice_images/${value}.png">`);
    }

    result.textContent = `Dice: ${values.join(', ')}`;
    images.innerHTML = `${display.join('')}`;
}
