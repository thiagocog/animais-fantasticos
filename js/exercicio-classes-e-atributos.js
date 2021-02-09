// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');
console.log(itensMenu);

itensMenu.forEach(item => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item, index) => {
  if (index > 0) item.classList.remove('ativo');
});

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img');

const temOuNao = imagens.forEach(item => {
  console.log(item.hasAttribute('alt'));
});


// Modifique o href do link externo no menu

const linkExterno = document.querySelector('[href^="http"]');
console.log(linkExterno);

linkExterno.setAttribute('href', 'http://www.bikcraft.com');