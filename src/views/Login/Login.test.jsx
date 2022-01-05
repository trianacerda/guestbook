import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login/Login';
import { UserProvider } from '../../context/UserContext';
import { ProvideAuth } from '../../context/ProvideAuth';

it('should render Login comp + snapshot test', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <ProvideAuth>
          <Login />
        </ProvideAuth>
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
