import { render, screen, userEvent } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('MyOffers', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MyOffers />
      </MemoryRouter>
    )
  })

  it.skip('should render a offers and listings they were made for', () => {
    const listing = screen.getByText('listing text')
    const offer = screen.getByText('offer text')
    expect(listing).toBeInTheDocument()
    expect(offer).toBeInTheDocument()

  })
})