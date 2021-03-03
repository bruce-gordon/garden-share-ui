import { render, screen } from '@testing-library/react';
import UserListing from './userListing';
import '@testing-library/jest-dom';

describe('UserListing', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserListing />
      </MemoryRouter>
    )
  })

  it.skip('should render a user listing', () => {
    const userListing = screen.getByPlaceholderText('user listing text')
    expect(userListing).toBeInTheDocument()
  })
})
