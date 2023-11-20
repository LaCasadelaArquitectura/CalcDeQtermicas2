import React from "react";

export default function Resultado(props) {

    const container = {
        backgroundColor: 'rgb(173, 232, 244)',
        paddingTop: '0.1rem',
        textAlign: 'center',
        paddingRight: '1rem',
        paddingBottom: '0.1rem',
        borderRadius: '2rem',
        color: 'rgb(3, 4, 94)'
      }
      
      const button = {
        height: "3rem",
        width: "3.3rem",
        borderRadius: "0.3rem",
        border: "none",
        marginLeft: "0.5rem",
        fontFamily: "Goudy Old Style",
        fontSize: "2rem",
        backgroundColor: "rgb(3, 4, 94)",
        color: "rgb(202, 240, 248)",
        fontWeight: "bold",
        cursor: "pointer",  
      }
      
      const block = {
        display: 'inline-block',
      }

      const [result, setResult] = React.useState(0)

      React.useEffect(() => {
        let resultado = props.cargas.map(carga => Number(carga.value))
        let res = resultado.length > 0 ? resultado.reduce((a, b) => a + b, 0) : 0
        setResult(res)
      }, [props.cargas])

    
      return (
        <div style={container}>
          <h1>Carga térmica total</h1>
          <h1 style={block}>Q<sub>t</sub>
            {` = ${result}`}
          </h1>
      
          <button
            style={{ ...button, display: 'inline-block' }}
            onClick={props.cambioDeUnidades}>
            {props.unidades ? "W" : "Kw"}
          </button>
        </div>
      )
}      