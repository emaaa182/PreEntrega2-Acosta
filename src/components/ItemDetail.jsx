import ItemCount from './ItemCount'
import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

 const ItemDetail = ({data}) => {

    const[goToCart, setGoToCart]= useState(false)

    const onAdd=(quantity)=>{
        setGoToCart(true)

      }

  return (
    <div className='container-detail'>
        <div className='detail'>
            <img src={data.image} alt=""/>
            <div className='content'>
                <h1>{data.nombre}</h1>
                <p>{data.desc}</p>
                <p>Talle:{data.talle}</p>
                <p>Precio:${data.precio}</p>

                {
                    goToCart
                    ?<Link to='/CartWidget'>Terminar Compra</Link>
                    :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
