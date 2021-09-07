export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this)
  }

  // recebe um elemento do dom, com número em seu texto
  // incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
    const total = Number(numero.innerHTML)
    const incremento = Math.floor(total / 100)
    let start = 0
    const timer = setInterval(() => {
      start += incremento
      numero.innerHTML = start
      if (start >= total) {
        numero.innerHTML = total
        clearInterval(timer)
      }
    }, 20 * Math.random())
  }
  
  // ativa incrementar número para cada número selecionado do DOM
  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero))
  }

  // função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.animaNumeros()
      this.observer.disconnect()
    }
  }

  // adiciona o MutationObserver para verificar quando a classe 'ativo' é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}