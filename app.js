const regForm = document.getElementById('registration-form')

const regname = document.getElementById('regname')
const regnameErr = regname.nextElementSibling
const regnameSucc = regnameErr.nextElementSibling
const email = document.getElementById('email')
const emailErr = email.nextElementSibling
const subject = document.getElementById('subject')
const subjectErr = subject.nextElementSibling
const comment = document.getElementById('comment')
const commentErr = comment.nextElementSibling


regForm.addEventListener('click', function (e) {
  e.preventDefault()
if (regname.value === '') {
 regnameErr.className = 'bg-red-700 text-white'
} else {
 regnameSucc.className('sending to server')
}


   if  (email.value ==='') {
       emailErr.className = 'bg-red-700 text-white'
   } else {
       console.log ('sending to server')
   }
   
   if (subject.value ==='') {
       subjectErr.className = 'bg-red-700 text-white'
   } else {
       console.log ('sending to server')
   }

})