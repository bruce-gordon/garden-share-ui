import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

});
