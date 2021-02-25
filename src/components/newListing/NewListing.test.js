import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewListing from './NewListing';
import '@testing-library/jest-dom';

describe('NewListing', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NewListing />
      </MemoryRouter>
    )
  })

  it.skip('should render new listing', () => {
  })
})

