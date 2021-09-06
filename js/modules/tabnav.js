export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = 'ativo'
  }

  activeTab(index) {
    this.tabContent.forEach((element) => {
      element.classList.remove(this.activeClass)
    })
    const direcao = this.tabContent[index].dataset.anime
    this.tabContent[index].classList.add(this.activeClass, direcao)
  }

  // adiciona os eventos às tabs
  addTabNavEvent() {
    this.tabMenu.forEach((element, index) => {
      element.addEventListener('click', () => this.activeTab(index))
    })
  }

  init() {
    
    if (this.tabMenu.length && this.tabContent.length) {
      // ativando primeiro item
      this.activeTab(0)

      this.addTabNavEvent()
    }

    return this
  }

}