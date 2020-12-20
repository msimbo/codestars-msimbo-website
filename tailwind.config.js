module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

 const regForm = document.getElementById('registration-form')

 const regname = document.getElementById('regname')
 const regnameErr = regname.nextElementSibling
 const email = document.getElementById('email')
 const emailErr = email.nextElementSibling
 const subject = document.getElementById('subject')
 const subjectErr = subject.nextElementSibling
 const comment = document.getElementById('comment')
 const commentErr = comment.nextElementSibling

 regForm.addEventListener('click', function (e) {
   e.preventDefault()
if (regname.value === '') {
  regnameErr.className = 'bg-gray-400 text-white'
} else {
  console.log ('sending to server')
}

 })