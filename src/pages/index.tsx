import router from 'next/router'

export default function Index() {

   function telaCrud() {
      router.push('/crud')
   }

   return (
      <>
         <h1>Início</h1>

         <button onClick={telaCrud}>
            Tela CRUD
         </button>
      </>
   )
}
