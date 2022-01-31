let names = ['Asad', 'Angela', 'Tanmeen', 'Rayhan', 'Ayaan']

function whosPaying(names) {
    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

    let randomPerson = names[randomPersonPosition];

    return randomPerson + ' is buying lunch today.';
}

let payingPerson = whosPaying(names);
console.log(payingPerson);