const ulEl = document.querySelector('ul')
for (let i = 1; i < 11; i++) {
  const li = document.createElement('li');
  if(i < 9) {
    li.textContent = `Warrior - ${i}`
  }else if(i >= 9){
    switch(i) {
      case 9:
        li.textContent = `Warrior - Commander`
        li.addEventListener('click', function() {
          console.log("저는 이 무리의 부대장입니다.")
        })
        break
      case 10:
        li.textContent = `Warrior - Leader`
        li.addEventListener('click', function() {
          console.log("저는 이 무리의 대장입니다.")
        })
        break
    }
  }
  ulEl.appendChild(li)
}

