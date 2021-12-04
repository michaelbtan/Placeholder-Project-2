import React from 'react'
import './ToKnow.css'
import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
import { grabResultsToKnow } from '../services/index.js'


export default function ToKnow() {

  const [toKnows, setToKnows] = useState([])
  // const [toggle, setToggle] = useState(false)
  // const params = useParams()
  // const navigate = useNavigate()

  useEffect(() => {
    const getAllToKnows = async () => {
      const res = await grabResultsToKnow()
      console.log(res)
      setToKnows(res)
    }
    getAllToKnows()
  }, [])


  return (
    <div className='toKnowDisplay'>
    <div className='toKnow-Container'>
      {toKnows.map((toKnow) => {
        return (
          <div className='toKnow-boxes' id={toKnow?.id}>
            <h2>Name: {toKnow?.fields?.name}</h2>
            <h3>Notes: {toKnow?.fields?.notes}</h3>
          </div>
        )
      })}
      </div>
      </div>
  )
}