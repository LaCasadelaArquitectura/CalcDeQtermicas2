import React from "react";

const button = {
    height: "3rem",
    width: "10rem",
    borderRadius: "0.3rem",
    border: "1px solid rgb(0, 0, 0)",
    boxShadow: "1px 1px 2px rgb(0, 0, 0)",
    marginRight: "1rem",
    fontFamily: "Goudy Old Style",
    fontSize: "1.5rem",
    backgroundColor: "rgb(3, 4, 94)",
    color: "rgb(202, 240, 248)",
    fontWeight: "bold",
    cursor: "pointer",
    alignSelf: "center",
    marginTop: "1rem",
  }   
  
export default function ResetBtn(props) {

    return(
        <button 
        style={button}
        onClick={props.reload}>
            Reset
        </button>

    )
}