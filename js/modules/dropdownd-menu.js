import outsideClick from './outsideclick.js'

export default class DropdownMenu {

  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.userEvents = ['touchstart', 'click']
  }
  

  handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, userEvents, () => {
      this.classList.remove('active')
    })
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach(menu => {
      this.userEvents.forEach(userEvent => {
        menu.addEventListener(userEvent, this.handleClick)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent()
    }
    return this
  }
}