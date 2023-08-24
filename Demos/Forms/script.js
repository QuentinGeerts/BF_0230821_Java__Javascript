console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms.loginForm);


const myForm = document.forms.loginForm;

console.log(myForm.email);
console.log(myForm.email.value);

console.log(myForm.password);
console.log(myForm.password.value);

const togglePasswordInput = document.getElementById('togglePassword')

togglePasswordInput.addEventListener('input', togglePasswordVisibility);

function togglePasswordVisibility () {
    if (myForm.password.type === 'password') myForm.password.type = "text";
    else myForm.password.type = "password";
}

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("Connexion ....");
})