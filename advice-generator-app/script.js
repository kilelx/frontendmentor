const id = document.querySelector(".number span");
const advice = document.querySelector(".content span");
const dice = document.querySelector(".dice");
const diceImg = document.querySelector(".dice img");

const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(adviceObj => {
            console.log(adviceObj);
            id.innerText = adviceObj.slip.id;
            advice.innerText = adviceObj.slip.advice;
            dice.classList.add("disabled");
            diceImg.classList.add("animation");
            setTimeout(requestClear, 2000)
        })
}

const requestClear = () => {
    dice.classList.remove("disabled");
    diceImg.classList.remove("animation");
}