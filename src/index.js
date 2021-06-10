// let game = new Game('eeeee')
// console.log(game)
// game.persist()
document.body.style.backgroundImage = "url('chess.jpg')"
document.body.style.backgroundRepeat = 'no-repeat'

document.body.style.backgroundColor = 'black'
const mainMenu = document.getElementById('main-menu')
const newGameMenu = document.getElementById('new-game-menu')
const newGameBtn = document.getElementById('new-game')
const startGameBtn = document.getElementById('start-game')
const backBtn = document.getElementById('back-to-main')
const board = document.getElementById('board')
const squares = document.querySelectorAll('.square')





setSquaresIds()
Menu.show('main-menu')

newGameBtn.addEventListener('click', () => { Menu.show('new-game-menu') })

backBtn.addEventListener('click', (e) => { Menu.show('main-menu')})

function setSquaresIds() {
  squares.forEach(square => square.id = square.style.gridArea.substr(0, 2))
}

squares.forEach( (square) => square.addEventListener( 'click', () => {
  if(Game.selectedPiece){
    Game.selectedPiece.style.gridArea = square.style.gridArea
    Game.selectedPiece.style.border = ''
    Game.selectedPiece = ''
    Game.updateTurn()
  }
}))


startGameBtn.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
  const ev = document.getElementById('event').value
  // const site = document.getElementById('site').value
  // const white = document.getElementById('white').value
  // const black = document.getElementById('black').value
  // let game = new Game(ev, site, white, black)
  let game = new Game(ev)
  document.body.style.backgroundColor = 'black'
  document.body.style.backgroundImage = ""
  mainMenu.style.visibility = 'hidden'
  newGameMenu.style.visibility = 'hidden'
  board.style.visibility = 'visible'
  game.persist()
  Game.fetchGame()
})

// let game = new Game('ev')
// game.persist()
Game.fetchGame(1)

// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');

//   const pieces = document.querySelectorAll('.piece')
//   let selectedPiece
//   console.log(pieces)
//   pieces.forEach((piece) => piece.addEventListener('click', (e) => {
//     // selectedPiece = piece
//     piece.innerHTML = ''
//     console.log('done')
//     console.log(selectedPiece)
//   }))
// })


