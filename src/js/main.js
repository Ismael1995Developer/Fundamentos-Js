// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

// função de validação bootstrap
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
    const buttons = document.querySelectorAll('button:not(.limpar)') // todos os botões
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        forms.forEach(form => {
          if (!form.checkValidity()) {
            form.classList.add('was-validated')
          } else {
            form.classList.add('was-validated')
            console.log("Formulário válido!") // aqui você poderia disparar algo
          }
        })
      })
    })
  })()
  
  
  

// função de calculo de idade 
document.querySelector("#validar").addEventListener("click", () => {

    const input = document.querySelector("#inputDate");
    const display = document.querySelector("#display");
    const valor = input.value; 
    
    // validar se o campo ta vazio 
    if(!valor) {
        alert("Selecine uma data!");
        return;
    };

    // Converter para objeto e quebrar partes 
    const [ano, mes, dia] = valor.split("-").map(Number);
    const dataNasc = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    if (hoje.getMonth < mes - 1 || (hoje.getMonth() === mes - 1 && hoje.getDate() < dia)) {
        idade--;
    }
    display.value = idade;
});

// função limpar 

document.querySelectorAll('.limpar').forEach(btn => {
    btn.addEventListener("click", () => {
     document.querySelectorAll('.limpavel').forEach(input => input.value = "");
     console.log("Limpando os campus");
    });
});

// função de calcular temperatura 
document.querySelector("#btnConv").addEventListener("click", () => {

    const inputFah = document.querySelector("#inputFah");
    const inputCel = document.querySelector("#inputCel");
    const Faherenheit = Number(inputFah.value);
    const Celsius = Number(inputCel.value);

    //validar se esta campo vasio 
    if(!Faherenheit && !Celsius) {
        alert("Preencher os campos");
        return;
    }

    // calculo de temperatura Faherenheit 
    
    if (inputCel.value !== "" && inputFah.value === "") {
        let temperaturaFah = (Celsius * 9 / 5) + 32;
        inputFah.value = temperaturaFah.toFixed(2);
        return;
    }

    // calculo de temperatura Celsius 

    if (inputFah.value !== "" && inputCel.value === "") {
        let temperaturaCel = (Faherenheit - 32) * 5 / 9;
        inputCel.value = temperaturaCel.toFixed(2);
        return;
    } 

    alert("Prencha apenas um dos campos para converter.")
    
});

// função calculo de media das notas 

document.querySelector("#btnCal").addEventListener("click", () => {

    const n1 = document.querySelector("#inputNot1");
    const n2 = document.querySelector("#inputNot2");
    const n3 = document.querySelector("#inputNot3");
    const nota1 = (n1.value);
    const nota2 = (n2.value);
    const nota3 = (n3.value);

   
    // calculo de media e valida campo 
    if(nota1.trim() === "" || isNaN(Number(nota1)) ||
    nota2.trim() === "" || isNaN(Number(nota2)) ||
    nota3.trim() === "" || isNaN(Number(nota3))){
        alert("Preencha todos os campos com numero válidos!");
        return;
    }


    let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    console.log("resultado ", media);
    console.log("nota 1", nota1);
    console.log("nota 2", nota2);
    console.log("nota 3", nota3);

    document.querySelector("#displayMed").value = media.toFixed(2);

    if(media >= 7) { 
        document.querySelector("#aprovar").innerHTML = "Aprovado";
    } else if(media >= 5 && media <= 7) {
        document.querySelector("#aprovar").innerHTML = "Recuperação";
    } else {
        document.querySelector("#aprovar").innerHTML = "Reprovado";
    }
    document.querySelector("#btnReset").addEventListener('click', () => {
        document.querySelector("#aprovar").innerHTML = "Media de Notas";
    })

})

//função contagem de texto

document.querySelector("#btnContar").addEventListener("click", () => {

    const textComplet = document.querySelector("#textComplet");
    const texto = textComplet.value;
    const inputResult = document.querySelector("#inputResult");

    // validação de campo vazio 
    if(texto === "") {
        alert("Preencher o campo vazio!")
        return;
    }
    // remover mútiplos espaços e quebras de linhas 

    const palavras = texto.trim().split(/\s+/).filter(Boolean);

    inputResult.value = palavras.length;
});

// função atualização pagina 

window.addEventListener("DOMcontendLoaded", () => {
    // limpar inputs
    document.querySelectorAll("input").forEach(input => input.value = "");

    // limpar texteareas
    document.querySelectorAll("textarea").forEach(textarea => textarea.value = "");
})