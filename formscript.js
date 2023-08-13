document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formbody');
    const submitButton = document.querySelector('button[type="submit"]');


    submitButton.disabled = true;


    function updateSubmitButtonStatus() {
        const nameInput = document.getElementById('inputName');
        const passwordInput = document.getElementById('inputPassword4');
        const emailInput = document.getElementById('inputemail');
        const addressInput = document.getElementById('inputAddress2');
        const cityInput = document.getElementById('inputCity');
        const stateInput = document.getElementById('inputState');
        const subscribeInput = document.getElementById('gridCheck');

        const isNameValid = /^[a-zA-Z ]{3,}$/.test(nameInput.value);
        const isPasswordValid = /^(?!.*\s).{8,}$/.test(passwordInput.value);
        const isEmailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value);
        const isAddressValid = /^[a-zA-Z0-9\s]+$/.test(addressInput.value);
        const isCityValid = /^[a-zA-Z\s]+$/.test(cityInput.value);
        const isStateValid = stateInput.value !== 'Choose...';

        submitButton.disabled = !(isNameValid && isPasswordValid && isEmailValid && isAddressValid && isCityValid && isStateValid && subscribeInput.checked);
    }


    form.addEventListener('input', updateSubmitButtonStatus);


    form.addEventListener('submit', function (event) {
        event.preventDefault();


        const name = document.getElementById('inputName').value;
        const password = document.getElementById('inputPassword4').value;
        const email = document.getElementById('inputemail').value;
        const address = document.getElementById('inputAddress2').value;
        const city = document.getElementById('inputCity').value;
        const state = document.getElementById('inputState').value;
        const subscribe = document.getElementById('gridCheck').checked;


        if (!name || !password || !email || !address || !city || state === 'Choose...' || !subscribe) {
            alert('Please fill in all required fields.');
            return;
        }


        window.location.href = 'home.html';
    });
});
