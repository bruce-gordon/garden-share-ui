import { render, screen } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

test.skip('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

});
