// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//   },
//   ativar() {
//     this.element().classList.add('ativo')
//   }
// }

// function Dom(seletor) {
//   this.element = () => {
//     return document.querySelector(seletor)
//   }
//   this.ativar = (classe) => {
//     this.element().classList.add(classe)
//   }
// }

// const li = new Dom('li')

// EXERCÍCIO

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
  this.andar = () => {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

function Person(nome, idade) {
  this.nome = nome
  this.idade = idade
  console.log(`${this.nome} tem ${this.idade} anos.`);
}

const joao = new Person('João', 31)
const maria = new Person('Maria', 25)
const bruno = new Person('Bruno', 48)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  this.elements = document.querySelectorAll(seletor)
  this.addClass = (classe) => {
    this.elements.forEach((element) => {
      element.classList.add(classe)
    })
  }
  this.removeClass = (classe) => {
    this.elements.forEach((element) => {
      element.classList.remove(classe)
    })
  }
}

const lis = new Dom('li')
lis.addClass('azul')
lis.addClass('verde')
lis.removeClass('azul')
