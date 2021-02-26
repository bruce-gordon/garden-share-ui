import { render, screen } from '@testing-library/react';
import { Router, MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
  })

  it.skip('should render a home logo link', () => {
    const homeLink = screen.getByTestId('gardenShareLogo')
    expect(gardenShareLogo).toBeInTheDocument()
  })

  it.skip('should render a profile link', () => {
    const profileLink = screen.getByPlaceholderText('Profile')
    expect(profileLink).toBeInTheDocument()
  })

  it.skip('should render a create new listing link', () => {
    const newListingLink = screen.getByText('Create New Listing')
    expect(newListingLink).toBeInTheDocument()
  })

  it.skip('should render an about button', () => {
    const aboutLink = screen.getByText('About')
    expect(aboutLink).toBeInTheDocument()
  })

  it.skip('should render a logout button', () => {
    const logoutButton = screen.getByText('Log Out')
    expect(logoutButton).toBeInTheDocument()
  })

  it.skip('should route user to homepage when home logo link is clicked', () => {
    const history = createMemoryHistory()
    history.push('/profile')
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    )
    const homeLink = screen.getByTestId('gardenShareLogo')
    userEvent.click(homeLink)
    expect(history.location.pathname).toBe('/homepage')
  })

  it.skip('should route user to profile page when profile link is clicked', () => {
    const history = createMemoryHistory()
    history.push('/homepage')
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    )
    const profileLink = screen.getByPlaceholderText('Profile')
    userEvent.click(profileLink)
    expect(history.location.pathname).toBe('/profile')
  })

  it.skip('should route user to create new listing page when create new listing link is clicked', () => {
    const history = createMemoryHistory()
    history.push('/homepage')
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    )
    const newListingLink = screen.getByText('Create New Listing')
    userEvent.click(newListingLink)
    expect(history.location.pathname).toBe('/create-new-listing')
  })

  it.skip('should route user to login page when log out button is clicked', () => {
    const history = createMemoryHistory()
    history.push('/homepage')
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    )
    const logoutButton = screen.getByText('Log Out')
    userEvent.click(logoutButton)
    expect(history.location.pathname).toBe('/login')
  })
})

