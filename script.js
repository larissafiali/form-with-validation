const inputs = document.querySelectorAll('.inputs-border');
const btnSend = document.querySelector('.btn-send');

inputs.forEach(function(input){
    input.addEventListener('click', function(){
        input.classList.remove('inputs-border')
        input.classList.remove('placeholder-color')
        input.classList.add('border-new')
        input.classList.add('placeholder-new-color')

    })
})

btnSend.addEventListener('click',(event)=>{
    event.preventDefault()
    inputs.forEach((elemento)=>{
        if(elemento.value === ""){
            elemento.classList.remove('inputs-border')
            elemento.classList.remove('border-new')
            elemento.classList.add('border-error')
            elemento.nextElementSibling.classList.add('visivel')
        }else{
            elemento.classList.remove('border-error')
            elemento.nextElementSibling.classList.remove('visivel')
            elemento.classList.add('border-filled')
        }
    })
})