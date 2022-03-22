var nome = window.document.querySelector('#nome')
var email = window.document.querySelector('#email')
var assunto = window.document.querySelector('#assunto')

var okNome= false
var okEmail= false
var okAssunto= false

let mapa = window.document.querySelector('#mapa')
/*
Case sensitive = reconhece letra maiusculas e minusculas

pode ser acessado por: Id - getElementById(), por Seletor - querySelector() e outros 
Ex: let nome = window.document.getElementById('nome')
*/

//Customizando a largura do nome
nome.style.width='50%'
email.style.width='50%'
assunto.style.width='50%'

function validarNome(){
    let txtNome = document.getElementById('txtNome')
        if(nome.value.length < 2){
            txtNome.innerHTML= 'Nome Inválido'
            txtNome.style.color= 'red'
            okNome=false
        } else{
            txtNome.innerHTML= 'Válido!'
            txtNome.style.color= 'green'
            okNome=true
        }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')

        if (email.value.indexOf('@') == -1 ||email.value.indexOf('.') == -1){
            txtEmail.innerHTML='E-mail inválido'
            txtEmail.style.color='red'
            okEmail=false
        } else{
            txtEmail.innerHTML='E-mail válido'
            txtEmail.style.color='green'
            okEmail=true
        }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >=100){
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
        okAssunto = false
    } else{
        txtAssunto.style.display= 'nome'
        okAssunto= true
    }
}

function enviar(){
    if(okNome==true && okEmail==true && okAssunto==true){
        alert('Mensagem enviada com sucesso')
    }
    else{
        alert('Preencha corretamente')
    }

}

function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.height='600px'
}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height='300px'
}