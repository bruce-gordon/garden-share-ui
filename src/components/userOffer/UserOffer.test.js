import { render, screen } from '@testing-library/react';
import UserOffer from './UserOffer';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('UserOffer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserOffer />
      </MemoryRouter>
    )
  })

  it.skip('should render user offer', () => {
    const userOffer = screen.getByText('user offer text')
    expect(userOffer).toBeInTheDocument()
  })
})
