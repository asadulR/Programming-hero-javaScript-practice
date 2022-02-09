function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// handle button click by calling function
const makeBgGreen = document.getElementById('make-green');

// just save the name of the function without ()

makeBgGreen.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}



const makePurpleButton = document.getElementById('make-purple');
// anonymous function 
makePurpleButton.onclick = function (){
    document.body.style.backgroundColor = 'purple';
}



// handle by using addEvent listenner

const makeGoldenRodButton = document.getElementById("make-goldenrod");

makeGoldenRodButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod (){
    document.body.style.backgroundColor = 'goldenrod';
}



// handle by using addEvent listenner   / different use of function



const makeHotpinkButton = document.getElementById('make-hotpink');

makeHotpinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink';
})





//   Adding paragraph/ inner html text by useing onclick 


function handleClickingInnerText () {
    const p = document.getElementById('addining-innertext-js');
    p.innerText = 'This text is set by useing function'
}



// direct 

document.getElementById('direct-handle-event').addEventListener('click', function() {
    const p = document.getElementById('addining-innertext-js');
    p.innerText = 'This text is set by using direct function add even listennewr.'
})



// direct update input text 


document.getElementById('update-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    
    const p = document.getElementById('updated-input-tect');
    p.innerText = nameField.value;
    nameField.value = '';
})