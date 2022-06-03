document.addEventListener('DOMContentLoaded', function() {
 
    header = document.querySelector('header')
    header.style.backgroundColor = '#964B00'
    h1 = document.querySelector('header h1')
    h1.style.color = '#e6b800'
    h2s = document.querySelectorAll('h2')
    h2s[0].style.color = '#e6b800'
    h2s[1].style.color = '#e6b800'
    h2s[2].style.color = '#e6b800'
    main = document.querySelector('main')
    main.style.backgroundColor = '#663300'
    hair_type = document.querySelector('.hair_type')
    // botar submit
    localStorage.setItem('hair type', hair_type.value)
    console.log(localStorage.getItem('hair type'))
    
})