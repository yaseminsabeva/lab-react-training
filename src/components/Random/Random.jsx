import React from "react";

function Random({ min, max }) {
   let randomNum = Math.floor(min + Math.random() * (max - min))
    return(
           <p>{randomNum}</p>
    )
}

export default Random