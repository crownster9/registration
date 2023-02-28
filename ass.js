const form = document.querySelector('.form2');
const name = document.querySelector('.name');
const names = document.querySelector('.names');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const msg = document.querySelector('.msg')
const user = document.querySelector('.user')
const btn = document.querySelector('.btn')
const pass = document.querySelector('.pass')
const input = document.querySelector('input')

form.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if (name.value == '' || email.value == '' || names.value == '' || phone.value == '' || pass.value == '') {
        msg.innerHTML = 'please enter all fields'
        msg.classList.add('error')
    
        setTimeout(() => msg.remove(), 3000)
    }
    else {
        alert('submitted')
    }
}