import { clienteService } from "../service/cliente-service.js"


const criaNovaLinha = (nome, email, id) => {
    const linhaNovaCliente = document.createElement('tr')
       const conteudo = `<td class="td" data-td>${nome}</td>
               <td>${email}</td>
               <td>
                   <ul class="tabela__botoes-controle">
                       <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                       <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                   </ul>
               </td> `
   linhaNovaCliente.innerHTML = conteudo
   linhaNovaCliente.dataset.id = id
       return linhaNovaCliente
           }

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento) => {
   let botaoDeletar = evento.target.classname === 'botao-simples botao-simples--excluir'
      if(botaoDeletar) {
        try {
         const linhaCliente = evento.target.closet('[data-id]')
         const id = linhaCliente.dataset.id 
         await clienteService.removeCliente(id)
         linhaCliente.remove()
        } 
        catch(error) {
          window.location.href = '../telas/error.html'
        }
    }
})


const render = async () => {
    try {
  const lista =  await clienteService.listaCliente()
      lista.forEach(elemento => { 
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id))
            
    })
    }
    catch(error){
        window.location.href = '../telas/error.html'
    }
 }

render()