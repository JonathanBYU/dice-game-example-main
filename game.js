const dice = document.querySelectorAll("#gameboard img");
let debounce = true;

document.querySelector('#rollButton').addEventListener("click", e => {
    if (debounce == true) {
        debounce = false;
        dice.forEach(image => {
            if (isDieLocked(image)) {
                return;
            }
            image.src = "assets/die_rolling.gif";
        });

        setTimeout(() => {
            dice.forEach(image => {
                if (isDieLocked(image)) {
                    return;
                }
                number = Math.floor(Math.random() * 6 + 1);
                image.src = `assets/white_dice_${number}.gif`;
            });
            setTimeout(() => {
                debounce = true;
            }, 250);
        }, 1000);
    }
});

function isDieLocked(dieImage) {
    if (document.querySelector(`input[class="${dieImage.className}"]`).checked == true) {
        return true;
    }
    return false;
}
