function outputResult (data) {
    const outPut = document.getElementById('output')
    outPut.value += data;
}

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('output').value = '';
});


document.getElementById('point').addEventListener('click', function () {
    outputResult('.');
});

document.getElementById('equal').addEventListener('click', function() {
    let result = eval(document.getElementById('output').value);
    document.getElementById('output').value = result;
});



document.getElementById('one').addEventListener('click', function() {
    outputResult(1);
});
document.getElementById('two').addEventListener('click', function() {
    outputResult(2);
});;
document.getElementById('three').addEventListener('click', function() {
    outputResult(3);
});
document.getElementById('four').addEventListener('click', function() {
    outputResult(4);
});
document.getElementById('five').addEventListener('click', function() {
    outputResult(5);
});
document.getElementById('six').addEventListener('click', function() {
    outputResult(6);
});
document.getElementById('seven').addEventListener('click', function() {
    outputResult(7);
});
document.getElementById('eight').addEventListener('click', function() {
    outputResult(8);
});
document.getElementById('nine').addEventListener('click', function() {
    outputResult(9);
});
document.getElementById('zero').addEventListener('click', function() {
    outputResult(0);
});

document.getElementById

document.getElementById('minus').addEventListener('click', function() {
    outputResult('-');
});
document.getElementById('division').addEventListener('click', function() {
    outputResult('/');
});
document.getElementById('plus').addEventListener('click', function() {
    outputResult('+');
});
document.getElementById('modulas').addEventListener('click', function() {
    outputResult('%');
});
document.getElementById('multiply').addEventListener('click', function() {
    outputResult('*');
});


document.getElementById('del').addEventListener('click', function() {
    const output = document.getElementById('output');

    output.value = output.value.slice(0, -1);
})