import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import adidas from "../assets/buzo-adidas.webp";
import fila from "../assets/filaV1.webp";
import bensimon from "../assets/camisa-bensimon.webp";


const prods = [
  {id: 1, nombre: "Buzo Adidas", category: "buzos", desc: "Buzo adidas clasico Running", "precio": 1200, talle: "small", image:adidas},
  {id: 2, nombre: "Buzo Fila", category: "buzos", desc: "Buzo Fila estilo urbano", precio: 1200, talle: "medium", image:fila},
  {id: 3, nombre: "Camisa Bensimon", category: "camisas", desc: "Camisa Bensimon de vestir", precio: 1800, talle: "medium", image:bensimon}

]




 const ItemListContainer = () => {
  
  const [data, setData] = useState([])

  const {categoriaId}= useParams()


  useEffect(()=>{
    const getData= new Promise(resolve=>{
      setTimeout(()=>{
        resolve(prods)
      }, 1000)
    })
    if(categoriaId){
      getData.then(res=>setData(res.filter(prod=>prod.category === categoriaId)))
    }else{
      getData.then(res=>setData(res))
    }



  },[categoriaId])


  return (
   <>
    <ItemList data={data}/>
   </>
  )
}

export default ItemListContainer