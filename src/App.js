
import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import CalculadoraDeQu from './CalcDeQu';
import Resultado from './Resultado';
import ResetBtn from './ResetBtn';
import CalculadoraDeQv from './CalcDeQv';
import Notas from './Notas';
import DownloadBtn from './DonwloadBtn';

function App() {
 
    // Estado de los inputs
  const [qData, setQData] = React.useState(
    {
      A: 0,
      U: 0,
      T: 0,
      V: 0,
      E: 0,
    }
  )
    // Estados de los resultados de las Q
  const [cargaTt, setCargaTt] = React.useState(0)
  const [cargaTv, setCargaTv] = React.useState(0)
    // Estado de unidades w o Kw
  const [unidades, setUnidades] = React.useState(true)
    // Cargas añadidas a la hoja de resultados
  const [cargas, setCargas] = React.useState([])

    // lectura de los inputs
  function handleChange(event) {
    const {name, value} = event.target
    setQData(prevQData => {
      return {
          ...prevQData,
          [name]: value
      }
  })
}
  // calcula la carga térmica de tranmitancias
function calcularQt() {
  setCargaTt(prevCargaTt => prevCargaTt = (Number(qData.A) * Number(qData.U) * Number(qData.T)))
}
  // Calcula la carga térmica de ventilacion
function calcularQv() {
  setCargaTv(prevCargaTv => prevCargaTv = (1.24 * Number(qData.V) * Number(qData.E)* 1.163))  
}
  // Actualiza el resultado de cada carga térmica con cada cambio en los inputs
React.useEffect(() => {
  calcularQt()
  calcularQv()
}, [qData])
  // Añade una nueva carga térmica de tranmitacia a las notas
function añadirCargaTt(){
  const input = window.prompt('Enter a value:');
  const newCharge = {
    id: nanoid(),
    name: input,
    type: "Qu",
    value: cargaTt.toFixed(0),
}
  setCargas(prevCargas => [...prevCargas, newCharge])
}
    // Añade una nueva carga térmica de ventilacion a las notas
function añadirCargaTv(){
  const input = window.prompt('Enter a value:');
  const newCharge = {
    id: nanoid(),
    name: input,
    type: "Qv",
    value: cargaTv.toFixed(0),
}
  setCargas(prevCargas => [...prevCargas, newCharge])
}
  // Maneja el cambio de unidades
function cambioDeUnidades(unidades){
  setUnidades(unidadesPrev => !unidadesPrev)
 
}

React.useEffect(() => {
  
 unidades ?
  setCargas(cargas.map(carga => {
    return { ...carga, value: carga.value * 1000 }}))
  :
  setCargas(cargas.map(carga => {
    return { ...carga, value: (carga.value / 1000).toFixed(2) }}))
},[unidades] )

  // recarga la pagina (todo a 0)
function reload() {
  window.location.reload()
}
  // Descarga un archivo JSON con las notas
const downloadData = () => {
  const data = cargas.map(carga => {
    return { name: carga.name , value: carga.value }})
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'data.json';
  link.click();
};


  return (
    <div className="App">
      <header>
        <h1 className="title">Calculadora de cargas térmicas</h1>
      </header>
    
    <div className='Center'>  
      <main>
          <CalculadoraDeQu
            handleChange={handleChange}
            resultado={cargaTt}
            unidades={unidades}
            addQ={añadirCargaTt}
            />

          <CalculadoraDeQv
            handleChange={handleChange}
            resultado={cargaTv}
            subindice={"V"}
            unidades={unidades}
            addQ={añadirCargaTv}
            />

          <Resultado
          cargas={cargas}
          unidades={unidades}
          cambioDeUnidades={cambioDeUnidades}
          />

      </main>

      <div className='Side'>
          <Notas
            cargas={cargas}
            />
      </div>

     </div>
     <div className='buttons'>
        <ResetBtn reload={reload} />
        <DownloadBtn download={downloadData} />
     </div>
    </div>
  );
}

export default App;
