document.body.style.backgroundImage = "url('chess.jpg')"
document.body.style.backgroundRepeat = 'no-repeat'
document.body.style.backgroundColor = 'black'
const mainMenu = document.getElementById('main-menu')

const newGameBtn = document.getElementById('new-game')
const backBtn = document.getElementById('back-to-main')
const retrieveBtn = document.getElementById('retrieve-btn')
const getGameBtn = document.getElementById('get-game-btn')
const retriveGameField = document.getElementById('retrieve-field')
const board = document.getElementById('board')
const gameExitBtn = document.getElementById('game-exit-btn')
const lablesToggle = document.getElementById('lables-toggle')
const squares = document.querySelectorAll('.square')




lablesToggle.addEventListener('change', e => {
  Menu.toggleLables()
})

setSquaresIds()

Menu.show('main-menu')

retrieveBtn.addEventListener('click', () => Menu.show('retrieve-menu'))

newGameBtn.addEventListener('click', (e) => {
  const newGame = new Game('last99')
  Game.setScene()
  newGame.persistAndRetrieve()
})

getGameBtn.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
  const id = parseInt(retriveGameField.value)
  if (id) {
    Game.setScene()
    Game.fetchGame(id)
  }
})

gameExitBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('chess.jpg')"
  document.querySelector('#c-labels').style.visibility = 'hidden'
  document.querySelector('#d-labels').style.visibility = 'hidden'
  lablesToggle.checked = false
  Game.clearBoard()
  Menu.show('main-menu')
})



function setSquaresIds() {
  squares.forEach(square => square.id = square.style.gridArea.substr(0, 2))
}

Game.squareClickHandler()

// const squares = document.querySelectorAll('.square')


