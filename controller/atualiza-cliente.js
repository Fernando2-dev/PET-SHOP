import { clienteService } from "../service/cliente-service.js"

( async() => {
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')
    
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
   
    try{
    const dados = await clienteService.detalhaCliente(id)
     inputNome.value = dados.nome,
     inputEmail.value = dados.inputEmail
    } catch(error){
        window.location.href = '../telas/error.html'
    }
    
    
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento) => {
      evento.defaultPrevented()
     try{
       await clienteService.atualizaCliente(id, inputEmail.value, inputNome.value, )
       window.location.href = '../telas/edicao_concluida.html'
     } catch(error) {
        window.location.href = '../telas/error.html'
     }
      })
    
})()
