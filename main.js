const getButton = document.querySelector(".btn-El");

getButton.addEventListener("click",(e) => {
    e.preventDefault();
    const getOption = document.querySelector(".option-Selector").value;
    const getAmount = document.querySelector(".amount input").value;
    const displayAmount = document.querySelector(".exchange-rate");
    displayAmount.classList.add("display-css");
    let result = getAmount/getOption;
    displayAmount.innerHTML = "Vous avez : " + result + "$"
})

























































    






















