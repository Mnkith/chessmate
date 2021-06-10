class Menu {
  static _menus = ['main-menu', 'new-game-menu', 'in-game-menu', 'three-boards']

  static show(menu){
    Menu._menus.forEach( (men) => {
      if(men !== menu)
        document.getElementById(men).style.visibility = 'hidden'
    })
    document.getElementById(menu).style.visibility = 'visible'
  }

}