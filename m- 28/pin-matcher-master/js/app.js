//  generation random pin and display by clicking button
function getPin (){
    const randomPin = Math.floor(Math.random()* 10000);
    const pinString = randomPin + '';

    if(pinString.length == 4){
        return randomPin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


//  insert pin as the generated pin and match it

document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');

    if(isNaN(number)) {
        if(number == 'C'){
            typedNumber.value ='';
        }
    }
    else{
        const previousNumber = typedNumber.value;
        const newNumber = previousNumber + number
        typedNumber.value = newNumber;
    }
    

})


function verifyPin() {
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-number').value;

    const successMessage = document.getElementById('right-pin');
    const errorMessage = document.getElementById('wrong-pin')

    if(generatedPin == typedPin){
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else{
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';

    }
}

document.getElementById('submit-btn').addEventListener('click', function() {
    verifyPin();
})


