function proxima_pagina()
{
    window.location.href = "diacalendario.html"
}

function inptz()
{
    name_input = document.querySelector(".name").value
    time_input = document.querySelector("#appt").value
    tel_input = document.querySelector("#phone").value
    service_input = document.querySelector(".service").value
    return [name_input ,  time_input , tel_input , service_input]
}

function aulou(name_input,time_input,tel_input,service_input)
{
    tipin = document.querySelector("li").cloneNode(true)
    h2t = tipin.querySelector("h2")
    timeet = tipin.querySelector(".timet")
    cabt = tipin.querySelector(".cabelin")
    ce2t = tipin.querySelector(".celulin")

    h2t.innerHTML = name_input
    timeet.innerHTML = time_input
    cabt.innerHTML = service_input
    ce2t.innerHTML = tel_input

    listaza = document.querySelector("ul")
    listaza.append(tipin)
}

function del_tipin()
{
    tipo = document.querySelectorAll("li")
    console.log(tipo[2])
    tipo[2].parentNode.removeChild(tipo[2])
    localStorage.removeItem("k1")
    localStorage.removeItem("k2")
    localStorage.removeItem("k3")
    localStorage.removeItem("k4")
}

document.addEventListener('DOMContentLoaded', function() {

    if (document.body.textContent.includes("Salvar")) {
    main = document.querySelector("main")
    enviar = document.querySelector(".salvar")
    main.addEventListener('click', function(){localStorage.setItem("k1" , inptz()[0])})
    main.addEventListener('click', function(){localStorage.setItem("k2" , inptz()[1])})
    main.addEventListener('click', function(){localStorage.setItem("k3" , inptz()[2])})
    main.addEventListener('click', function(){localStorage.setItem("k4" , inptz()[3])})
    enviar.addEventListener('click', function(){proxima_pagina()})
    }
    else {
    console.log(localStorage.getItem("k1"))
    console.log(localStorage.getItem("k2"))
    console.log(localStorage.getItem("k3"))
    console.log(localStorage.getItem("k4"))
    if (localStorage.getItem("k1"))
    {aulou(localStorage.getItem("k1"),localStorage.getItem("k2"),localStorage.getItem("k3"),localStorage.getItem("k4"))}
    header = document.querySelector("header")
    header.addEventListener('click', function(){del_tipin()})
    }

})
