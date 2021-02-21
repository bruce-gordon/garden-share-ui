import { render, screen } from '@testing-library/react';
import MyListings from './MyListings';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <MyListings />
    </MemoryRouter>
  );

});
