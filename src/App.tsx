import Swal from 'sweetalert2'
import Styles from './App.module.css'
import poweredImage from './assets/powered.png'
import leftArrow from './assets/leftarrow.png'
import { useState } from 'react'
import {levels, calculateIMC, Level} from './assets/helpers/imc'
import {GridItem} from './components/gridItem'

const App = () => {
  const [heightField, setheightField] = useState<number>(0);
  const [weightField, setweightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  function calcular() {
    if(heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField));
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite todos os campos corretamente (Não Inserir letras ou caracteres especiais).',
       
      })
    }

  }

  function back() {
    setToShow(null);
    setheightField(0);
    setweightField(0);
  }

  
  return (
    <div className={Styles.main}>
      <header>
        <div className={Styles.headerContainer}>
          <img src={poweredImage} alt="" width={50}/>
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
            disabled = {toShow? true:false}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex:85.5(Em kg)"
            value={weightField > 0? weightField: ''}
            onChange={e => setweightField(parseFloat(e.target.value))}
            disabled = {toShow? true:false}
          />
            <button onClick={calcular} disabled = {toShow? true:false}>Calcular</button>
      
        </div>

        <div className={Styles.rightSide}>
          {!toShow &&
            <div className={Styles.grid}>
              {levels.map((item, key)=>
                <GridItem key={key} item={item}/>
              )}
            </div>
          }

        {toShow &&
          <div className={Styles.rightBig}>
            <div className={Styles.rightArrow} onClick={back}>
              <img src={leftArrow} alt="" width={25}/>
            </div>
            <GridItem item={toShow}/>
          </div>
        }

        </div>
      </div>
      <footer>
        <a href="https://www.linkedin.com/in/hiago-henrique-gomes-a955a6188/" target={'_blank'}>Desenvolvido por Hiago Henrique</a>
      </footer>
    </div>
  )
}

export default App;
