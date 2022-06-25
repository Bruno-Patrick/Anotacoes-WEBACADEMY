const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

function addElement({ name, url }) {
    //...
    const ul = document.getElementById('list') //Captura o <ul></ul>
    const li = document.createElement('li') //Cria um elemento <li></li>
    const trash = document.createElement('button') //Cria um elemento <i></i>
    trash.classList.add('btn') // Adiciona as classes do Bootstrap
    trash.classList.add('btn-sm') // Adiciona as classes do Bootstrap
    trash.classList.add('btn-warning') // Adiciona as classes do Bootstrap
    trash.classList.add('font-weight-bold') // Adiciona as classes do Bootstrap
    trash.textContent = 'Apagar'
    li.textContent = `NAME: ${name}, URL: ${url}  ` // Adiciona o texto desejado dentro da <li>
    li.appendChild(trash) //Insere o icone de lixo dentro da <li>
    ul.appendChild(li) //Insere li dentro da lista <ul>

    removeElement(trash) // Callback para função

}

function removeElement(element) {
    //...
    element.addEventListener('click', () => { //Adiciona um event listener no ícone
        element.parentNode.remove() //remove o elemento anterior, no caso toda a estrutura da <li>
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url) 
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) 
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })

    input.value = ''
})