let game = new Game('eeeee')
// console.log(game)
// game.persist()
document.body.style.backgroundImage = "url('chess.jpg')"
const mainMenu = document.getElementById('main')
const newGameBtn = document.getElementById('new-game')
const startGameBtn = document.getElementById('start-game')
const backBtn = document.getElementById('back-to-main')

newGameBtn.addEventListener('click', () => {
  mainMenu.style.zIndex = -1
})

backBtn.addEventListener('click', (e) => {
  e.preventDefault()
  mainMenu.style.zIndex = 5
  // e.stopPropagation()
})

startGameBtn.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
  const ev = document.getElementById('event').value
  const site = document.getElementById('site').value
  const white = document.getElementById('white').value
  const black = document.getElementById('black').value
  let game = new Game(ev, site, white, black)
  document.body.style.backgroundColor = black
  mainMenu.style.visibility = 'hidden'
  game.persist()
  

})