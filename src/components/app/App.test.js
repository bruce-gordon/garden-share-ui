import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('App', () => {
  beforeEach(() => {
    /* will need states within App required for logged in 
    and logged out versions of app more tests needed */
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it.skip('should render login page on load', () => {
    const name = screen.getByText()
    expect().toBeInTheDocument()
  })

  it.skip('should display Homepage after Log In button is clicked', async () => {
    const logInButton = screen.getByText('Log In')
    userEvent.click(logInButton)
    const name = await waitFor(() => screen.getByText(text))
    expect(name).toBeInTheDocument()
  })

  it.skip('should render NavBar when user is logged in', () => {
    const name = screen.getByText()
    expect().toBeInTheDocument()
  })

  it.skip('should not render NavBar when user is not logged in', () => {
    const name = screen.getByText()
    expect().not.toBeInTheDocument()
  })

  it.skip('should render SignUp page when sign up button is clicked', async () => {
    const signUpButton = screen.getByText('Sign Up')
    userEvent.click(signUpButton)
    const name = screen.getByText(text)
    await waitFor(() => expect(name).toBeInTheDocument())
  })

  it.skip('should display About page when About button is clicked', async () => {
    const aboutButton = screen.getByText('About')
    userEvent.click(aboutButton)
    const name = await waitFor(() => screen.getByText(text))
    expect(name).toBeInTheDocument()
  })

  it.skip('should display Create New Listing page when Create New Listing button is clicked', async () => {
    const newListingButton = screen.getByText('Create New Listing')
    userEvent.click(newListingButton)
    const name = await waitFor(() => screen.getByText(text))
    expect(name).toBeInTheDocument()
  })

  it.skip('should display Profile page when Profile button is clicked', async () => {
    const profileButton = screen.getByText('Profile')
    userEvent.click(profileButton)
    const name = await waitFor(() => screen.getByText(text))
    expect(name).toBeInTheDocument()
  })

  it.skip('should display new listing when new listing is created', async () => {
    /* more to place here, fill inputs, navigation to create new listing*/
    const submitButton = screen.getByText(text)
    userEvent.click(submitButton)
    const homeLogo = await waitFor(() => screen.getbyAltText('Garden Share Logo'))
    userEvent.click(homeLogo)
    const newListing = screen.getByText('new listing text here')
    expect(newListing).toBeInTheDocument()
  })
})
