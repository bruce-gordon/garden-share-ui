import { render, screen, userEvent } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Login', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
  })

  it.skip('should render an input for Username', () => {
    const usernameInput = screen.getByPlaceholderText('Username')
    expect(usernameInput).toBeInTheDocument()
  })

  it.skip('should render an input for Password', () => {
    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toBeInTheDocument()
  })

  it.skip('should render a Login button', () => {
    const loginButton = screen.getByText('Login')
    expect(loginButton).toBeInTheDocument()
  })

  it.skip('should invoke a function when login button is clicked', () => {
    const loginButton = screen.getByText('Login')
    userEvent.click(loginButton)
    expect().toHaveBeenCalled()
  })

  it.skip('should render a Sign Up link', () => {
    const signUpLink = screen.getByText('Sign Up')
    expect(signUpLink).toBeInTheDocument()
  })
})
