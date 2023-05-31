const btnEnviarForm = document.getElementById("btn-enviar-form")
const inputs = document.querySelectorAll(".input-form")
const avisos = document.querySelectorAll(".aviso")

btnEnviarForm.addEventListener('click', () => {
    inputs.forEach((input, index) => {
        if(input.value !== ""){
            input.classList.add('validado')
            input.classList.remove('invalidado')
            avisos[index].classList.add('aviso-oculto')
        }else{
            input.classList.add('invalidado')
            input.classList.remove('validado')
            avisos[index].classList.remove('aviso-oculto')
        }
    })
})