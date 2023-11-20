import React from "react";

const notas = {
    paddingLeft: '3rem',
    
}

export default function Notas(props){


    const noteElements = props.cargas.map((carga) => (
        <h1 key={carga.id}>{` ${carga.name}: ${carga.type} = ${carga.value} w`}</h1>
      ))

    return(
        <div style={notas}>
        {noteElements}
        </div>
    )
}