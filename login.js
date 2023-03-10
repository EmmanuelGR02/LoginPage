

// Login function
function login() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isCorrectLoginInfo(username, password)) {
        document.getElementById('access').innerHTML = 'you are logged in!';
    } else {
        document.getElementById('access').innerHTML = 'Invalid credentials!';
    }
}

// Sign up function
function signUp() {
    event.preventDefault();
    // Get user input
    const SU_username = document.getElementById('SU_username').value;
    const SU_password = document.getElementById('SU_password').value;

    // Make sure the inputs meet all of the requirements
    if (isInStorage(SU_username) == false && isValidUsername(SU_username) && isValidPassword(SU_password) && hasCorrectChars(SU_password)) {
        window.localStorage.setItem(SU_username, SU_password);
    } else {
        console.log('Something is not right')
    }
}

// Check for valid username
function isValidUsername(username) {
    // cehck if username is long enough and unique
    if (username.length >= 5) {
        return true;
    } else {
        return false;
    }
}

// Check for valid password
function isValidPassword(password) {
    // check if given password is long enough and with correct chars
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

// check for valid characters
function hasCorrectChars(password) {
    var pattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // check if the password given contains number or special characters
    if (pattern.test(password)) {
        return true;
    } else {
        document.getElementById('notChars').innerHTML = 'Password must contain integers and special characters';
        return false;
    }
}

// Allow only unique usernames
function isInStorage(username) {
    const users = Object.keys(localStorage);

    // check if local storage contains the given username
    if (users.includes(username)) { 
        return true;
    } else {
        return false;
    }
}


// check username matches password
function isCorrectLoginInfo(username, password) {
    const key = Object.keys(localStorage);
    const value = [];

    for (var i = 0; i < localStorage.length; i++) {
        value.push(localStorage.getItem(localStorage.key(i)));
    }

    if (key.includes(username) && value.includes(password)) {
        return true;
    } else {
        return false;
    }
}