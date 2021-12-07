import React from 'react'
import './Form.css'
import { useState, useEffect } from 'react'
import { postResultsToKnow, postResultsToOrder, postResultsToFix } from '../services'
import { useParams, useNavigate } from 'react-router-dom'
// import { BASE_URL_toKnow } from '../services/index.js'


export default function Form() {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [notes, setNotes] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  // useEffect(() => {
  //   if (props.results) {
  //     const foundResults = props.results.find(result => {
  //       return result.id === params.id
  //     })
  //     if (foundResults) {
  //       setName(foundResults.fields.name)
  //       setNumber(foundResults.fields.number)
  //       setNotes(foundResults.fields.notes)
  //     }
  //   }
  // }, [params.id, props.results])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newResults = {
      name,
      number,
      notes
    }
    // if (props.results) {
    //   const res = await editRecipies(newRecipie, params.id)
    //   props.setToggle(prevToggle => !prevToggle)
    //   if (res) {
    //     navigate(`/recipies/${params.id}`)
    //   }
    // } else {

    const res = await postResultsToKnow(newResults)
    if (res) {
      console.log("hit submit")
      navigate('/')
    }
    // // navigate('/')
    // // props.setToggle(prevToggle => !prevToggle)
    // if (res) {
    //   console.log("hit submit")
    //   navigate('/')
    // }
  }
  // }

  return (
    <div className="input-form">
      <h1>Tell Me What I Want To Know!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        /> <br />
        <input
          type='text'
          value={number}
          placeholder='How Many Left?'
          onChange={(e) => setNumber(e.target.value)}
        /> <br />
        <textarea className='inputNotes'
          type='text-area'
          value={notes}
          placeholder='Tell Me More...'
          onChange={(e) => setNotes(e.target.value)}
        /> <br />
        <input type="radio" id="1" name="selector" value="toOrder" />
        <label for="toOrder">to Order</label>
        <input type="radio" id="2" name="selector" value="toKnow" />
        <label for="toKnow">to Know</label>
        <input type="radio" id="3" name="selector" value="toFix" />
        <label for="toFix">to Fix</label> <br />
        <button className='submitButton'>Submit</button>
      </form>
    </div>
  )
}
