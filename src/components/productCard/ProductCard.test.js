import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './ProductCard';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProductCard />
      </MemoryRouter>
    )
  })

  it.skip('should render product card', () => {
    const productCard = screen.getByTestId('productCard')
    expect(productCard).toBeInTheDocument()
  })
})
