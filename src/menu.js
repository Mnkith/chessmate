class Menu {
  static _menus = ['main-menu', 'board']

  static show(menu){
    Menu._menus.forEach( (men) => {
      if(men !== menu)
        document.getElementById(men).style.visibility = 'hidden'
    })
    document.getElementById(menu).style.visibility = 'visible'
  }

}