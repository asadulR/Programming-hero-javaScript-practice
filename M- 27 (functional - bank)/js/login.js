document.getElementById('form-button').addEventListener('click', function() {
    
    const userEmail = document.getElementById('user-email').value;

    const userPassword = document.getElementById('user-password').value;

    if(userEmail == 'asad@gmail.com' && userPassword == 'tanmeen') {
        location.href = 'banking.html';
    }else{
        alert('please enter your valid information');
    }

});




