import React from "react";


function BoxColor({r,g,b}) {
    return(
        <div style={{backgroundColor:`rgb(${r},${g},${b})`, height: 100, width:100}}></div>
    )
}

export default BoxColor