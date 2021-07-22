export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault()
      const href = event.target.getAttribute('href')
      const section = document.querySelector(href)
      section.scrollIntoView({
        behavior: 'smooth',
      })
    
      // Forma alternativa
      // const topo = section.offsetTop;
      // window.scroll({
      //   top: topo,
      //   behavior: 'smooth',
      // });

    }

    linksInternos.forEach(element => {
      element.addEventListener('click', scrollToSection)
    })
  }
}