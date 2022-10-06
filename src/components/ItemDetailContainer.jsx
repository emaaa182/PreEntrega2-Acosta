import React,{useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import adidas from "../assets/buzo-adidas.webp";
import fila from "../assets/filaV1.webp";
import bensimon from "../assets/camisa-bensimon.webp";

const prods =[
  {id: 1, nombre: "Buzo Adidas", category: "buzo", desc: "Buzo adidas clasico Running", "precio": 1200, talle: "small", image:adidas},
  {id: 2, nombre: "Buzo Fila", category: "buzo", desc: "Buzo Fila estilo urbano", precio: 1200, talle: "medium", image:fila},
  {id: 3, nombre: "Camisa Bensimon", category: "camisa", desc: "Camisa Bensimon de vestir", precio: 1800, talle: "medium", image:bensimon}
]


const ItemDetailContainer =()=>{

const [data,setData]= useState({})
const {detalleId}= useParams()

useEffect(()=>{
  const getData= new Promise(resolve=>{
    setTimeout(()=>{
      resolve(prods)
    }, 1000)
  })
  getData.then(res=>setData(res.find(prod=>prod.id === parseInt(detalleId))))
}, [])

  return(
    <ItemDetail data={data}/>
  )
}


export default ItemDetailContainer