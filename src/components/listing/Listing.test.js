import { render, screen } from '@testing-library/react';
import Listing from './Listing';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Listing', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Listing />
      </MemoryRouter>
    )
  })

  it.skip('should render an input for Type', () => {
    const name = screen.getByPlaceholderText('text here')
    expect().toBeInTheDocument()
  })
})

