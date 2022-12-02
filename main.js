const formPage = document.querySelector(".form-details");
const cName = document.querySelector("#name");
const cardNumber = document.querySelector("#card");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");
const form = document.querySelector("#form");
const pName = document.querySelector("#name-error");
const pCard = document.querySelector("#number-error");
const pDate = document.querySelector("#date-error");
const pCvc = document.querySelector("#cvc-error");
const regex = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/g;
const thanksPage = document.querySelector(".thank-you");

form.addEventListener("submit", (e)=> {
    if(name.value === "" || !regex.test(cardNumber.value) || (month.value === "" || year.value === "") ||cvc.value === "") {
        e.preventDefault();
        if(cName.value === "") {
            cName.style.borderColor = "var(--Red)";
            pName.style.display = "block";
        }if(!regex.test(cardNumber.value)) {
            cardNumber.style.borderColor = "var(--Red)";
            pCard.style.display = "block";
        }if(month.value === "" || year.value === "") {
            month.style.borderColor = "var(--Red)";
            year.style.borderColor = "var(--Red)";
            pDate.style.display = "block";
        }if(cvc.value === "") {
            cvc.style.borderColor = "var(--Red)";
            pCvc.style.display = "block";
        }
    }else {
        e.preventDefault();
        formPage.style.display = "none";
        thanksPage.style.display = "block";
    }
        
});

form.addEventListener("keypress", () => {
    if(pCard.style.display === "block" || pDate.style.display === "block" || pCvc.style.display === "block") {
        pCard.style.display = "none";
        pDate.style.display = "none";
        pCvc.style.display = "none";
    }
    
});


window.addEventListener("click", ()=> {
    if(thanksPage.style.display = "block") {
        formPage.style.display = "block";
        thanksPage.style.display = "none";
    }
});

