import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductPage from './ProductPage';
import '@testing-library/jest-dom';

describe('ProductPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>
    )
  })

  it.skip('should render product type and name', () => {
    const productType = screen.getByPlaceholderText('text')
    expect(productType).toBeInTheDocument()
  })

  it.skip('should render product quantity and unit', () => {
    const productQuantity = screen.getByPlaceholderText('text')
    expect(productQuantity).toBeInTheDocument()
  })

  it.skip('should render a product description', () => {
    const description = screen.getByText('text')
    expect(description).toBeInTheDocument()
  })
})

