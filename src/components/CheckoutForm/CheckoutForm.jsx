import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext';

const CheckoutForm = ({ className, finishPurchase }) => {

  const {user} = useContext(UserContext);

  const handleSubmit = (ev) => {

    ev.preventDefault();

    const buyer = {
      name: ev.target.fullName.value,
      phone: ev.target.phoneNumber.value,
      email: ev.target.email.value
    }

    finishPurchase(buyer);

  }

  return (

    <div className={`${className} frosted`}>
      <form action="" onSubmit={handleSubmit}>

        <div>
          <label htmlFor="fullName">Nombre:</label>
          <input className='frosted' type="text" placeholder='Nombre completo' name='fullName' required />
        </div>

        <div>
          <label htmlFor="phoneNumber">Telefono:</label>
          <input className='frosted' type="tel" placeholder='+54 11 12345687' name='phoneNumber' required />
        </div>
        
        <div>
          <label htmlFor="email">E-mail:</label>
          <input className='frosted' defaultValue={user.email} placeholder='nombre@gmail.com' type="email" name='email' required />
        </div>
        
        <input className='submitPurchase frosted' type="submit" value="Finalizar compra" />

      </form>
    </div>
  )
}

export default CheckoutForm