/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function validateLength(value, input_type, min, max) {
    let isValid = true;
    if (value.length < min) {
        alert(`${input_type} must include ${min} or more characters!`);
        isValid = false;
    } else if (value.length > max) {
        alert(`${input_type} must include less than ${max} characters!`);
        isValid = false;
    } else if (value.length === 0) {
        alert(`${input_type} must not be empty!`);
        isValid = false;
    }
    return isValid;
}

function validateUsername(username) {
    const lenghtValidation = validateLength(username, 'Username', 2, 20);

    if (!lenghtValidation) {
        return false;
    }

    const pattern = /^[a-zA-Z0-9_.]+$/;
    const isValid = pattern.test(username);
    if (!isValid) {
        alert('Username contains invalid characters. Only letters, numbers,\
         underscores, and periods are allowed.');
    }

    return isValid;
}

function validatePassword(password) {
    const lenghtValidation = validateLength(password, 'Password', 8, 15);

    if (!lenghtValidation) {
        return false;
    }

    const pattern = /^[^&<>]+$/;
    const isValid = pattern.test(password);
    if (!isValid) {
        alert('Password contains invalid characters. Only letters, numbers, \
         and special characters allowed.');
    }

    return isValid;
}

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = pattern.test(email);
    if (!isValid) {
        alert('Invalid email.');
    }

    return isValid;
}

async function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const isValidUsername = await validateUsername(username);
    const isValidPassword = await validatePassword(password);
    const isValidEmail = await validateEmail(email);

    if (isValidUsername && isValidPassword && isValidEmail) {
        alert('Registration successful!');
        signupForm.reset();
    }
}

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', handleSubmit);

/******/ })()
;