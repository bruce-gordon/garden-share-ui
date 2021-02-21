import { render, screen } from '@testing-library/react';
import UserOffer from './UserOffer';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <UserOffer />
    </MemoryRouter>
  );

});