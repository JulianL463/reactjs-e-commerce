import React from 'react'
import { Link } from 'react-router-dom'

const SuccesfullPurchase = ({className, purchaseId}) => {
  return (
    <div className={`${className} frosted`}>
      <h2>Su compra se completó con exito!</h2>
      <h3>el número de compra es: <br/> <span>{purchaseId}</span></h3>
      <Link className='back' to={'/'}><div className='frosted'>Volver a productos</div></Link>
    </div>
  )
}

export default SuccesfullPurchase