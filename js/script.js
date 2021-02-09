function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((element) => {
        element.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach((element, index) => {
      element.addEventListener('click', () => {
        activeTab(index);
      });
    });

  };
};
initTabNav();


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });
 }
};
initAccordion();


function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.target.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
      });
    
      // Forma alternativa
      // const topo = section.offsetTop;
      // window.scroll({
      //   top: topo,
      //   behavior: 'smooth',
      // });

    };

    linksInternos.forEach(element => {
      element.addEventListener('click', scrollToSection);
    });
  }
};
initScrollSuave();


const sections = document.querySelectorAll('.js-scroll')

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    if (sectionTop < 0) {
      section.classList.add('ativo')
    }
  })
}

window.addEventListener('scroll', animaScroll)