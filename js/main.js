let signIn = document.querySelector('form.signin')
let signUp = document.querySelector('form.signup')
let signInBtn = document.querySelector('form.signin>button')
let signUpBtn = document.querySelector('form.signup>button')
let signInEmail = document.querySelector('form.signin>.email')
let signInPass = document.querySelector('form.signin>.pass')
let signUpName = document.querySelector('form.signup>.name')
let signUpEmail = document.querySelector('form.signup>.email')
let signUpPass = document.querySelector('form.signup>.pass')
let overlay = document.querySelector('.overlay')
let changeBtn = document.querySelector('.change_form')

let users = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]

changeBtn.addEventListener('click', () => {
  overlay.classList.toggle('active')
  signIn.classList.toggle('active')
  signUp.classList.toggle('active')
})

function checkInp(element) {
  let elementAtt = element.getAttribute('type')
  if (elementAtt == 'text') {
    element.setAttribute('required','')
    element.value.length > 5 ? element.style.outlineColor = 'var(--primary)' : element.style.outlineColor = 'var(--alert)'
    return true
  } else if (elementAtt == 'email') {
    element.setAttribute('required', '')
    if (element.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      element.style.outlineColor = 'var(--primary)'
      return true
    } else {
      element.style.outlineColor = 'var(--alert)'
      return false
    }
  } else if (elementAtt == 'password') {
    element.setAttribute('required', '')
    if (element.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) {
      element.style.outlineColor = 'var(--primary)'
      return true
    } else {
      element.style.outlineColor = 'var(--alert)'
      return false
    }
  }
}
signInBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let checkStatus = false
  let firstName
  if (checkInp(signInEmail) && checkInp(signInPass)) {
    users.forEach(data => {
      if (signInEmail.value == data.email && signInPass.value == data.pass) {
        checkStatus = true
        firstName = data.name
      }
    });
    checkStatus?document.write(`Salom ${firstName}. Saytimizga Xush Kelibsiz`):console.log('Xatolik')
  }
})
signUpBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (checkInp(signUpName) && checkInp(signUpEmail) && checkInp(signUpPass)) {
    users.push({name: signUpName.value,email: signUpEmail.value,pass: signUpPass.value})
    localStorage.setItem('users', JSON.stringify(users))
    alert('Success')
  } else {
    alert('Error')
  }
})