let inputBox = document.getElementById('input-field')
let addButton = document.getElementById('btn-add')
let todoContainer = document.getElementById('list-container')

addButton.addEventListener('click', function() {
    let paragraph = document.createElement('p')
    let breakLine = document.createElement('br')

    paragraph.classList.add('paragraph')
    paragraph.innerText = inputBox.value
    todoContainer.appendChild(paragraph)
    todoContainer.appendChild(breakLine)
    inputBox.value = ''

    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick', function() {
        paragraph.style.textDecoration = 'none'
    })
})

let clear = document.getElementById('btn-clear')

clear.addEventListener('click', function() {
    todoContainer.style.display = 'none'
})
