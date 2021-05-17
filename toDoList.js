const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoUl = document.querySelector('.js-toDoList')

let toDoList = []

function removeToDo(event) {
  const li = event.target.parentNode
  const liId = parseInt(li.id.replace('todo', ''))
  toDoList = toDoList.filter((todo) => todo.id !== liId)
  toDoUl.removeChild(li)
  console.log(toDoList)
  for (let i = 0; i < toDoList.length; i++) {
    toDoList[i].id = i
    toDoUl.childNodes[i + 1].id = 'todo' + i
  }
  localStorage.setItem('todolist', JSON.stringify(toDoList))
}

function readToDo() {
  const getToDo = JSON.parse(localStorage.getItem('todolist'))
  if (getToDo && getToDo.length !== []) {
    getToDo.forEach((getToDo) => {
      setToDo(getToDo.text)
    })
  }
}

function setToDo(text) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const delBtn = document.createElement('button')
  const plusId = toDoList.length
  span.innerHTML = text
  delBtn.innerHTML = '❌'
  delBtn.addEventListener('click', removeToDo)
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = 'todo' + plusId
  toDoUl.appendChild(li)
  toDoList.push({
    text: span.innerHTML,
    id: plusId,
  })
  localStorage.setItem('todolist', JSON.stringify(toDoList))
}

function submitToDo(event) {
  event.preventDefault()
  setToDo(toDoInput.value)
  toDoInput.value = ''
}

function init() {
  toDoForm.addEventListener('submit', submitToDo)
  readToDo()
}
init()
