import React, { useState } from 'react'
import './Form.scss'

const Form = ({ submitFunc }) => {

  // const [itemName, setItemName] = useState('')
  // const [itemType, setItemType] = useState('')
  // const [description, setDescription] = useState('')
  // const [quantity, setQuantity] = useState('')
  // const [units, setUnits] = useState('')
  // const [date, setDate] = useState('')
  const [state, setState] = useState({
    itemName: '', 
    itemType: '', 
    description: '', 
    quantity: '', 
    units: '', 
    date: '' 
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    submitFunc()
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <div className='form'>
      <form className='form items'>
        <select className='form-space' name='itemName' onChange={ handleChange } >
          <option value=''>
            Select Item
          </option>
          <option value='Potato'>Potato</option>
          <option value='Tomato'>Tomato</option>
          <option value='Zucchuni'>Zucchini</option>
        </select>
        <input className='form-space' type='text' placeholder='Type' value={ state.itemType } name='itemType' onChange={ handleChange } />
        <input className='form-space' type='text' placeholder='Description' value={ state.description } name='description' onChange={ handleChange } />
        <input className='form-space' type='number' placeholder='Quantity' value={ state.quantity } name='quantity' onChange={ handleChange } />
        <input className='form-space' type='text' placeholder='Units (ex: lbs)' value={ state.units } name='units' onChange={ handleChange } />
        <input className='form-space' type='date' placeholder='Date Harvested' value={ state.date } name='date' onChange={ handleChange } />
        <button onClick={ handleSubmit }>Submit</button>
      </form>
    </div>
  )
}

export default Form;
