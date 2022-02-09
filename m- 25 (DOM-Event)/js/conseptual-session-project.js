let count = 0;

document.getElementById('add').addEventListener('click', function () {

    count++;
    // document.getElementById('count').innerText = count;
    control('count');
});

document.getElementById('minus').addEventListener('click', function () {
    count--;
    // document.getElementById('count').innerText = count;
    control('count');
});

function control (id) {
    document.getElementById(id).innerText = count;
};


//  second section

let number = 1;

document.getElementById('input-add-btn').addEventListener('click', function () {
    number++;

    const inputAreaValue = document.getElementById('input-box').value;

    if(inputAreaValue == ''){
        alert('Please Enter a value');
    } else{
        const trContainer = document.getElementById('table-body');

        const newTr = document.createElement('tr');

        newTr.innerHTML = `
            <th>${number}</th>
            <th>${inputAreaValue}</th>
            <th><button class = 'btn btn-danger'>Delete</button></th>
        `;

        trContainer.appendChild(newTr);

        document.getElementById('input-box').value = '';

    }

})