import Styles from './App.module.css'
import poweredImage from './assets/powered.png'
import { useState } from 'react'

const App = () => {
  const [heightField, setheightField] = useState<number>(0);
  const [weightField, setweightField] = useState<number>(0);

  function calcular() {
    if(heightField && weightField) {
      console.log(heightField + weightField)
    }else {
      alert(`Digite todos os campos corretamente (Não Inserir letras ou caracteres especiais).`)
    }

  }


  
  return (
    <div className={Styles.main}>
      <header>
        <div className={Styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>

      <div className={Styles.container}>
        <div className={Styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parametro adotado pela Organização Nacional da Saúde(OMS) para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            autoFocus
            placeholder="Digite a sua altura. Ex:1.7(Em metros)"
            value={heightField > 0? heightField: ''}
            onChange={e => setheightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex:85.5(Em kg)"
            value={weightField > 0? weightField: ''}
            onChange={e => setweightField(parseFloat(e.target.value))}
          />
            <button onClick={calcular}>Calcular</button>
      
        </div>

        <div className={Styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App;
