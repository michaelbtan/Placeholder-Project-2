import './ToOrder.css'
import React from 'react'
import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
import { grabResultsToOrder } from '../services/index.js'


export default function ToOrder() {

  const [toOrders, setToOrders] = useState([])
  // const [toggle, setToggle] = useState(false)
  // const params = useParams()
  // const navigate = useNavigate()

  useEffect(() => {
    const getAllToOrders = async () => {
      const res = await grabResultsToOrder()
      console.log(res)
      setToOrders(res)
    }
    getAllToOrders()
  }, [])


  return (
    <div className='toOrderDisplay'>
    <div className='toOrder-Container'>
      {toOrders.map((toOrder) => {
        return (
          <div className='toOrder-boxes' id={toOrder?.id}>
            <h2>Name: {toOrder?.fields?.name}</h2>
            <h4>How Many? {toOrder?.fields?.number}</h4>
            <h3> Notes: {toOrder?.fields?.notes}</h3>
          </div>
        )
      })}
      </div>
      </div>
  )
}