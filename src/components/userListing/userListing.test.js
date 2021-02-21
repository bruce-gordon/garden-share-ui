import { render, screen } from '@testing-library/react';
import UserListing from './UserListing';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <UserListing />
    </MemoryRouter>
  );

});
