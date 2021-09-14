import outsideClick from "./outsideclick.js"
export default class MenuMobile {

  constructor(button, list, events) {
    this.menuButton = document.querySelector(button)
    this.menuList = document.querySelector(list)
    this.eventos = events != undefined ? events : ['touchstart', 'click']
    this.activeClass = 'active'
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass)
    this.menuButton.classList.add(this.activeClass)
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menuButton.classList.remove(this.activeClass)
    })
  }

  addMenuMobileEvents() {
    this.eventos.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu))
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents()
    }
    return this
  }
}