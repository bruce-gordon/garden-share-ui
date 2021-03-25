import React, { useState } from 'react'
import './Form.scss'
import dropdownData from '../../formOptions/optionData.js'

const Form = ({ submitFunc }) => {

  const [state, setState] = useState({
    itemName: '',
    itemType: '',
    description: '',
    quantity: '',
    unit: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunc(state);
    setState({
      itemName: '',
      itemType: '',
      description: '',
      quantity: '',
      unit: '',
      date: ''
    })
  }

  const handleChange = async (e) => {
    await setState({ ...state, [e.target.name]: e.target.value });
    checkCompletion();
  }

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

  const formOptions = dropdownData.map(dropdown => {
    return (
      <option key={ dropdown.id } value={ dropdown.option }>{ dropdown.option }</option>
    )
  })

  return (
    <div className='form'>
      <form className='form-items'>
        <select className='form-space' name='itemName' onChange={ handleChange } >
          <option value=''>
            Select Item
          </option>
          { formOptions }
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
