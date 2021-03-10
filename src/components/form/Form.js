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
          <option value='Apples'>Apples</option>
          <option value='Apricots'>Apricots</option>
          <option value='Asparagus'>Asparagus</option>
          <option value='Beans'>Beans</option>
          <option value='Broccoli'>Broccoli</option>
          <option value='Cabbage'>Cabbage</option>
          <option value='Carrots'>Carrots</option>
          <option value='Cauliflower'>Cauliflower</option>
          <option value='Celery'>Celery</option>
          <option value='Corn'>Corn</option>
          <option value='Kale'>Kale</option>
          <option value='Lettuce'>Lettuce</option>
          <option value='Onions'>Onions</option>
          <option value='Peaches'>Peaches</option>
          <option value='Peas'>Peas</option>
          <option value='Peppers'>Peppers</option>
          <option value='Potatoes'>Potatoes</option>
          <option value='Radishes'>Radishes</option>
          <option value='Rhubarb'>Rhubarb</option>
          <option value='Squash'>Squash</option>
          <option value='Strawberries'>Strawberries</option>
          <option value='Tomatoes'>Tomatoes</option>
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
