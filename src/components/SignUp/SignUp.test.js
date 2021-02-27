import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { createMemoryHistory } from "history";

describe('SignUp', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    )
  })

  it.skip('should render an input for email', () => {
    const emailInput = screen.getByPlaceholderText('Email')
    expect(emailInput).toBeInTheDocument()
  })

  it.skip('should render an input for Password', () => {
    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toBeInTheDocument()
  })

  it.skip('should render a sign up button', () => {
    const signUpButton = screen.getByText('Sign Up')
    expect(loginButton).toBeInTheDocument()
  })

  it.skip('should route user to homepage after user successfully signs up', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <SignUp />
      </Router>
    )
    const signUpButton = screen.getByText('Sign Up')
    userEvent.click(signUpButton)
    expect(history.location.pathname).toBe('/homepage')
  })
})
