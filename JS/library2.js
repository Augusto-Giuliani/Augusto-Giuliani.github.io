document.addEventListener('DOMContentLoaded', function() {
 
    header = document.querySelector('header')
    header.style.backgroundColor = '#964B00'
    h1 = document.querySelector('header h1')
    h1.style.color = '#e6b800'
    h2s = document.querySelectorAll('h2')
    h2s[0].style.color = '#663300'
    h2s[1].style.color = '#663300'
    h2s[2].style.color = '#663300'
    main = document.querySelector('main')
    main.style.backgroundColor = '#ffe5cc'
    selections = document.querySelectorAll('select')
    verify = 0
    
    search_icon = document.querySelector('#search') 

    search_icon.addEventListener('click',function(event){
        if (selections[0].value != 3 || selections[1].value != 2 || selections[2].value != 4){
            if (verify==0){
                warning = document.createElement('h3')
                last_li = document.querySelector('.last_li')
                warning.innerHTML = 'Nenhum resultado encontrado.'
                warning.style.color = 'red'
                last_li.appendChild(warning)
                verify = 1
            }
            event.preventDefault()
        }
    })
    
})