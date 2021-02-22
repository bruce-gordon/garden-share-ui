import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';
import { MemoryRouter } from 'react-router-dom';

test.skip('renders learn react link', () => {
  render(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>
  );

});