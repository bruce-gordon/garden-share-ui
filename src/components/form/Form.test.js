import { render, screen } from '@testing-library/react';
import Form from './Form';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Form', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )
  })

  it.skip('should render an input for Type', () => {
    const typeInput = screen.getByPlaceholderText('Type')
    expect(typeInput).toBeInTheDocument()
  })

  it.skip('should render an input for Description', () => {
    const descriptionInput = screen.getByPlaceholderText('Description')
    expect(descriptionInput).toBeInTheDocument()
  })

  it.skip('should render an input for Quantity', () => {
    const quantityInput = screen.getByPlaceholderText('Quantity')
    expect(quantityInput).toBeInTheDocument()
  })

  it.skip('should render an input for Units', () => {
    const unitsInput = screen.getByPlaceholderText('Units (ex: lbs)')
    expect(unitsInput).toBeInTheDocument()
  })

  it.skip('should render an input for Date Harvested', () => {
    const dateHarvestedInput = screen.getByPlaceholderText('Date Harvested')
    expect(dateHarvestedInput).toBeInTheDocument()
  })

  it.skip('should render a submit button', () => {
    const descriptionInput = screen.getByPlaceholderText(Description)
    expect(descriptionInput).toBeInTheDocument()
  })

  it.skip('should render a submit button', () => {
    const logInButton = screen.getByText('Log In')
    expect(logInButton).toBeInTheDocument()
  })
})

<<<<<<< HEAD
test.skip('renders learn react link', () => {
  render(
      <Form />
  );
=======
>>>>>>> 8a31913... Write Form tests for future use

