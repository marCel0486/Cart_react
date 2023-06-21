import { useState, useEffect } from 'react'
import './App.css'
import camiseta from './img/camiseta.png'
import bone from './img/boné.png'
import Header from './componentes/header'


function App() {
  const [carrinho, setCarrinho] = useState(0)

  const adicionaProduto1 = () => {
    setCarrinho(carrinho + 89.90)
  }
  
  
  const retiraProduto1 = () => {
    setCarrinho(carrinho - 89.90)
  }

  const adicionaProduto2 = () => {
    setCarrinho(carrinho + 99.90)
  }

  const retiraProduto2 = () => {
    setCarrinho(carrinho - 99.90)
  }
  

  useEffect(()=>{
    alert('bem vindo a loja !!!')
  },[])

  return (
    <div>

      <Header/>

      <div className='container'>

       <img src={camiseta}/>
       
       <br/>
       <spam>
        <sup>R$</sup>
        89.90
       </spam>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque ad reprehenderit veniam nostrum provident, inventore quam, impedit quos consequuntur, distinctio tempore quo quis accusantium! Dignissimos commodi rem incidunt quos!
        </p>

        <button onClick={adicionaProduto1}>
          Adicionar 
        </button>

        <button onClick={retiraProduto1}>
          retirar 
        </button>
        
       

      </div>


      <div className='container'>

       <img src={bone}/>
       <br/>
       
       <spam>
        <sup>R$</sup>
        99.90
       </spam>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque ad reprehenderit veniam nostrum provident, inventore quam, impedit quos consequuntur, distinctio tempore quo quis accusantium! Dignissimos commodi rem incidunt quos!
        </p>

        <button onClick={adicionaProduto2}>
          Adicionar  
        </button>

        <button onClick={retiraProduto2}>
          retirar 
        </button>
        
       
      </div>

      <p>
        
      </p>

      <p>
         O valor total de compra é : R${carrinho.toFixed(2)}
        </p>

      
    </div>
  )
}

export default App
