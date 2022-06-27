const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')
let tableLength = 0

function addElement({ name, url }) {
    //...
    tableLength += 1
    const tbody = document.getElementById('content-table') //Captura o <ul></ul>
    const tr = document.createElement('tr') //Cria um elemento <li></li>
    const thLength = document.createElement('th') //Cria um elemento
    const thName = document.createElement('th')
    const thURL = document.createElement('th')
    const thAction = document.createElement('th')
    const trash = document.createElement('button') //Cria um elemento <i></i>

    trash.classList.add('btn') // Adiciona as classes do Bootstrap
    trash.classList.add('btn-sm') // Adiciona as classes do Bootstrap
    trash.classList.add('btn-warning') // Adiciona as classes do Bootstrap
    trash.classList.add('font-weight-bold') // Adiciona as classes do Bootstrap
    trash.textContent = 'Apagar'

    thLength.ATTRIBUTE_NODE = 'scope=row'
    thLength.textContent = `${tableLength}`

    thName.ATTRIBUTE_NODE = 'scope=row'
    thName.textContent = `${name}`

    thURL.ATTRIBUTE_NODE = 'scope=row'
    thURL.textContent = `${url}`

    thAction.appendChild(trash)
    tr.appendChild(thLength)
    tr.appendChild(thName)
    tr.appendChild(thURL)
    tr.appendChild(thAction)
    tbody.appendChild(tr)

    removeElement(trash) // Callback para função
}

function removeElement(element) {
    //...
    element.addEventListener('click', () => { //Adiciona um event listener no ícone
        element.parentNode.parentNode.remove() //remove o elemento anterior, no caso toda a estrutura da <li>
        tableLength -= 1
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