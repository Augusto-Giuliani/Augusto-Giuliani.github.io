document.addEventListener('DOMContentLoaded', function() {
 
    header = document.querySelector('header')
    header.style.backgroundColor = '#964B00'
    h1 = document.querySelector('header h1')
    h1.style.color = '#e6b800'
    body = document.querySelector('body')
    body.style.backgroundColor = '#ffe5cc'
    text = document.querySelector('input[type="text"]')
    submit = document.querySelector('input[type="submit"]')
    client_name = document.querySelector('.color')
    verify = 0

    submit.addEventListener('click', function(event) {
        value = text.value
        if (value != 'josé'){
            event.preventDefault()
            if (verify==0){
                warning = document.createElement('h3')
                form = document.querySelector('form')
                warning.innerHTML = 'Nenhum resultado encontrado, por favor preencha o campo corretamente (em letra minúscula).'
                warning.style.color = 'red'
                form.appendChild(warning)
                verify = 1
            }
        } 
    })

})

