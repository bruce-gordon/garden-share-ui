import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import { MemoryRouter } from 'react-router-dom';

test.skip('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

});