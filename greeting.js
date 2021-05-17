const greetingForm = document.querySelector('form.js-greeting'),
  greetingInput = greetingForm.querySelector('input'),
  greetingH2 = document.querySelector('h2.js-greeting'),
  greetingSpan = greetingH2.querySelector('span')

function setGreeting() {
  const userName = localStorage.getItem('username')
  if (userName) {
    greetingForm.classList.add('display-none')
    greetingH2.classList.remove('display-none')
    greetingSpan.innerHTML = userName
    greetingSpan.addEventListener('click', removeUserName)
  } else {
    greetingH2.classList.add('display-none')
    greetingForm.classList.remove('display-none')
    greetingForm.addEventListener('submit', setUserName)
  }
}



function setUserName(event) {
  event.preventDefault()
  localStorage.setItem('username', greetingInput.value)
  setGreeting()
  greetingInput.value = ''
  console.log('submit')
}

function removeUserName() {
  localStorage.setItem('username', '')
  setGreeting()
  console.log('click')
}

function init() {
  setGreeting()
}
init()
