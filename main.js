// 7035c60c
import axios from 'axios'

axios.get('http://www.omdbapi.com/?apikey=7035c60c&s=Dragon').then(res => {
  console.log(res)
  const h1El = document.querySelector('h1')
  const imgEl = document.querySelector('img')
  h1El.textContent = res.data.Search[7].Title
  imgEl.src = res.data.Search[7].Poster
})