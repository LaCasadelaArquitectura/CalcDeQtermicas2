import React from "react";


export default function Button(props){
   
   const buttonContainer = {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        margiBottom: "2rem",
        paddingLeft: "4.5rem",  
        color: 'rgb(3, 4, 94)',
       
      }
      
    const button = {
        height: "3rem",
        width: "5rem",
        borderRadius: "0.3rem",
        border: "1px solid rgb(0, 0, 0)",
        boxShadow: "1px 1px 2px rgb(0, 0, 0)",
        marginRight: "1rem",
        fontFamily: "Goudy Old Style",
        fontSize: "1.1rem",
        backgroundColor: "rgb(3, 4, 94)",
        color: "rgb(202, 240, 248)",
        fontWeight: "bold",
        cursor: "pointer",
      }   


    return(
<div style={buttonContainer}>
                <button 
                    style={button} 
                    onClick={props.addQ}
                    >Añadir
                    
                    </button>
                <h1>Q<sub style={{fontSize: "1rem"}}>{props.subindice}</sub></h1>
                <h1>=</h1>
                <h1>{props.unidades ? props.resultado.toFixed(0) + "W" : (props.resultado/1000).toFixed(2) + "Kw" }</h1>
               
                            
        </div>

    )


}