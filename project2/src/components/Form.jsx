import React from 'react'
import { useState, useEffect } from 'react'
import { postResults } from '../services'
import { useParams, useNavigate } from 'react-router-dom'

export default function Form(props) {

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
    const res = await postResults(newResults)
    // props.setToggle(prevToggle => !prevToggle)
    if (res) {
      navigate('/')
    }
  }
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={number}
          placeholder='How Many Left?'
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type='text'
          value={notes}
          placeholder='Tell Me More'
          onChange={(e) => setNotes(e.target.value)}
        />
        <input type="radio" id="1" name="selector" value="toOrder" />
        <label for="toOrder">toOrder</label>
        <input type="radio" id="2" name="selector" value="toKnow" />
        <label for="toKnow">toKnow</label>
        <input type="radio" id="3" name="selector" value="toFix" />
        <label for="toFix">toFix</label>
        <button>Submit</button>
      </form>
    </div>
  )
}
