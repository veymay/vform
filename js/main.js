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
// Checking Form Validate
function checkInp(btn,inp) {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
      if ( inp.value.length > 3) {
        inp.classList.remove('error')
      } else {
        inp.classList.add('error')
      }
  })
  inp.addEventListener('keydown', () => {
    inp.value.length>3?inp.classList.remove('error'):inp.classList.add('error')
  })
}

checkInp(signInBtn,signInEmail)
checkInp(signInBtn, signInPass)
checkInp(signUpBtn,signUpName)
checkInp(signUpBtn,signUpEmail)
checkInp(signUpBtn, signUpPass)

// Signup User
function signUpUser() {
  if (!signUpName.classList.contains('error') && !signUpEmail.classList.contains('error') && !signUpPass.classList.contains('error')) {
    users.push({ name: signUpName.value, email: signUpEmail.value, pass: signUpPass.value})
    console.log(users);
    localStorage.setItem('users',JSON.stringify(users))
  } else {
    console.log('Error');
  }
}

signUpBtn.addEventListener('click',()=> {
  signUpUser()
})

// Signin User
function signInUser() {
  users.forEach(data => {
    if (data.email==signInEmail.value && data.pass==signInPass.value) {
      window.location.replace('https://sayt.uz')
    } else {
      alert('error')
    }
  })
}
signInBtn.addEventListener('click',()=> {
  signInUser()
})