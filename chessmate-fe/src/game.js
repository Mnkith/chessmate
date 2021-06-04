class Game {
  constructor(event, site, white = 'White', black = 'Black', pieces = []) {
    this.event = event
    this.site = site
    this.white = white
    this.black = black
    this.piecs = pieces
  }

  static fetchAllGames() {
    fetch(`http://127.0.0.1:3000/games`)
      .then(resp => resp.json())
    // .then(json => initializeBoard(json));
  }

  static fetchGame(round = 1) {
    let g = {}
    return fetch(`http://127.0.0.1:3000/games/${round}`)
      .then(resp => resp.json())
      .then(json => json);
    // return 'gggg'
    // return g
  }

  setDefaultLayout() {
    this.pieces = Game.fetchGame().pieces
  }
  static initializeBoard(game) {
    pieces = game.pieces
    pieces.forEach(p => {
      div = document.createElement('div')
      div.className = 'piece'
      div.innerHTML = p.symbol
      div.style.gridArea = p.position
      board = document.getElementById('board')
      board.appendChild(div)
    })
  }


  // set persist(){

  // }
}