import { render, screen } from '@testing-library/react';
import MyListings from './MyListings';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('MyListings', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MyListings />
      </MemoryRouter>
    )
  })

  it.skip('should render listings', () => {
    const listing1 = screen.getByText('text')
    expect(listing1).toBeInTheDocument()
  })
})