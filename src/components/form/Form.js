import React, { useState } from 'react'
import './Form.scss'

const Form = ({ submitFunc }) => {

  const [state, setState] = useState({
    itemName: '',
    itemType: '',
    description: '',
    quantity: '',
    unit: '',
    date: ''
  });

  // const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    submitFunc(state)
  }

  const handleChange = async (e) => {
    await setState({ ...state, [e.target.name]: e.target.value });
    checkCompletion();
  }

  // const isComplete = (state.itemName && state.itemType && state.description && state.quantity && state.unit && state.date);

  const checkCompletion = () => {
    if (state.itemName && state.itemType && state.description && state.quantity && state.unit && state.date) {
      return true
    } else {
      return false
    }
  }

  const checkDisabled = () => {
    return checkCompletion() ? 'submit-button' : 'disabled-button'
  }

  return (
    <div className='form'>
      <form className='form-items'>
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
        <input className='form-space' type='number' placeholder='Quantity' value={ state.quantity } name='quantity' min='1' onChange={ handleChange } />
        <input className='form-space' type='text' placeholder='unit (ex: lbs)' value={ state.unit } name='unit' onChange={ handleChange } />
        <input className='form-space' type='date' placeholder='Date Harvested' value={ state.date } name='date' onChange={ handleChange } />
        <button className={ checkDisabled() } disabled={ !checkCompletion() } onClick={ handleSubmit }>Submit</button>
      </form>
    </div>
  )
}

export default Form;
