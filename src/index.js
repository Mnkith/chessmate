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

squares.forEach((square) => square.addEventListener('click', () => {
  if (Game.selectedPiece) {
    // const sParent = square.parentElement
    // const t = Game.selectedPiece
    // t.animate([
    //   // keyframes
    //   { transform: `translateY(${t.offsetTop}px)` },
    //   { transform: `translateY(${square.offsetTop}px)` }
    // ], {
    //   // timing options
    //   duration: 1000,
    //   // iterations: Infinity
    // })
    // setTimeout(() => {
    Game.selectedPiece.style.gridArea = square.style.gridArea
    Game.selectedPiece.dataset.position = square.style.gridArea.slice(0, 2)
    Game.selectedPiece.style.border = ''
    Game.switchTurn()

    fetch(`http://localhost:3000/games/${Game.currentGameId}/pieces/${Game.selectedPiece.dataset.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        position: Game.selectedPiece.dataset.position
      }),
    })
    Game.selectedPiece = ''
  }
}))

