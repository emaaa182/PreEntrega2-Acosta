import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    
    <div className='bg-light' style={{fontSize:'32px', width:'42px', height:'44px'}}>

     <FontAwesomeIcon icon={faCartShopping}/>

    </div>
  )
}

export default CartWidget