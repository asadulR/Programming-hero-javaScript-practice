function sum (i) {
    // console.log(i);
    if(i == 1) {
        return 1;
    }

    return i + sum (--i);
}
console.log(sum(5));



function consoleNumber (i) {
    if (i > 5) {
        return;
    }

    console.log(i)
    consoleNumber(i + 1);

}

consoleNumber(1);