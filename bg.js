const bgContainer = document.querySelector('.container')

function randomImg(num) {
  const random = Math.floor(Math.random() * 3)
  bgContainer.style.backgroundImage = `url('./img/bg${random + 1}.jpg')`
}

function init() {
  randomImg(3)
}
init()
