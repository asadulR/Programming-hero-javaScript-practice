function makeBgGreen () {
    document.body.style.backgroundColor ='green';
}



let makeBgPurpleButton = document.getElementById('make-bg-purple');
makeBgPurpleButton.onclick = makeBgPurple;

function makeBgPurple(){
    document.body.style.backgroundColor ='purple';
}




let makeBgBlue = document.getElementById('make-bg-blue')

makeBgBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}



const makeBgGoldenRodButton = document.getElementById('make-bg-goldenrod');

makeBgGoldenRodButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})




document.getElementById('make-bg-hotpink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})





//  common 2 ways of usig event 


function handleJustFunctionClick () {
    const p = document.getElementById('clicking-method');

    p.innerText = 'Set by using function';
}

// by using directy  

document.getElementById('direct-handle-clickevent-button').addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerText = ' Set by anonymous function';
})


//  update input by using listener ( anonymous function)

document.getElementById('update-button').addEventListener('click', function () {

    const inputField = document.getElementById('input-field');

    const parafield = document.getElementById('clicking-method');

    parafield.innerText = inputField.value;

    inputField.value = '';
})










//  adding comment script area

document.getElementById('submit-comment').addEventListener('click', function () {

    const commentBox = document.getElementById('comment-box');

    const commentBoxComment = commentBox.value;

    const newP = document.createElement('p');

    newP.innerText = commentBoxComment;

    const commentConatiner = document.getElementById('comment-container');

    commentConatiner.appendChild(newP);

    commentBox.value = '';
;
})






//  Simple github like delete confirmation button  area  script

