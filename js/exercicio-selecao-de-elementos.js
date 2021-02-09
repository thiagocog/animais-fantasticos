// Retorne no console todas as imagens do site
const allImages = document.getElementsByTagName('img');
console.log(allImages);

const allImagesNode = document.querySelectorAll('img');
console.log(allImagesNode);

const imagesArray = Array.from(allImages);
console.log(imagesArray);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagesImages = document.querySelectorAll('[src^="/img/imagem"]');
console.log(imagesImages);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

const ultimoParagrafo = paragrafos[--paragrafos.length]; // igual a [paragrafos.length - 1]
console.log(ultimoParagrafo);