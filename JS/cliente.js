function aulas_cria()
{
    window.location.href = "diacalendario.html"
}

function inptz()
{
    name_input = document.querySelector(".name").value
    time_input = document.querySelector("#appt").value
    tel_input = document.querySelector("#phone").value
    service_input = document.querySelector(".service").value
    k = [name_input,time_input,tel_input,service_input]
    return k
}

function aulou(name_input,time_input,tel_input,service_input)
{
    tipin = document.querySelector(".baze").cloneNode(true)
    h2t = tipin.querySelector("h2")
    timeet = tipin.querySelector(".timet")
    cabt = tipin.querySelector(".cabelin")
    ce2t = tipin.querySelector("celulin")

    h2t.innerHTML = name_input
    timeet.innerHTML = time_input
    cabt.innerHTML = service_input
    ce2t.innerHTML = tel_input

    listaza = document.querySelector("ul")
    listaza.append(tipin)
}

document.addEventListener('DOMContentLoaded', function() {

    main = document.querySelector("main")
    enviar = document.querySelector(".salvar")
    main.addEventListener('click', function(){localStorage.setItem = inptz()})
    enviar.addEventListener('click', function(){aulas_cria()})

    if (document.body.textContent.includes(""))

})
