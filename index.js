const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".noOfNotes");
const hideCashGiven = document.querySelector(".hide-cashGiven");
const hidetable = document.querySelector(".hide-table");
const nextbtn = document.querySelector("#nextbtn");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

hideCashGiven.style.display = "none";
hidetable.style.display = "none";

nextbtn.addEventListener("click", function(){
    hideCashGiven.style.display = "block";
    hidetable.style.display = "block";
} );


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("Do u want to wash dishes?");
        }
    }else{
        showMessage("Invalid amount");
    }
} );


function calculateChange(amountToBeReturned){
    for(let i=0; i < availableNotes.length; i++ ){
        const showNoOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        numberOfNotes[i].innerText = showNoOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}


