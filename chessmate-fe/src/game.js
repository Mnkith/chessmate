class Game {
  constructor(event, site = '', white = 'White', black = 'Black') {
    this.event = event
    this.site = site
    this.white = white
    this.black = black
    // this.piecs = pieces
  }
  // static createNewGame(event, site = '', white = 'White', black = 'Black', pieces = []) {
  //   let game = new Game(event, site, white, black, pieces)
  //   fetch("http://localhost:3000/games", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({event: 'eeee'})
  //   });
  // }
  // static fetchAllGames() {
  //   fetch(`http://127.0.0.1:3000/games`)
  //     .then(resp => resp.json())
  //   // .then(json => initializeBoard(json));
  // }

  // static fetchGame(round = 1) {
  //   let g = {}
  //   return fetch(`http://127.0.0.1:3000/games/${round}`)
  //     .then(resp => resp.json())
  //     .then(json => json);
  //   // return 'gggg'
  //   // return g
  // }

  // setDefaultLayout() {
  //   this.pieces = Game.fetchGame().pieces
  // }
  // static initializeBoard(game) {
  //   pieces = game.pieces
  //   pieces.forEach(p => {
  //     div = document.createElement('div')
  //     div.className = 'piece'
  //     div.innerHTML = p.symbol
  //     div.style.gridArea = p.position
  //     board = document.getElementById('board')
  //     board.appendChild(div)
  //   })
  // }


  persist(){
    // console.log(this)
  // e.preventDefault()

    fetch("http://127.0.0.1:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    }); ;
  }
}