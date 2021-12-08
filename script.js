var frames

function digita(num){
    var numero = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = numero + num
}

function limpa(){
    document.getElementById('tela').innerHTML = ''
}

function resultado(){
    var calculo = document.getElementById('tela').innerHTML
    if(calculo != ''){
        document.getElementById('tela').innerHTML = eval(calculo)
    }else {
        alert('Nada para calcular')
    }
}

// horas

function pegahora(){
    var hora = document.getElementById('hora')
    var horario = new Date()
    var segundos = horario.getSeconds()
    var minutos = horario.getMinutes()
    var horas = horario.getHours()

    if(segundos < 10){
        segundos = '0' + segundos
    }

    if(minutos < 10){
        minutos = '0' + minutos
    }

    if(horas < 23){
        horas = horas +1
    }

    if(horas < 10){
        horas = '0' + horas
    }

    hora.innerHTML = `${horas}:${minutos}:${segundos}`
}

//data
function pegadata(){
    var data = document.getElementById('data')
    var date = new Date()
    var dia = date.getDate()
    var mes = date.getMonth()
    var ano = date.getFullYear()

    if(dia < 10){
        dia = '0'+dia
    }
    if(mes < 10){
        mes = '0'+mes
    }
    data.innerHTML = `${dia}/${mes}/${ano}`
}


function horaedata(){
    pegahora()
    pegadata()
    frames = requestAnimationFrame(horaedata)
}
function inicia(){
    cancelAnimationFrame(frames)
    horaedata()
}

window.addEventListener('load', inicia)