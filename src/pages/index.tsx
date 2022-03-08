import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente'

export default function Home() {
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  const clientes = [
    new Cliente('Ana'  , 34, '1'),
    new Cliente('Maria', 20, '2'),
    new Cliente('Joao' , 55, '3'),
    new Cliente('Pedro', 18, '4')
  ]

  function clienteSelecionado(cliente) {
    setCliente(cliente)
    setVisivel("form")
  }

  function clienteExcluido(cliente) {
    console.log(cliente)
  }

  function novoCliente(cliente) {
    setCliente(Cliente.vazio())
    setVisivel("form")
  }

  function salvarCliente(cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }



  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>

      <Layout titulo="Cadastro Simples">

        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className='mb-4' cor='green' onClick={ novoCliente }>
                Novo Cliente
              </Botao>
            </div>
    
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}

      </Layout>
    </div>
  )
}
