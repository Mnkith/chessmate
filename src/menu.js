class Menu {
  static _menus = ['main-menu', 'board', 'game-menu']

  static show(...menus) {
    Menu._menus.forEach((men) => {
      if (menus.includes(men))
        document.getElementById(men).style.visibility = 'visible'
      else
        document.getElementById(men).style.visibility = 'hidden'
    })
    // document.getElementById(menu).style.visibility = 'visible'
  }

}