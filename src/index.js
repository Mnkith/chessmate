document.body.style.backgroundImage = "url('chess.jpg')"
document.body.style.backgroundRepeat = 'no-repeat'
document.body.style.backgroundColor = 'black'
const mainMenu = document.getElementById('main-menu')
const newGameBtn = document.getElementById('new-game')
const backBtn = document.getElementById('back-to-main')
const board = document.getElementById('board')
const squares = document.querySelectorAll('.square')





setSquaresIds()
Menu.show('main-menu')

newGameBtn.addEventListener('click', (e) => { 
  e.preventDefault()
  e.stopPropagation()
  const newGame = new Game('last99')
  newGame.setScene()
  newGame.persistAndRetrieve()
  // console.log(newGame._id)
  // Game.fetchGame(10)
})

// backBtn.addEventListener('click', (e) => { Menu.show('main-menu')})

function setSquaresIds() {
  squares.forEach(square => square.id = square.style.gridArea.substr(0, 2))
}

squares.forEach( (square) => square.addEventListener( 'click', () => {
  if(Game.selectedPiece){
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




