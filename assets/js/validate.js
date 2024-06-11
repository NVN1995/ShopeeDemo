

function checkRePassword() {
    if (document.getElementById('signup-re-password').value == document.getElementById('signup-password').value) {
        document.getElementById('pw-check-message').style.color = 'green';
        document.getElementById('pw-check-message').innerHTML = 'matching password';
        document.getElementById('signup-submit').classList.remove('not-clickable');

    } else {
        document.getElementById('pw-check-message').style.color = 'red';
        document.getElementById('pw-check-message').innerHTML = 'password do not match';
        document.getElementById('signup-submit').classList.add('not-clickable');
    }
}

function checkPasswordLength() {
    if ((document.getElementById('signup-password').value.length) > 5) {
        document.getElementById('pw-check-length').innerHTML = '';
    } else {
        document.getElementById('pw-check-length').innerHTML = 'password must be at least 6 character';
        document.getElementById('pw-check-length').style.color = 'red';
    }

}


function checkUserName() {
    if ((document.getElementById('signup-username').value.length) < 8) {
        document.getElementById('user-check-message').innerHTML = 'username must be at least 8 character';
        document.getElementById('signup-submit').classList.add('not-clickable');
    } else {
        document.getElementById('user-check-message').innerHTML = '' ;
        document.getElementById('signup-submit').classList.remove('not-clickable');
    
    }
}  

function stopPropagation(event) {
    event.stopPropagation();
}

function hideSignupForm() {
    document.getElementById('signup').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('signup').style.display = 'block';
}

