import React from 'react'
import './Form.scss'

const Form = () => {
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
      </form>
    </div>
  )
}

export default Form;
