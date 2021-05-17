// form과 input과 ul에 넣어줘야하니 불러옴 ㅎㅎ

const toDoForm = document.querySelector('.js-toDoList'),
  toDoInput = toDoForm.querySelector('input'),
  toDoUl = toDoForm.querySelector('ul')

const toDoList = []

function readToDo() {
  
}

function setToDo(event) {
  event.preventDefault()
  const li = document.createElement('li')
  const span = document.createElement('span')
  const delBtn = document.createElement('button')
  const plusId = toDoList.length + 1
  span.innerHTML = toDoInput.value
  delBtn.innerHTML = '❌'
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = 'todo' + plusId
  toDoUl.appendChild(li)
  toDoInput.value = ''
  toDoList.push({
    text: span.innerHTML,
    id: plusId,
  })
  localStorage.setItem('todolist', JSON.stringify(toDoList))
}

function init() {
  toDoForm.addEventListener('submit', setToDo)
  
}
init()
