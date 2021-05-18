const weatherEl = document.querySelector('.js-weather')

const coordsKey = 'coords'
const coordsAPI_Key = '978a4cff91d86e738eebb82863500e06'

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${coordsAPI_Key}&units=metric`,
  )
    .then((response) => response.json())
    .then((json) => {
      const temp = json.main.temp
      const pos = json.name
      weatherEl.innerHTML = `${temp}℃ - ${pos}`
    })
}

function getCoords(pos) {
  const latitude = pos.coords.latitude
  const longitude = pos.coords.longitude
  const obj = {
    latitude,
    longitude,
  }
  localStorage.setItem(coordsKey, JSON.stringify(obj))
  getWeather(latitude, longitude)
}

function errorCoords() {
  console.log('Cannot get coords')
}

function loadCoords() {
  const getStorage = JSON.parse(localStorage.getItem(coordsKey))
  if (getStorage === null) {
    navigator.geolocation.getCurrentPosition(getCoords, errorCoords)
  } else {
    getWeather(getStorage.latitude, getStorage.longitude)
  }
}

function init() {
  loadCoords()
}
init()
