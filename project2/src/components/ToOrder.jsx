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
    <div className='toOrder-Container'>
      {toOrders.map((toOrder) => {
        return (
          <div id={toOrder?.id}>
            <h1>Name: {toOrder?.fields?.name}</h1>
            <h3>Notes: {toOrder?.fields?.notes}</h3>
          </div>
        )
      })}
    </div>
  )
}