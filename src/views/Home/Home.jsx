import React from 'react';
import { MessageProvider } from '../../context/MessageContext';
import GuestBook from '../../components/GuestBook/GuestBook';
import MessageList from '../../components/MessageList/MessageList';

const Home = () => {
  return (
    <MessageProvider>
      <GuestBook />
      <MessageList />
    </MessageProvider>
  );
};

export default Home;
