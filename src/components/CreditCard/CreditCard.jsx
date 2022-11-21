import React from 'react'

function CreditCard(props) {
  return (
    <div style={{backgroundColor:props.bgColor, color:props.color, width: 230, height: 130}}>
        <p>{props.type}</p>
        <p>{props.number}</p>
        <p>{props.expirationMonth}</p>
        <p>{props.expirationYear}</p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
        <p>{props.type}</p>
    </div>
  )
}

export default CreditCard