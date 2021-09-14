export default class Funcionamento {

  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento)
    this.activeClass = activeClass
  }
  
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number) 
  }

  dadosAtuais() {
    this.dataAgora = new Date()
    this.diaAgora = this.dataAgora.getDay()
    this.horarioAgora = this.dataAgora.getUTCHours()
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.includes(this.diaAgora)
    const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]
    return semanaAberto && horarioAberto
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass)
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento()
      this.dadosAtuais()
      this.ativaAberto()
    }
    return this
  }

}