/*Configuracion bottom tooltip*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(function(){

    $("#enviarmensaje").click (function(){
        alert("El mensaje fue enviado correctamente")
    });
});

