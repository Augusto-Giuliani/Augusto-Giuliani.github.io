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
    let hair_type = document.querySelector('.hair_type')
    let hair_size = document.querySelector('.size')
    let hair_color = document.querySelector('.color')
    
    search_icon = document.querySelector('#search') 

    search_icon.addEventListener('click',function(event){
        localStorage.setItem('hair type', hair_type.value)
        localStorage.setItem('hair size', hair_size.value)
        localStorage.setItem('hair color', hair_color.value)
        type = localStorage.getItem('hair type')
        size = localStorage.getItem('hair size')
        color = localStorage.getItem('hair color')
        if (type != 'liso' || size != 'curto' || color != 'loiro'){
            event.preventDefault()
        }
        // else
        
    })
    
})