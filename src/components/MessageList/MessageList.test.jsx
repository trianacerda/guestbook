import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MessageList from './MessageList';
import { UserProvider } from '../../context/UserContext';
import { MessageProvider } from '../../context/MessageContext';

it('should render a MessageList component', async () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <MessageProvider>
          <MessageList />
        </MessageProvider>
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
