
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// this return an Array with a random number, between
// 0 to 255 to represent the rgb colors numbers
function randomNumber() {

    let cor = (Math.floor(Math.random()*255));
    return  cor;
}

btn.addEventListener("click", () => {

        let rgb = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
        document.body.style.backgroundColor = rgb;
        color.textContent = rgb;
    });