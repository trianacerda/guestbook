import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { UserProvider } from '../../context/UserContext';

it('should render a LayoutViews + children components', async () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <Header />
      </UserProvider>
    </MemoryRouter>
  );

  const header = await screen.findByText('Aw Shucks-- Please Sign In!');

  expect(header).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
