import React from 'react'

function Rating({children}) {
    const rate = Math.ceil(children)
  return (
    <div>
    <div>☆</div>
    <div>☆</div>
    <div>☆</div>
    <div>☆</div>
    <div>☆</div>
    </div>
  )
}

export default Rating