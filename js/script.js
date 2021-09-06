// ---------- Importações de módulos ----------
import ScrollSuave from "./modules/scroll-suave.js"
import initAnimacaoScroll from "./modules/scroll-animacao.js"
import initAccordion from "./modules/accordion.js"
import initTabNav from "./modules/tabnav.js"
import initModal from "./modules/modal.js"
import initTooltip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdownd-menu.js"
import initMenuMobile from "./modules/menu-mobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import initFetchAnimais from "./modules/fetch-animais.js"
import initFetchBitcoin from "./modules/fetch-bitcoin.js"

// ---------- Execuções das funções importadas ----------
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

initAnimacaoScroll()
initAccordion()
initTabNav()
initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
