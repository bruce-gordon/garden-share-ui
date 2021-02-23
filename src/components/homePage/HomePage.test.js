import { render, screen, userEvent } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

<<<<<<< HEAD
test.skip('renders learn react link', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
=======
describe('Homepage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
  })

  it.skip('should render Homepage header', () => {
    const homepageHeader = screen.getByText('Available Produce In Your Area')
    expect(homepageHeader).toBeInTheDocument()
  })

  it.skip('Should render listings', () => {
    const listing1 = screen.getByText('')
    const listing2 = screen.getByText('')
    const listing3 = screen.getByText('')
    expect(listing1).toBeInTheDocument()
    expect(listing2).toBeInTheDocument()
    expect(listing3).toBeInTheDocument()
  })

  it.skip('should render a select dropdown', () => {
    const dropdown = screen.getByTestId(veggieTypesDropdown)
    expect(dropdown).toBeInTheDocument()
  })

  it.skip('should render options of available vegetable types when user clicks on dropdown', () => {
    const dropdown = screen.getByTestId(veggieTypesDropdown)
    userEvent.click(dropdown)
    const option1 = screen.getByTestId('tomato')
    const option2 = screen.getByTestId('potato')
    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
  })

  it.skip('should render filtered listings by vegetable type when user chooses a dropdown option', () => {
    const dropdown = screen.getByTestId(veggieTypesDropdown)
    userEvent.click(dropdown)
    const option = screen.getByTestId('tomato')
    userEvent.click(option)
    const tomato1 = screen.getByTestId('variety')
    const tomato2 = screen.getByTestId('variety')
  })
})
>>>>>>> 594ee88... Write new Homepage tests for future use

