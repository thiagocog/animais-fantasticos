export default function initAnimaNumeros() {

  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')

    numeros.forEach(numero => {
      const total = +numero.innerHTML
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
    })
  }

  function handleMutation(mutation) {
    const containsAtivo = mutation[0].target.classList.contains('ativo')
    if (mutation[0].target.classList.contains('ativo')) {
      animaNumeros()
      observer.disconnect()
    }
  }

  const observeTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation)

  observer.observe(observeTarget, { attributes: true })
}