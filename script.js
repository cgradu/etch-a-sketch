const btn = document.createElement("button");
btn.style.fontSize = "18px";
btn.textContent = "Select Grid Size";
btn.style.margin = "10px 10px";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    document.body.appendChild(container);

    document.querySelectorAll(".elem").forEach((element) => element.remove());

    const bodyWidth = document.body.offsetWidth;
    let nrElem = prompt("How big do you want the grid? (Recommended: 64)");
    if(nrElem > 100)
        nrElem = 100;

    for(let i = 0; i < nrElem * nrElem; i++) {
        const gridElem = document.createElement("div");
        let gridElemWidth = bodyWidth / nrElem - 7;
        gridElem.style.minWidth = gridElemWidth.toString() + "px";
        gridElem.style.minHeight = gridElemWidth.toString() + "px";
        gridElem.classList.add("elem");
        let opacityValue = 0;
        gridElem.addEventListener("mouseenter", () => {
            if (opacityValue < 0.1)
                gridElem.style.background = randomRGB();
            if(opacityValue <= 0.9) {
                opacityValue += 0.1;
                gridElem.style.opacity = opacityValue.toString();
            }
        });
        gridElem.addEventListener("mouseleave", () => {
            if (opacityValue < 0.1)
                gridElem.style.background = "white";
        });
        
        container.appendChild(gridElem);
    }
});

function randomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}
