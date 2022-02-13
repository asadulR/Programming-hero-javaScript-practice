//  case
function updateCaseNumber(isIncreageing){
    const caseInput = document.getElementById('case-input');
    const caseInputValue = parseInt(caseInput.value);
    //  increase case total quantity
    if(isIncreageing == true) {
        caseInput.value = caseInputValue + 1;
    }
    // decrease case total quantity
    else if(caseInputValue > 0){
        caseInput.value = caseInputValue - 1;
    }
    
//  update case total price
    const caseTotal = document.getElementById('case-price');
    caseTotal.innerText = Number(caseInput.value) * 59;

}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);

    // calculate total 
    calculateTotal();
});

document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseNumber(false);

     // calculate total 
     calculateTotal();
});



// Phone 
function updatePhoneNumberPrice(isIncreasing) {
    const phoneInput = document.getElementById('phone-input');
    const phoneInputValue = parseInt(phoneInput.value);
    // increase phone quantity
    if(isIncreasing == true){
        phoneInput.value = phoneInputValue + 1;
    }
    //  reduse phone quantity
    else if(phoneInputValue > 0) {
        phoneInput.value = phoneInputValue -1;
    }
//  update phone total price
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = Number(phoneInput.value) * 1219;
}


document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhoneNumberPrice (true);

     // calculate total 
     calculateTotal();
});

document.getElementById('phone-minus').addEventListener('click', function() {
    updatePhoneNumberPrice(false);

     // calculate total 
     calculateTotal();

});


//  calculate total

function getInputValue(product) {
    const inputNumberString = document.getElementById(product + '-input').value;
    const inputNumber = parseInt(inputNumberString);
    return inputNumber;
}

function calculateTotal() {
    
    const phonePriceTotal = getInputValue('phone') * 1219;
    const casePriceTotal =  getInputValue('case') * 59;
    const subTotal = phonePriceTotal + casePriceTotal;
    const tax = subTotal / 10;

    const totalPrice = subTotal + tax;
        //  update subtotal, tax , total

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = totalPrice;




} 