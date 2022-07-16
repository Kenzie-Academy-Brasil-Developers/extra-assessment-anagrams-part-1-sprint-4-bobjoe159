const button = document.getElementById('findButton')

button.addEventListener('click', function () {
  let typedText = document.getElementById('input').value
  getAnagramsOf(typedText)
})

function alphabetize(a) {
  return a.toLowerCase().split('').sort().join('').trim()
}

// FUNÇÃO PARA CHECAR O ANAGRAMA ATRAVÉS DE UM FOR //
function getAnagramsOf(input) {
  let newArr = []
  let inputAnagram = alphabetize(input)
  for (let i = 0; i < palavras.length; i++) {
    let wordAnagram = palavras[i]
    let anagram = alphabetize(wordAnagram)
    if (inputAnagram === anagram) {
      newArr.push(wordAnagram)
    }
  }
  mostrarResultado(newArr)
}
// CRIANDO O RECEPTÁCULO //
const mainContent = document.querySelector('.mainContent')
let divP = document.createElement('div')
divP.classList.add('background')
mainContent.appendChild(divP)

// FUNÇÃO PARA LIMPAR A DIV E MOSTRAR O PRÓXIMO RESULTADO //

function mostrarResultado(newArr) {
  divP.innerHTML = ''
  let resultado = newArr.join(' ')
  let p = document.createElement('p')
  divP.append(p)
  console.log(divP)
  p.innerHTML = resultado
}
