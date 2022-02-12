

function getInput (input) {
    const inputValueText = document.getElementById(input).value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function getResult (id) {
    const resultValue = document.getElementById(id);
    const resultValueText = resultValue.innerText;
    const resultValueNumber = parseFloat(resultValueText);
    return resultValueNumber;
}
function idInnerText(id) {
    const resultInnerText  = document.getElementById(id);
    return resultInnerText;
} 
function getResultDouble(doubleInput) {
    const doubleInputResult = doubleInput * 2;
    return doubleInputResult;

}

document.getElementById('dubble-btn').addEventListener('click', function() {

    const doubleInput  = getInput ('double-input');

    const getDoubleValue = getResult('double-value');
    const resultDouble = getResultDouble(doubleInput);
    const finalResult = getDoubleValue + resultDouble;
    const finalDoubleResult = idInnerText('double-value')
    finalDoubleResult.innerText = finalResult;
    doubleInput = ''
})

document.getElementById('triple-btn').addEventListener('click', function() {
    const tripleInput  =  getInput('triple-input');

    const getTripleInput = tripleInput * 3;
    let getTripleValue = getResult('triple-value')
    getTripleValue.innerText = getTripleInput;
    alert(getTripleValue);


})




/*
document.getElementById('dubble-btn').addEventListener('click', function() {

    const inputField = document.getElementById('double-input').value;
    const doubleInputNumber = parseFloat(inputField);
    const doubleInput = doubleInputNumber * 2;

    const resultValue = document.getElementById('double-value');
    const resultValueText = resultValue.innerText;
    const resultValueNumber = parseFloat(resultValueText);

    const finalResult = doubleInput + resultValueNumber;
    resultValue.innerText = finalResult;
    // const doubleInput  = getInput ('double-input');

    // const getDoubleValue = getResult('double-value');
    // const resultDouble = getResultDouble(doubleInput);
    // getDoubleValue.innerText = resultDouble;
})
*/