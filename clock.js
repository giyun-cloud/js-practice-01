const clockContainer = document.querySelector('.js-clock'),
  clockTitle = clockContainer.querySelector('h1')

function getTime() {
  const time = new Date()
  const time2 = time.toLocaleTimeString('it-IT')
  clockTitle.innerHTML = time2
  // clockTitle.innerHTML = `${
  //   time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
  // }:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}:${
  //   time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()
  // }`
}

function init() {
  getTime()
  setInterval(getTime, 1000)
}
init()
