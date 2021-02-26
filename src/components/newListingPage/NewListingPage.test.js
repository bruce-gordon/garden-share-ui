import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewListingPage from './NewListingPage';
import '@testing-library/jest-dom';

describe('NewListingPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NewListingPage />
      </MemoryRouter>
    )
  })

  it.skip('should render new listing form', () => {
    const input = screen.getByPlaceholderText('text')
    expect(input).toBeInTheDocument()
  })

  it.skip('should render listing when new listing is submitted through form', () => {
  })

  it.skip('should not create new listing when user clicks button and form is incomplete', () => {
  })
})
