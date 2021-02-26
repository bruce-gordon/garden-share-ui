import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Profile', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    )
  })

  it.skip('should render user info', () => {
    const userInfo = screen.getByText('user info text')
    expect(userInfo).toBeInTheDocument()
  })
})
