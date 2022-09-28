export const listaClientes = () => {
   return fetch(`http://localhost:3000/profile`)
   .then((resposta) => {
    if(resposta.ok){
        return resposta.json()
    }
    throw new Error('nao foi possivel listar os clientes ')
})}

const criaCliente = () => {
    return fetch(`http://localhost:3000/profile`, {
       method : 'POST' ,
        headers : {
            'content-type' : 'application/json'
        },
            body : JSON.stringify({
                nome:nome,
                nome:email
            }).then(resposta => {
                if(resposta.ok){
                    return resposta.body
                }
                throw new Error('nao foi possivel criar o cliente ')
                
                
            })
        

    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method : 'DELETE', 
}).then( resposta => {
    if(!resposta.ok) {
        throw new Error('nao foi possivel remover o cliente ')
                
    }
}) 
   
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok) {
        resposta.json()
        } 
        throw new Error('nao foi possivel detalhar o cliente ')
                
    })
}

const atualizaCliente = (id, email, nome) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method : 'PUT',
        headers : {
         'Content-type' : 'application/json'
        }, 
        body :JSON.stringify({
            nome, 
            email
        })
    }).then(resposta => {
        if(resposta.ok){
        return resposta.json()
        } 
        throw new Error('nao foi possivel atualizar o cliente ')
                
    })
}

export const clienteService = {
    listaClientes, 
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
