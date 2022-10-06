import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'



const Item=({info})=>{
   
    return(    
        <div  className="item-container">   
        <Link to={`/detalle/${info.id}`} className='prod'>
          <h3>{info.nombre}</h3>
            <img src={info.image}/>
            <button>Ver Producto</button>
        </Link>

        </div>
       
    )
}


export default Item