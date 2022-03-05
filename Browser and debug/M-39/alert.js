console.log('I am Asadul');

// alert('Ma is coming , open the book.');  

const maComing = () =>{
    alert('Attention please, ma is coming. Open the book');
};

const askForpicnic = () => {
    const response = confirm('Will you go to picnic?');
    if(response === true){
        alert('He will go to picnic');
    }
    else{
        alert("He won't go to picnic.");
    };
};




const yourName = () => {
    const name = prompt('What is your name ?');
    alert(name);
    // if(name.value === NaN){
    //     alert('Please enter a string');
    // }
    // else{

    // }
}