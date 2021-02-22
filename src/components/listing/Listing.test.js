import { render, screen } from '@testing-library/react';
import Listing from './Listing';
import { MemoryRouter } from 'react-router-dom';

test.skip('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Listing />
    </MemoryRouter>
  );

});
