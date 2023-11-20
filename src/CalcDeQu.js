import React from "react";
import Button from "./Button";
import './App.css';


export default function CalculadoraDeQu(props) { 
     
  const Div = {
    fontFamily: "Goudy Old Style", 
    fontSize: "1rem",
    paddingLeft: "1rem",
    backgroundColor: "rgb(0, 150, 199)",
    borderRadius: "2rem",
    color: 'rgb(3, 4, 94)' 
    
  };

const sub = {
    fontFamily: "Arial",
    fontSize: "0.6rem",
    
  };

  const Qt = {
    display: "flex",  
    alignItems: "baseline",
    
  }

  const Input = {
    fontFamily: "Goudy Old Style",
    width: "4rem",
    height: "2rem",
    fontSize: "1.5rem",
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: "0.3rem",
    border: "none",
  }

  const X = {
    paddingLeft: "10px",
    paddingRight: "10px",

  }


    return (
        <div style={Div} >
            <form style={Qt}>
                <h1>Q<sub style={sub}>U</sub></h1>
                <h1 style={X}>=</h1>

                <input 
                  style={Input} 
                  type="number" 
                  name="A" 
                  placeholder= "A" 
                  onChange={props.handleChange} />
                <p>m<sup>2</sup></p>
                <h1 style={X}>x</h1>
                
                <input 
                style={Input} 
                type="number" 
                name="U"
                placeholder="U"
                onChange={props.handleChange}  />
                <p>w/m<sup>2</sup>k</p>

                <h1 style={X}>x</h1>
                <input 
                style={Input} 
                type="number" 
                name="T"
                placeholder="ΔT"
                onChange={props.handleChange}  />
                <p>ºk</p>
            </form> 

            <Button
                resultado={props.resultado}
                subindice="U"
                unidades={props.unidades}
                addQ={props.addQ} />          
        </div>
    )}



    
  