import React from 'react'
import './Form.scss'

const Form = ({ submitFunc }) => {

  const handleSubmit = () => {
    submitFunc()
  }

  return (
    <div className='form'>
      <form className='form items'>
        <select className='form-space'>
          <option value=''>
            Item Name
          </option>
          {/* other options */}
        </select>
        <input className='form-space' type='text' placeholder='Type' />
        <input className='form-space' type='text' placeholder='Description' />
        <input className='form-space' type='number' placeholder='Quantity' />
        <input className='form-space' type='text' placeholder='Units (ex: lbs)' />
        <input className='form-space' type='date' placeholder='Date Harvested' />
        <button onClick={ handleSubmit }>Submit</button>
      </form>
    </div>
  )
}

export default Form;
